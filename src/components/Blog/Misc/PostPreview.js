import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { Link, useRouteMatch } from "react-router-dom";

function PostPreview({ post }) {
  const featuredImgUrl =
    post &&
    post["_embedded"] &&
    post["_embedded"]["wp:featuredmedia"] &&
    post["_embedded"]["wp:featuredmedia"][0].source_url;

  let postLink = `${useRouteMatch().url}/`;

  return (
    <div>
      <Card style={{ width: "18rem" }} className="mr-3">
        <Link to={postLink}>
          <Card.Img
            style={{ height: "11.25rem" }}
            variant="top"
            src={featuredImgUrl}
            className="rounded ml-3 mr-3"
          />
        </Link>
        <Card.Body>
          <Card.Link href={postLink}>Blog Post</Card.Link>
          <Card.Title>{post.title.rendered}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {moment(post.date).format("MMM Do YYYY")}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostPreview;
