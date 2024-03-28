const express = require("express");
const router = express.Router();
const Recipe = require("../../models/Recipe");








//Create
router.post('/', async (req, res) => {
  try {
    let newRecipe = new Recipe(req.body);
    await newRecipe.save();

    res.json(newRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Read
router.get('/', async (req, res) => {
  try {
    const allRecipes = await Recipe.find({});
    res.json(allRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Update
router.put('/:id', async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Delete
router.delete(':id', async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "Item Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Error checking middleware
// app.use((err, _req, res, next) => {
//   res.status(500).send("Seems like we messed up somewhere...");
// });

module.exports = router;
