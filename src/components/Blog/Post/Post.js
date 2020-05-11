import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import moment from "moment";
import readingTime from "reading-time";
import featuredImgSrc from "../../../util/featuredImgSrc";
import "./Post.scss";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({
    requestComplete: false,
    data: null,
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_WP_API}/posts/${postId}?_embed`)
      .then((res) => res.json())
      .then((data) => {
        setPost({ requestComplete: true, data });
        document.title = data.title.rendered;
      })
      .catch(() => setPost({ requestComplete: true }));
  }, []);

  let content = null;
  if (!post.requestComplete) {
    content = (
      <div className="w-100 h-100">
        <Spinner
          className="m-auto"
          variant="primary"
          role="status"
          animation="border"
        />
      </div>
    );
  } else if (post.data) {
    const timeToRead = readingTime(post.data.content.rendered);
    content = (
      <Col style={{ maxWidth: 720 }} className="mx-auto">
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
          className="rounded w-100 py-4"
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
