import React from "react";
import { useSpring, animated } from "react-spring";
import moment from "moment";
import readingTime from "reading-time";
import featuredImgSrc from "../../../util/featuredImgSrc";

function Article({ post }) {
  const fade = { opacity: 1, from: { opacity: 0 } };
  const titleProps = useSpring({ ...fade, delay: 0 });
  const imageProps = useSpring({ ...fade, delay: 300 });
  const contentProps = useSpring({ ...fade, delay: 500 });

  const timeToRead = readingTime(post.data.content.rendered);

  return (
    <div>
      <animated.div style={titleProps}>
        <h1 className="text-capitalize blog-title">
          {post.data.title.rendered}
        </h1>
        <h6 className="text-muted">
          {moment(post.date).format("MMM Do YYYY")}
          <span className="text-warning"> · </span>
          {timeToRead.text}
        </h6>
      </animated.div>
      <animated.img
        style={{ maxHeight: "30rem", objectFit: "cover", ...imageProps }}
        src={featuredImgSrc(post.data)}
        className="rounded w-100 my-4"
        alt="Featured"
      />
      <animated.div
        style={contentProps}
        className="post-content"
        dangerouslySetInnerHTML={createMarkup(post.data.content.rendered)}
      />
    </div>
  );
}

function createMarkup(html) {
  return { __html: html };
}

export default Article;
