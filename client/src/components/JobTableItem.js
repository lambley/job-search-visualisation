import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../helper/api';

const JobTableItem = () => {
  const [jobApplication, setJobApplication] = useState({});
  const { id } = useParams();

  const { date, job_title, application_method } = jobApplication;

  const api = new Api();
  const fetchJobApplication = async () => {
    const res = await api.show(id);
    setJobApplication(res.data);
    console.log(jobApplication);
  };

  useEffect(() => {
    fetchJobApplication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>{date}</p>
      <p>{job_title}</p>
      <p>{application_method}</p>
    </div>
  );
};

export default JobTableItem;
