import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1>This is the Home Page</h1>
      <p>
        Go to <Link to="/diagram">Diagram</Link> to view the current Sankey Diagram
      </p>
      <p>
        Go to <Link to="/list">List</Link> to view a tabular list of current data
      </p>
    </div>
  );
};

export default Home;
