var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kaif8700979251@gmail.com',
    pass: 'kaifkhan'
  }
});

var mailOptions = {
  from: 'kaif8700979251@gmail.com',
  to: 'khan8700979251@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});