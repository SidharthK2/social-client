import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log(`in feed effects user ${username}`);
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/634be786a0346d78bf29f0c3");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
  console.log(posts);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
