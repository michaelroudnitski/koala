import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import PostPreview from "../Misc/PostPreview";
import Post from "../Post/Post";
import "./Index.scss";

function Index() {
  const match = useRouteMatch();
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
    content = <Spinner className="mx-auto" role="status" animation="border" />;
  } else if (posts.data) {
    content = posts.data.map((post, index) => (
      <PostPreview key={index} post={post} />
    ));
  }

  return (
    <Container>
      <Switch>
        <Route path={`${match.path}/:postId`}>
          <Post />
        </Route>
        <Route path={match.path}>
          <h1 className="text-center d-block">Blog | Michael Roudnitski</h1>
          <h4>New Posts</h4>
          <div className="horizontal-blog-post-cards">
            {content
              ? content
              : "Oops... Couldn't find what you were looking for"}
          </div>
        </Route>
      </Switch>
    </Container>
  );
}

export default Index;
