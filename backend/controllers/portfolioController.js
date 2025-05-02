const Portfolio = require('../models/Portfolio');

// POST /api/portfolio
exports.createPortfolio = async (req, res) => {
  try {
    const newPortfolio = new Portfolio(req.body);
    // console.log(req.body)
    console.log("ready chhe")
    await newPortfolio.save();
    console.log("hale chhe")
    res.status(201).json({username: req.body.username, message: 'Portfolio created successfully!' });
  } catch (err) {
    res.status(400).json({ error: 'Username must be unique or check fields.' });
  }
};

// GET /api/portfolio/:username
exports.getPortfolio = async (req, res) => {
  try {
    const { username } = req.params;
    const portfolio = await Portfolio.findOne({ username });

    if (!portfolio) {
      console.log("Portfolio not found for username:", username);
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
