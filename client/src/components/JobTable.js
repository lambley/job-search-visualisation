import { Table, Container } from 'react-bootstrap';

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
            <td>{jobApplication.job_title}</td>
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
