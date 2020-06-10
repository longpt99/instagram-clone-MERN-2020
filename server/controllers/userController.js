const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'cloud-img-longpt99',
  api_key: '181469854372294',
  api_secret: 'WZkPqavk03tsbjALm48W7Ujj7_s',
});

module.exports.getUser = (req, res) => {
  res.json(req.user)
}

module.exports.postImage = (req, res) => {
  console.log(123)
  debugger;
}