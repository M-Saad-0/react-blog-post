import Feed from "./Feed";
import DataContext from "./context/DataContext";
import { useContext } from "react";
const Home = () => {
  const { isLoading, fetchError, searchResults } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading Posts....</p>}
      {fetchError && !isLoading && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError.message}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}
    </main>
  );
};
export default Home;
