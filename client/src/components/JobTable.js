import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobTable = ({ jobApplications, columnNames }) => {
  const renderColumnNames = () => {
    if (columnNames) {
      return columnNames.map((col, index) => {
        return <th key={index}>{col}</th>;
      });
    }
  };

  const renderRowData = () => {
    // check if more than pne object to render
    if (jobApplications && jobApplications.length > 1) {
      return jobApplications.map((jobApplication) => {
        return (
          <tr key={jobApplication.id}>
            <td>{jobApplication.date}</td>
            <td>{jobApplication.company}</td>
            <td>
              <Link to={`/list/${jobApplication.id}`}>
                {jobApplication.job_title}
              </Link>
            </td>
            <td>{jobApplication.application_method}</td>
          </tr>
        );
      });
    }
    // render one object
    else {
      return (
        <tr key={jobApplications.id}>
          <td>{jobApplications.date}</td>
          <td>{jobApplications.company}</td>
          <td>
            <Link to={`/list/${jobApplications.id}`}>
              {jobApplications.job_title}
            </Link>
          </td>
          <td>{jobApplications.application_method}</td>
        </tr>
      );
    }
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>{renderColumnNames()}</tr>
        </thead>
        <tbody>{renderRowData()}</tbody>
      </Table>
    </Container>
  );
};

export default JobTable;
