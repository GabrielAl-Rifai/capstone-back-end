const express = require("express");
const router = express.Router();
const Meal = require("../../models/Meal");



router.get("/seed", async (req, res) => {
  await Meal.deleteMany({});
  await Meal.create(Meal);

  res.send(`Database Seeded`);
});




//Create
router.post('/', async (req, res) => {
  try {
    let newMeal = new Meal(req.body);
    await newMeal.save();

    res.json(newMeal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Read
router.get('/api/Meal', async (req, res) => {
  try {
    const allMeal = await Meal.find({});
    res.json(allMeal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Update
router.put('/:id', async (req, res) => {
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedMeal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Delete
router.delete(':id', async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "Item Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

Error checking middleware
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

module.exports = router;
