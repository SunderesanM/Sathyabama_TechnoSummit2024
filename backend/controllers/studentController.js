const db = require('../config/db.config');
const mailer = require('nodemailer');

const register = async (req, res) => {
    try {
        // Fetch registration data from the request body
        const registrationData = req.body;
        console.log("Registration Data:", registrationData);

        const { teamName, leaderEmail, leaderContact, dept, numberOfMembers, members } = registrationData;

        // calculate the amount to be paid 
        const amountToBePaid = parseFloat(registrationData.event.details.fee * numberOfMembers);

        // Insert team data into event_registrations table
        const [teamResult] = await db.query(
            `INSERT INTO event_registrations (TEAM_NAME, EVENT_NAME, DEPARTMENT, NO_OF_MEMBERS, TL_MAIL, PAYMENT_STATUS, TL_CONTACT, fee) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [teamName, registrationData.event.details.name, dept, numberOfMembers, leaderEmail, registrationData.payment_status, leaderContact, amountToBePaid]
        );

        const teamId = teamResult.insertId;

        // Insert members data into member_details table
        const memberPromises = members.map(member => {
            return db.query(
                `INSERT INTO member_details (TEAM_ID, DEPARTMENT, MEMBERS_NAME, REGISTER_NO, TEAM_NAME, YEAR_OF_STUDY) 
                VALUES (?, ?, ?, ?, ?, ?)`,
                [teamId, member.department, member.name, member.regNo, teamName, member.yearOfStudy]
            );
        });

        await Promise.all(memberPromises);

        // fetch the details of the department coordinator 
        const deptCoord = await db.query(`SELECT faculty, contact from dept_incharge where dept = ?;`,
          [dept]
        );
        const faculty = deptCoord[0][0].faculty;
        const facultyContact = deptCoord[0][0].contact;

        var transporter = mailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          service: 'gmail',
          auth: {
            user: 'technosummit.sist.2024@gmail.com',
            pass: 'rswx prgu jofx ffpk'
          }
        });
      //
        var mail = {
          from: 'sist.technosummit24@gmail.com',
          to: leaderEmail,
          subject: `🎉 Congratulations ${teamName}! 🎉`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
              <h2 style="color: #4CAF50;">Congratulations, <strong>${teamName}!</strong></h2>
              <p>You have been <strong style="color: #007BFF;">successfully registered</strong> for the Techno Summit 2024. Please follow the instructions below to complete your registration.</p>
              
              <h3 style="color: #FF5722;">Payment Details:</h3>
              <ul style="list-style-type: none; padding-left: 0;">
                <li><strong>Amount to be Paid:</strong> <span style="color: #4CAF50;">${amountToBePaid} INR</span></li>
                <li><strong>Department Coordinator:</strong> ${faculty}</li>
              </ul>
        
              <p>If you have any questions, feel free to reach out to us at <a href="mailto:sathyabama.technosummit2024@gmail.com" style="color: #007BFF;">sathyabama.technosummit2024@gmail.com</a>.</p>
              
              <hr style="border: 0; height: 1px; background: #ddd;">
              
              <p style="color: #999; font-size: 12px;">Thank you for being a part of Techno Summit 2024!</p>
            </div>
          `
        };        
      
        transporter.sendMail(mail, function (error, info) {
          if (error) {
            console.log(error);
            res.status(500).send('Error sending email: ' + error.message);
          } else {
            console.log('Email sent: ' + info.response);
            //res.status(200).send(info.response);
          }
        });

        res.status(200).json({ message: "Success" , amountToBePaid: amountToBePaid, registrationData });

    } catch (error) {
        console.error("Error occurred while registering:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { register };
