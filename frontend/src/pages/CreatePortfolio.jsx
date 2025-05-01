import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePortfolio = () => {
  const [portfolioData, setPortfolioData] = useState({
    name: "",
    username: "",
    about: "",
    profileImage: "",
    skills: "",
    projects: [{ title: "", description: "", link: "" }],
    experience: [{ role: "", company: "", duration: "", description: "" }],
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: ""
  });
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPortfolioData({
      ...portfolioData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use the Render backend URL for making the API request
      const res = await axios.post("https://linkfolio.onrender.com/api/portfolio", portfolioData);
      
      // After successful creation, navigate to their portfolio page
      setPortfolioUrl(`https://linkfolio.onrender.com/${res.data.username}`);
      // Redirect to portfolio page
      navigate(`/${res.data.username}`);
    } catch (err) {
      console.error("Error creating portfolio:", err);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Create Your Portfolio</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Username */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={portfolioData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Username (URL identifier)</label>
          <input
            type="text"
            name="username"
            value={portfolioData.username}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        {/* About Me */}
        <div>
          <label className="block text-gray-700">About Me</label>
          <textarea
            name="about"
            value={portfolioData.about}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        {/* Skills */}
        <div>
          <label className="block text-gray-700">Skills</label>
          <input
            type="text"
            name="skills"
            value={portfolioData.skills}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Comma separated (e.g., JavaScript, React, Node.js)"
            required
          />
        </div>
        {/* Projects */}
        <div>
          <label className="block text-gray-700">Projects</label>
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className="space-y-4 mb-4">
              <input
                type="text"
                name={`projects[${idx}].title`}
                value={project.title}
                onChange={(e) => {
                  const newProjects = [...portfolioData.projects];
                  newProjects[idx].title = e.target.value;
                  setPortfolioData({ ...portfolioData, projects: newProjects });
                }}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Project Title"
                required
              />
              <textarea
                name={`projects[${idx}].description`}
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...portfolioData.projects];
                  newProjects[idx].description = e.target.value;
                  setPortfolioData({ ...portfolioData, projects: newProjects });
                }}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Project Description"
                required
              />
              <input
                type="text"
                name={`projects[${idx}].link`}
                value={project.link}
                onChange={(e) => {
                  const newProjects = [...portfolioData.projects];
                  newProjects[idx].link = e.target.value;
                  setPortfolioData({ ...portfolioData, projects: newProjects });
                }}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Project Link (optional)"
              />
            </div>
          ))}
        </div>
        {/* Experience */}
        <div>
          <label className="block text-gray-700">Experience</label>
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="space-y-4 mb-4">
              <input
                type="text"
                name={`experience[${idx}].role`}
                value={exp.role}
                onChange={(e) => {
                  const newExperience = [...portfolioData.experience];
                  newExperience[idx].role = e.target.value;
                  setPortfolioData({ ...portfolioData, experience: newExperience });
                }}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Role"
                required
              />
              <input
                type="text"
                name={`experience[${idx}].company`}
                value={exp.company}
                onChange={(e) => {
                  const newExperience = [...portfolioData.experience];
                  newExperience[idx].company = e.target.value;
                  setPortfolioData({ ...portfolioData, experience: newExperience });
                }}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Company Name"
                required
              />
              <input
                type="text"
                name={`experience[${idx}].duration`}
                value={exp.duration}
                onChange={(e) => {
                  const newExperience = [...portfolioData.experience];
                  newExperience[idx].duration = e.target.value;
                  setPortfolioData({ ...portfolioData, experience: newExperience });
                }}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Duration"
                required
              />
              <textarea
                name={`experience[${idx}].description`}
                value={exp.description}
                onChange={(e) => {
                  const newExperience = [...portfolioData.experience];
                  newExperience[idx].description = e.target.value;
                  setPortfolioData({ ...portfolioData, experience: newExperience });
                }}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Job Description"
                required
              />
            </div>
          ))}
        </div>
        {/* Contact Information */}
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={portfolioData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={portfolioData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={portfolioData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            value={portfolioData.linkedin}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">GitHub</label>
          <input
            type="text"
            name="github"
            value={portfolioData.github}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        {/* Submit */}
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Create Portfolio
          </button>
        </div>
      </form>

      {/* Display Portfolio URL */}
      {portfolioUrl && (
        <div className="mt-6 text-center">
          <p className="text-green-600">
            Your portfolio is live at:{" "}
            <a href={portfolioUrl} target="_blank" className="underline text-blue-600">
              {portfolioUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default CreatePortfolio;
