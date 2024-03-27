const express = require("express");
const router = express.Router();
const Days = require("../../models/ThisWeeksMeals");

app.get('/api/days/seed', async (req, res) => {
  await Days.deleteMany({});
  await Days.create(Days);

  res.send(`Database Seeded`);
});

//Create
app.post('/api/days', async (req, res) => {
  try {
    let newDay = new Days(req.body);
    await newDays.save();

    res.json(newDay);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//Read
app.get('/api/days', async (req, res) => {
  try {
    const allDays = await Days.find({});
    res.json(allDays);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//Update
app.put('/api/days:id', async (req, res) => {
  try {
    const updatedDay = await Days.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedDay);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//Delete
app.delete('/api/days:id', async (req, res) => {
  try {
    await Days.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: 'Item Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
