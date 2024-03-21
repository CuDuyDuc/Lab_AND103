const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "duccu1403@gmail.com",
        pass: "kbri fifn nvsy qfre"
    },
});

module.exports = transporter;