import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PortfolioPage = () => {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/portfolio/${username}`)
      .then(res => setData(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, [username]);

  if (!data) return <p className="text-center text-white mt-10">Loading portfolio...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 py-10 flex justify-center">
      <div className="w-full max-w-4xl space-y-10 animate-fadeIn">
        {/* Profile */}
        <div className="text-center space-y-3">
          {data.profileImage && (
            <img
              src={data.profileImage}
              alt="Profile"
              className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto shadow-lg object-cover"
            />
          )}
          <h1 className="text-3xl sm:text-4xl font-bold">{data.name}</h1>
          <p className="text-gray-400 text-sm">@{data.username}</p>
          <p className="text-gray-300">{data.about}</p>
        </div>

        {/* Skills */}
        {Array.isArray(data.skills) && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {data.skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-800 text-white px-4 py-1 rounded-full text-xl shadow">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects?.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-center mb-4">Projects</h2>
            <div className="space-y-4">
              {data.projects.map((project, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-center mb-4">Experience</h2>
            <div className="space-y-4">
              {data.experience.map((exp, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded shadow">
                  <h3 className="text-lg font-bold">{exp.role} at {exp.company}</h3>
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-4">Contact Info</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Location:</strong> {data.location}</p>
            <p><strong>LinkedIn:</strong> <a href={data.linkedin} className="text-blue-400 hover:underline" target="_blank">{data.linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href={data.github} className="text-blue-400 hover:underline" target="_blank">{data.github}</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
