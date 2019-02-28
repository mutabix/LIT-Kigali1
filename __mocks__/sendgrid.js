const response = user => [
  {
    statusCode: 202,
    from: user.from
  }
];
const sendgrid = user => new Promise(resolve => resolve(response(user)));

export default sendgrid;
