// function validateUser(data) {
//   if (!data.fullname === fullname) {
//     if (!data.password === password) {
//       if (!data.email === email) {
//         if (!data.phone === phone) {
//           if (!data.gender === gender) {
//             if (!data.username === username) {
//               return json({
//                 message: "invalid user details",
//               });
//             }
//           }
//         }
//       }
//     }
//   }
// }
function registerUser(req, res) {
  if (
    !req.body.fullname ||
    !req.body.email ||
    !req.body.password ||
    !req.body.username ||
    !req.body.phone ||
    !req.body.gender
  ) {
    return res.status(400).json({
      message: "Some fields missing",
      successful: false,
    });
  } else {
    return res.status(200).json({
      message: "successfully registered",
      successful: true,
    });
  }
}

module.exports = {
  registerUser,
};
