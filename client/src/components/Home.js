import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../helper/api';

const Home = () => {
  const [jobApplications, setJobApplications] = useState([]);

  const api = new Api();
  const fetchJobApplications = async () => {
    const res = await api.index();
    setJobApplications(res.data);
  };

  // ensure fetchJobApplications is called once only
  useEffect(() => {
    fetchJobApplications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO refactor to table
  const renderJobApplications = () => {
    return jobApplications.map((jobApplication) => {
      return (
        <li key={jobApplication.id}>
          {jobApplication.date} | <strong>Title</strong>:{' '}
          {jobApplication.job_title} | <strong>Method</strong>:{' '}
          {jobApplication.application_method}
        </li>
      );
    });
  };

  return (
    <div>
      <div className="text-center">
        <h1>This is the Home Page</h1>
        <p>
          Go to <Link to="/diagram">Diagram</Link> to view the current Sankey
          Diagram
        </p>
        <p>
          Go to <Link to="/list">List</Link> to view a tabular list of current
          data
        </p>
      </div>
      <ul>{renderJobApplications()}</ul>
    </div>
  );
};

export default Home;
