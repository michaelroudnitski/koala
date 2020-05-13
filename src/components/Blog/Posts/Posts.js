import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import PostPreview from "../Misc/PostPreview";
import "./Posts.scss";

function Posts() {
  const [posts, setPosts] = useState({
    requestComplete: false,
    data: null,
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_WP_API}/posts?_embed`)
      .then((res) => res.json())
      .then((data) => {
        setPosts({ requestComplete: true, data });
      })
      .catch(() => setPosts({ requestComplete: true }));
    document.title = "Blog | Michael Roudnitski";
  }, []);

  let content = null;
  if (!posts.requestComplete) {
    content = (
      <Spinner
        className="mx-auto"
        variant="primary"
        role="status"
        animation="border"
      />
    );
  } else if (posts.data) {
    content = posts.data.map((post, index) => (
      <PostPreview key={index} post={post} />
    ));
  }

  return (
    <div>
      <h4>New Posts</h4>
      <div className="horizontal-blog-post-cards">
        {content ? content : "Oops... Couldn't find what you were looking for"}
      </div>
    </div>
  );
}

export default Posts;
