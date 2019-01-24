var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'virat.sajee1998@gmail.com',
    pass: 'solla'
  }
});

var mailOptions = {
  from: 'virat.sajee1998@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  text: 'This is easy !',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
