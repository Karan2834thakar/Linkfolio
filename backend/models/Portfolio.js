const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  profileImage: String, // NEW
  about: String,        // NEW
  skills: [String],
  projects: [           // NEW
    {
      title: String,
      description: String,
      link: String,
    },
  ],
  experience: [         // NEW
    {
      company: String,
      role: String,
      duration: String,
      description: String,
    },
  ],
  linkedin: String,
  github: String,
  email: String,        // NEW
  phone: String,        // NEW
  location: String,
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
