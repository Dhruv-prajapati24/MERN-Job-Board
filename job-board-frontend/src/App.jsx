import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Job Board 🚀</h1>

      {jobs.map((job) => (
        <div key={job._id}>
          <h2>{job.title}</h2>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;