import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobTable from './JobTable';
import Api from '../helper/api';

const JobTableItem = () => {
  const [jobApplication, setJobApplication] = useState({});
  // isLoading state to ensure component renders after api call
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const columnNames = ['Date', 'Company', 'Job Title', 'Application Method'];

  const api = new Api();
  const fetchJobApplication = async () => {
    // start api call and loading
    setIsLoading(true);
    const res = await api.show(id);
    setJobApplication(res.data);
    // end api call and loading
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobApplication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="text-center">
        {!isLoading ? (
          <JobTable
            columnNames={columnNames}
            jobApplications={jobApplication}
          />
        ) : (
          <h3>No Data to show at this time</h3>
        )}
      </div>
    </div>
  );
};

export default JobTableItem;
