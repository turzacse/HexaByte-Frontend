import React from 'react';

const Testimonial = () => {
    return (
        <div>
            This is testimonial page 
        </div>
    );
};

export default Testimonial;




// exports.saveFullDataAndSendACopyToSam = async (req, res) => {
//     const { name, subject, emailVerificationCode, message, country } = req.body;
//     const contact = await Contact.findById(req.user._id);
//     if (contact) {
//         if (contact.emailVerificationCode !== emailVerificationCode) {
//             return res.status(400).json({ message: `Email verification code is invalid, \n\nCode From FrontEnd: ${emailVerificationCode} \n\n Code From BackEnd: ${contact?.emailVerificationCode}` });
//         }

//         await Contact.findByIdAndUpdate(req.user._id, { $set: { country: country, subject: subject, name: name, message: message } });
//         const data = {
//             from: {
//                 email: "no-reply@whalesai.com"
//             },
//             to: [
//                 {
//                     email: "shajjadhossan111@gmail.com"
//                 }
//             ],
//             subject: `${subject}`,
//             html: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Zecurechain User Message</title>
//     <style>
//         body {
//             font-family: 'Arial', sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #e6f2ff;
//         }
//         .container {
//             width: 100%;
//             max-width: 600px;
//             margin: 40px auto;
//             background-color: #ffffff;
//             border-radius: 12px;
//             overflow: hidden;
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//         }
//         .header {
//             background-color: #005266;
//             color: #ffffff;
//             padding: 40px;
//             text-align: center;
//             position: relative;
//         }
//         .logo {
//             display: block;
//             margin: 0 auto 20px; 
//             width: 100px;
//         }
//         .header h1 {
//             margin-top: 10px; 
//             font-size: 28px;
//             font-weight: 700;
//         }
//         .header p {
//             margin: 10px 0 0;
//             font-size: 16px;
//         }
//         .content {
//             padding: 30px;
//             background-color: #f9f9f9;
//             color: #333333;
//         }
//         .content h2 {
//             font-size: 22px;
//             font-weight: 600;
//             margin-bottom: 20px;
//         }
//         .message-box, .reply-box {
//             background-color: #e6f2ff;
//             padding: 15px;
//             border-radius: 8px;
//             margin-bottom: 20px;
//             font-size: 16px;
//             line-height: 1.5;
//             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
//         }
//         .message-box strong, .reply-box strong {
//             font-weight: bold;
//             color: #005266;
//         }
//         .footer {
//             background-color: #e6f2ff;
//             padding: 20px;
//             text-align: center;
//             color: #555555;
//             border-top: 1px solid #dddddd;
//             font-size: 14px;
//         }
//         .footer a {
//             color: #005266;
//             text-decoration: none;
//             font-weight: bold;
//         }
//         .footer p {
//             margin: 5px 0;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="header">
//             <img src="https://backend.whalesai.com/public/ffmpeg/whalesailogo.png" alt="WhalesAI Logo" class="logo">
//             <h1>WhalesAI Support</h1>
//             <p>Thank you for reaching out. Below is your conversation summary.</p>
//         </div>
//         <div class="content">
//             <!-- <h2>Conversation:</h2> -->
//             <div class="message-box">
//                 <strong>Name:</strong>
//                 <p>${name}</p>
//             </div>
//             <div class="reply-box">
//                 <strong>Email:</strong>
//                 <p>${email}</p>
//             </div>
//             <div class="reply-box">
//                 <strong>Message:</strong>
//                 <p>${message}</p>
//             </div>
//         </div>
//         <div class="footer">
//             <p>Best Regards,</p>
//             <p>whalesai.com Team</p>
//             <p><a href="mailto:support@whalesai.com">support@whalesai.com</a></p>
//         </div>
//     </div>
// </body>
// </html>`
//         }

//         const sendMail = await axios({
//             method: "POST",
//             url: "https://api.mailersend.com/v1/email",
//             data: data,
//             headers: {
//                 "content-Type": "application/json",
//                 "authorization": `Bearer ${process.env.MAILER_SEND_TOKEN}`
//             }
//         });

//         if (sendMail.status === 202) {
//             res.status(200).json({
//                 message: "We have received your message. Please allow 48 hours to respond.",
//             });
//         }
//         else {
//             res.status(400).send("Email not sent");
//         }
//     }
//     else {
//         res.status(400).json({ message: "Invalid Email!" });
//     }

// }