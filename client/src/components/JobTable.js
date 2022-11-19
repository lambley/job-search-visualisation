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
    if (jobApplications) {
      return jobApplications.map((jobApplication) => {
        return (
          <tr key={jobApplication.id}>
            <td>{jobApplication.date}</td>
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
