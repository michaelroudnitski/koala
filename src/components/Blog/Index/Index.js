import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Posts from "../Posts/Posts";
import Post from "../Post/Post";
import "./Index.scss";

function Index() {
  const match = useRouteMatch();

  return (
    <Container>
      <Switch>
        <Route exact path={match.path}>
          <h1 className="text-center d-block">
            <code>
              "Michael Roudnitski"
              <br />
              |> blog()
            </code>
          </h1>
          <hr />
          <Posts />
        </Route>
        <Route exact path={`${match.path}/:postId`}>
          <Post />
        </Route>
      </Switch>
    </Container>
  );
}

export default Index;
