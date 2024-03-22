const mongoose = require("mongoose");

const MealsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  readyInMinutes: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  imageUrls: {
    type: String,
    required: false,
  },
});

module.exports = Meals = mongoose.model("meals", MealsSchema);
//     id: {
//       type: string;
//     },
//       title: {
//       type: string;
//     },
//       readyInMinutes: {
//       type: string;
//     },
//       image: {
//       type: string;
//     },
//       imageUrls: {
//       type: string;
//     },
//   ]
//   //schema
//   meals:
//   0:
//     id:49993
//     title:"Cream Cheese Banana Nut Bread"
//     readyInMinutes:90
//     image:"cream-cheese-banana-nut-bread-2-49993.jpg"
//     imageUrls:
//       0:"cream-cheese-banana-nut-bread-2-49993.jpg"
//       1:"cream_cheese_banana_nut_bread-49993.jpg"
//   1:
//     id:537176
//     title:"Leftover Rice Casserole"
//     readyInMinutes:45
//     image:"leftover-rice-casserole-537176.jpg"
//     imageUrls:
//       0:"leftover-rice-casserole-537176.jpg"
//   2:
//     id:116679
//     title:"Leek & Cheese Pie"
//     readyInMinutes:75
//     image:"leek-amp-cheese-pie-2-116679.jpg"
//     imageUrls:
//       0:"leek-amp-cheese-pie-2-116679.jpg"
//       1:"leek_amp_cheese_pie-116679.jpg"