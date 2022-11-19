import { useState, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Api from '../helper/api';
import JobTable from '../components/JobTable';

const List = () => {
  const [jobApplications, setJobApplications] = useState([]);

  const columnNames = ['Date', 'Job Title', 'Application Method'];

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate('new', { replace: true }),
    [navigate]
  );

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
      <div fluid>
        <h1>
          List of current job application data{' '}
          <Button variant="primary" onClick={handleOnClick}>
            Create New Record
          </Button>
        </h1>
      </div>

      <JobTable columnNames={columnNames} jobApplications={jobApplications} />
    </div>
  );
};

export default List;
