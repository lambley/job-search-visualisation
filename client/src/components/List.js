import { useState, useEffect } from 'react';
import Api from '../helper/api';
import JobTable from './JobTable';

const List = () => {
  const [jobApplications, setJobApplications] = useState([]);

  const columnNames = ['Date', 'Job Title', 'Application Method'];

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
  return (
    <div className="text-center">
      <h1>List of current job application data</h1>
      <JobTable columnNames={columnNames} jobApplications={jobApplications} />
    </div>
  );
};

export default List;
