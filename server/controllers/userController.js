const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');

const Post = require('../models/postModel');

cloudinary.
config({
  cloud_name: 'cloud-img-longpt99',
  api_key: '181469854372294',
  api_secret: 'WZkPqavk03tsbjALm48W7Ujj7_s',
});

module.exports.getUser = (req, res) => {
  res.json(req.user)
}

module.exports.postImage = async (req, res) => {
  const uploadFile = req.files.images;
  const fileName = req.files.images.name;

  await uploadFile.mv(`./public/uploads/postImages/${fileName}`, (err, data) => {
    console.log(1);
    console.log(err)
  })
  // await cloudinary.uploader.upload(
  //   req.files.file.name, 
  //   {
  //     public_id: `instagram/POST/img_${file.md5}`
  //   },
  //   (error, result) => {
  //     debugger;
  //     const { url } = result;
  //     Post.create({
  //       _id: new mongoose.Types.ObjectId,
  //       imageUrl: url, 
  //       caption,
  //       userId: req.user.id,
  //     }, (err, data) => {
  //       console.log(data)
  //     })
  //   }
  // );
}