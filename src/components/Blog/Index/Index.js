import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import PostPreview from "../Misc/PostPreview";
import "./Index.scss";

function Index() {
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
    content = <Spinner className="ml-auto" role="status" animation="border" />;
  } else if (posts.data) {
    content = posts.data.map((post, index) => (
      <PostPreview key={index} post={post} />
    ));
  }

  return (
    <Container>
      <h1 className="text-center d-block">Blog | Michael Roudnitski</h1>
      <h4>New Posts</h4>
      <div className="horizontal-blog-post-cards">
        {content ? content : "Oops... Couldn't find what you were looking for"}
      </div>
    </Container>
  );
}

export default Index;
