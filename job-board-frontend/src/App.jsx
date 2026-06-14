
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Job Board</h2>

        <ul>
          <li>Home</li>
          <li>Browse Jobs</li>
          <li>Contact</li>
        </ul>

        <button className="postBtn">Post A Job</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="left">
          <h3>{jobs.length}+ Jobs Listed</h3>

          <h1>Find Your Dream Job</h1>

          <p>
            Explore opportunities and find the perfect job for your career.
          </p>

          <button className="resumeBtn">
            Upload Your Resume
          </button>
        </div>

        <div className="right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
        </div>
      </section>

      {/* Jobs Section */}
      <section className="jobsSection">
        <h1>Latest Jobs</h1>

        <div className="jobContainer">
          {jobs.map((job) => (
            <div className="jobCard" key={job._id}>
              <h2>{job.title}</h2>

              <p>
                <strong>Company:</strong> {job.company}
              </p>

              <p>
                <strong>Location:</strong> {job.location}
              </p>

              <p>
                <strong>Salary:</strong> ₹{job.salary}
              </p>

              <button className="applyBtn">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;

