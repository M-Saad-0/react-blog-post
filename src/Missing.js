import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <main className="Missing">
      <h2>Post Not Found</h2>
      <p>Wll that is disappointing</p>
      <p>
        <Link to={"/"}>Visit Out Homepage</Link>
      </p>
    </main>
  );
};
export default Missing;
