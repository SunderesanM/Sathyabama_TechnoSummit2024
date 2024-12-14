const db = require("../config/db.config");
const ExcelJS = require("exceljs");

// Coordinator login function (unchanged)
const coordinatorLogin = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    const [coordinatorResult] = await db.query(
      "SELECT * FROM event_incharge WHERE contact = ? AND password = ?",
      [phone_number, password]
    );

    if (coordinatorResult.length === 0) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }

    // Get the event
    const event_name = coordinatorResult[0].event;

    const [result] = await db.query(
      'SELECT er.TEAM_ID, er.TEAM_NAME, er.EVENT_NAME, er.DEPARTMENT, er.NO_OF_MEMBERS, er.TL_MAIL, er.TL_contact, er.fee, md.MEMBERS_NAME, md.DEPARTMENT, md.REGISTER_NO, md.YEAR_OF_STUDY FROM event_registrations er JOIN member_details md ON er.TEAM_ID = md.TEAM_ID WHERE er.EVENT_NAME = ? AND er.PAYMENT_STATUS = 1;',
      [event_name]
    );

    // Initialize the teamMap 
    const teamsMap = {};

    // Fill the teamMap with entries 
    result.forEach((row) => {
      const {
        TEAM_ID, TEAM_NAME, EVENT_NAME, TEAM_DEPARTMENT, NO_OF_MEMBERS, TL_MAIL,
        TL_contact, fee, MEMBERS_NAME, REGISTER_NO, YEAR_OF_STUDY
      } = row;

      if (!teamsMap[TEAM_ID]) {
        teamsMap[TEAM_ID] = {
          TEAM_ID, TEAM_NAME, EVENT_NAME, TEAM_DEPARTMENT, NO_OF_MEMBERS,
          TL_MAIL, TL_contact, fee, members: []  // Initialize members array
        };
      }

      // Add the team members inside the members array of teamsMap 
      teamsMap[TEAM_ID].members.push({
        MEMBERS_NAME, REGISTER_NO, YEAR_OF_STUDY
      });
    });

    const teams = Object.values(teamsMap);

    res.status(200).json({ teams, event_name });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// To download the team data in Excel format
const download = async (req, res, next) => {
  const { event } = req.body;

  try {
    const [data] = await db.query(
      "SELECT e.TEAM_ID, e.TEAM_NAME, e.EVENT_NAME, e.NO_OF_MEMBERS, e.TL_MAIL, e.PAYMENT_STATUS, e.TL_CONTACT, m.MEMBERS_NAME, m.REGISTER_NO, m.YEAR_OF_STUDY, m.department FROM event_registrations e INNER JOIN member_details m ON e.TEAM_ID = m.TEAM_ID WHERE e.PAYMENT_STATUS = 1 AND e.EVENT_NAME = ?",
      [event]
    );

    if (!data || !Array.isArray(data) || data.length === 0) {
      return res.status(400).send("Invalid or no data provided");
    }

    // Convert JSON to CSV manually
    const csv = convertJSONToCSV(data);
    req.csvData = csv;
    req.eventName = event;

    next();
  } catch (error) {
    console.error("Error while converting to CSV:", error);
    res.status(500).send("Failed to convert data to CSV");
  }
};

// Stream CSV data as Excel file without saving to the file system
const linkdownload = async (req, res) => {
  try {
    const { csvData, eventName } = req;

    if (!csvData) {
      return res.status(400).send("No CSV data available");
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    // Split CSV data into rows and cells, and add to the worksheet
    const rows = csvData.split("\n").map((row) => row.split(","));
    rows.forEach((row) => {
      worksheet.addRow(row);
    });

    // Set headers to trigger download in the browser
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${eventName}.xlsx"`
    );

    // Stream the Excel file directly to the client
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Error while converting CSV to Excel:", error);
    res.status(500).send("Failed to convert CSV to Excel");
  }
};

// Convert JSON to CSV format
const convertJSONToCSV = (data) => {
  const flattenObject = (obj, parent = "", res = {}) => {
    for (let key in obj) {
      const propName = parent ? `${parent}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], propName, res);
      } else {
        res[propName] = obj[key];
      }
    }
    return res;
  };

  const flatData = data.map((item) => flattenObject(item));

  const headers = Object.keys(flatData[0]);
  const csvRows = [headers.join(",")];

  flatData.forEach((row) => {
    const values = headers.map((header) => (row[header] || ""));
    csvRows.push(values.join(","));
  });

  return csvRows.join("\n");
};

module.exports = { coordinatorLogin, download, linkdownload };
