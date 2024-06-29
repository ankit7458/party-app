const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');



router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.render('index', { employees });
        // res.send("this page is working")
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


router.post('/add', async (req, res) => {
    const name = req.body.name;
    const newEmployee = new Employee({ name });

    try {
        await newEmployee.save();
        res.redirect('/api');
        // res.send("User added Successfully")
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to add employee');
    }
});

// Get random 3 employees
router.get('/random', async (req, res) => {
    try {
        let employees = await Employee.aggregate([{ $sample: { size: 3 } }]);
        res.json(employees);
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to get random employees');
    }
});

//delete All data

router.post('/reset', async (req, res) => {
    try {
      await Employee.deleteMany({});
    } catch (err) {
      console.error('Error resetting items:', err);
    }
  });




module.exports = router;