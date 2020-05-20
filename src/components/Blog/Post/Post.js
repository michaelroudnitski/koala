import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import featuredImgSrc from "../../../util/featuredImgSrc";
import Article from "./Article";
import "./Post.scss";

function Post() {
  const { postSlug } = useParams();
  const [post, setPost] = useState({
    requestComplete: false,
    data: null,
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_WP_API}/posts?slug=${postSlug}&_embed`)
      .then((res) => res.json())
      .then((data) => {
        data = data[0];
        setPost({ requestComplete: true, data });
      })
      .catch(() => setPost({ requestComplete: true }));
  }, [postSlug]);

  let content = null;
  if (!post.requestComplete) {
    content = (
      <div className="text-center">
        <Spinner
          className="mx-auto"
          variant="primary"
          role="status"
          animation="border"
        />
      </div>
    );
  } else if (post.data) {
    content = (
      <Col className="post mx-auto">
        <MetaTags>
          <title>{post.data.title.rendered}</title>
          <meta name="description" content="Blog | Michael Roudnitski" />
          <meta property="og:title" content={post.data.title.rendered} />
          <meta property="og:image" content={featuredImgSrc(post.data)} />
        </MetaTags>
        <Link to="/blog">Back to posts</Link>
        <hr />
        <Article post={post} />
      </Col>
    );
  }

  return content ? content : "Sorry... couldn't find what you were looking for";
}

export default Post;
