const express = require("express");
const router = express.Router();
const Meals = require("../../models/Meals");



router.get("/seed", async (req, res) => {
  await Meals.deleteMany({});
  await Meals.create(Meals);

  res.send(`Database Seeded`);
});

// router.post("/",[])


//Create
router.post('/api/meals', async (req, res) => {
  try {
    let newMeal = new Meals(req.body);
    await newMeal.save();

    res.json(newMeal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Read
router.get('/api/meals', async (req, res) => {
  try {
    const allMeals = await Meals.find({});
    res.json(allMeals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Update
router.put('/api/meals', async (req, res) => {
  try {
    const updatedMeal = await Meals.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedMeal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Delete
app.delete('/api/meals:id', async (req, res) => {
  try {
    await Meals.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: "Item Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Error checking middleware
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

module.exports = router;
