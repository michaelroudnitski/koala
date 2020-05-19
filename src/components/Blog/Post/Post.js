import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import moment from "moment";
import readingTime from "reading-time";
import featuredImgSrc from "../../../util/featuredImgSrc";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
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
    const timeToRead = readingTime(post.data.content.rendered);
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
        <h1 className="text-capitalize blog-title">
          {post.data.title.rendered}
        </h1>
        <h6 className="text-muted">
          {moment(post.date).format("MMM Do YYYY")}
          <span className="text-warning"> · </span>
          {timeToRead.text}
        </h6>
        <img
          style={{ maxHeight: "30rem", objectFit: "cover" }}
          src={featuredImgSrc(post.data)}
          className="rounded w-100 my-4"
          alt="Featured"
        />
        <div
          className="post-content"
          dangerouslySetInnerHTML={createMarkup(post.data.content.rendered)}
        />
      </Col>
    );
  }

  return content;
}

function createMarkup(html) {
  return { __html: html };
}

export default Post;
