import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import Editpost from "./Editpost";
import { DataProvider } from "./context/DataContext";

function App() {
  // const [search, setSearch] = useState("");
  // const [posts, setPosts] = useState([]);
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const navigate = useNavigate();
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const { width } = useWindowSize();
  // const { data, fetchError, isLoading } = useAxiosFetch(
  //   "http://localhost:3500/posts"
  // );

  // useEffect(() => {
  //   setPosts(data);
  // }, [data]);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get("/posts");
  //       setPosts(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  // useEffect(() => {
  //   const filteredResults = posts.filter((post) => {
  //     return (
  //       post.body.toLowerCase().includes(search.toLocaleLowerCase()) ||
  //       post.title.toLowerCase().includes(search.toLocaleLowerCase())
  //     );
  //   });
  //   setSearchResults(filteredResults.reverse());
  // }, [posts, search]);

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const updatePost = { id, title: editTitle, datetime, body: editBody };
  //   try {
  //     const response = await api.put(`/posts/${id}`, updatePost);
  //     setPosts(
  //       posts.map((post) => (post.id === id ? { ...response.data } : post))
  //     );
  //     setEditTitle("");
  //     setEditBody("");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const newPost = { id, title: postTitle, datetime, body: postBody };
  //   try {
  //     const response = await api.post("/posts", newPost);
  //     const allPost = [...posts, response.data];
  //     setPosts(allPost);
  //     setPostTitle("");
  //     setPostBody("");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const postList = posts.filter((post) => post.id !== id);
  //     setPosts(postList);
  //     navigate("/");
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
  return (
    <div className="App">
      {" "}
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<Editpost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
