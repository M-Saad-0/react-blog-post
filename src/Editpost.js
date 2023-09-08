import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "./context/DataContext";
import { useContext } from "react";
const Editpost = () => {
  const { posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);
  return (
    <main className="Editpost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form
            action=""
            className="newPostForm"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="postTitle">Title</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post Content</label>
            <textarea
              type="text"
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={(e) => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <div className="Missing">
            <h2>Post Not Found</h2>
            <p>Wll that is disappointing</p>
            <p>
              <Link to={"/"}>Visit Out Homepage</Link>
            </p>
          </div>
        </>
      )}
    </main>
  );
};
export default Editpost;
