const db = require("../config/db.config");
const nodemailer = require('nodemailer');

const InchargeLogin = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    const [inchargeResult] = await db.query(
      'SELECT * FROM dept_incharge WHERE contact = ? AND password = ?',
      [phone_number, password]
    );

    if (inchargeResult.length === 0) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }

    // Get the department
    const dept_name = inchargeResult[0].dept;

    const [teams] = await db.query(
      'SELECT * FROM event_registrations WHERE DEPARTMENT = ?',
      [dept_name]
    );

    res.status(200).json({ teams });
    
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


const eventFormLinks = {
  'Coding Challenge': 'https://docs.google.com/forms/d/e/1FAIpQLSeLwI-5p7tRRW8Pd8OElJgH3RAlc4leqaRKePvQ-tImpfxJTw/viewform',//
  'Design Challenges': 'https://forms.gle/ukCajXJnA6xnSSz59',//
  'Buildathon': 'https://forms.gle/t9kMba643EfiRXYa8',//
  'Technical Paper Presentation': 'link_not_provided_no_need_to_fill_googleform',
  'Technical Quiz': 'https://docs.google.com/forms/d/e/1FAIpQLScw3JicU_6vwMBxZgokm2uHlppUM6pRK-RuwJrM1cwP0Xwaig/viewform?usp=sf_link',
  'App Arena': 'link_not_provided',
  'Technical Debate': 'https://forms.gle/MGPSyiP1ePiudstp8',//
  'Project Exhibition': 'https://forms.gle/YHGCcvfc5wh1m9zi8',
  'Next Gen Gamers': 'https://forms.gle/A9vmQkd7siAVEzgcA',//
  'AR VR Contest': 'https://docs.google.com/forms/d/e/1FAIpQLSfrN-l_OQmBNjfvpVKs0a5dXamlIPeOLK-QeQnIJgJKRStpLA/viewform?usp=sf_link',//
  'Hackathon': 'https://docs.google.com/forms/d/e/1FAIpQLSfx8KbdHlLg1HGs8H-HSxsDIyrvt99KlZVVHHnw_dyKzEfCuw/viewform?usp=sharing',//
  'Youtube Challenges': 'https://forms.gle/ncyk2HJBKMV6kh9y8',//
  'Go Karting': 'https://forms.gle/VUbt1qFV82BeQmWm6',//
  'Drones and Robotics Design Challenge': 'https://forms.gle/wa4xfjzcJjRJW8eE6'//
};


const updatePaymentStatus = async (req, res) => {
  const { teamIds } = req.body;

  console.log(teamIds)

  if (!teamIds || !teamIds.length) {
    return res.status(400).json({ message: "No team IDs provided." });
  }

  try {
    const placeholders = teamIds.map(() => "?").join(", ");
    
    const query = `UPDATE event_registrations SET PAYMENT_STATUS = 1 WHERE TEAM_ID IN (${placeholders})`;

    const result = await db.query(query, teamIds);
    
    if (result[0].affectedRows > 0) {
      res.status(200).json({ message: "Payment status updated successfully." });
      console.log("Payment status updated successfully.");

      const [dbdata] = await db.query(`SELECT TL_MAIL, TEAM_NAME, EVENT_NAME, fee, NO_OF_MEMBERS FROM event_registrations WHERE TEAM_ID IN (${placeholders})`, teamIds);

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        service: 'gmail',
        auth: {
          user: 'technosummit.sist.2024@gmail.com',
          pass: 'rswx prgu jofx ffpk'
        }
      });
      //updated

      const sendEmail = (recipientEmail, subject, message) => {
        const mailOptions = {
          from: 'sathyabama.technosummit2024@gmail.com',
          to: recipientEmail,
          subject: subject,
          html: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(`Error sending email to ${recipientEmail}:`, error);
          } else {
            console.log(`Email sent to ${recipientEmail}: ${info.response}`);
          }
        });
      };

      // Loop through the data and send emails
      dbdata.forEach(entry => {
        const recipientEmail = entry.TL_MAIL;
        const eventName = entry.EVENT_NAME;
        const teamName = entry.TEAM_NAME;
        const amount = entry.fee;
        const members = entry.NO_OF_MEMBERS;

        const formLink = eventFormLinks[eventName];

        const subject = 'TechnoSummit-2024 Payment Updated';
        const message = `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
    <h2 style="color: #4CAF50;">🎉 Congratulations, Team <strong>${teamName}!</strong> 🎉</h2>
    <p style="font-size: 16px;">We are thrilled to inform you that your team has successfully registered for the <strong>${eventName}</strong> event!</p>
    
    <h3 style="color: #FF5722;">✔️ Payment Confirmation</h3>
    <p>Your payment of <strong>Rs.${amount}</strong> has been <strong style="color: #4CAF50;">received</strong> and updated in our records.</p>

    <h3 style="color: #007BFF;">👥 Team Details</h3>
    <ul style="list-style-type: none; padding-left: 0;">
      <li><strong>Team Name:</strong> ${teamName}</li>
      <li><strong>Number of Members:</strong> ${members}</li>
    </ul>
    
    <p style="font-size: 16px; margin-top: 20px;">We wish you and your team the best of luck in the competition! If you have any questions or need further assistance, feel free to reach out to us.</p>

    <p>Please complete the event registration by filling out this <a href="${formLink}" style="color: #007BFF;">Google Form</a>.</p>
    
    <p style="font-size: 14px; color: #999;">Thank you for being part of Techno Summit 2024. Let’s make this event a memorable one! 🚀</p>

    <p style="font-size: 12px; color: #aaa; text-align: center;">For more information, contact us at <a href="mailto:sathyabama.technosummit2024@gmail.com" style="color: #007BFF;">sathyabama.technosummit2024@gmail.com</a></p>
  </div>
`;


        sendEmail(recipientEmail, subject, message);
      });
      console.log("Payment status updated and emails sent successfully.");
      //return res.status(200).json({ message: 'Payment status updated and emails sent successfully.' });

    } else {
      return res.status(400).json({ message: "No teams found to update." });
    }

  } catch (error) {
    console.error('Error updating payment status:', error);
    return res.status(500).json({ error: "Failed to update payment status." });
  }
};


module.exports = {updatePaymentStatus,InchargeLogin};
