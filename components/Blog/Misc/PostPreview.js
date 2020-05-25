import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import moment from "moment";
import featuredImgSrc from "../../../util/featuredImgSrc";
import Link from "next/link";

function PostPreview({ post }) {
  const [showSpinner, setSpinner] = useState(false);

  return (
    <div>
      <Card style={{ width: "18rem" }} className="mr-3">
        <Link href="/blog/[slug]" prefetch={false} as={`/blog/${post.slug}`}>
          <a onClick={() => setSpinner(true)}>
            <Card.Img
              style={{ height: "11.25rem" }}
              variant="top"
              src={featuredImgSrc(post)}
              className="rounded ml-3 mr-3"
            />
          </a>
        </Link>
        <Card.Body>
          {showSpinner ? (
            <Spinner
              className="mx-auto"
              role="status"
              variant="primary"
              animation="grow"
            />
          ) : (
            <Link
              href="/blog/[slug]"
              prefetch={false}
              as={`/blog/${post.slug}`}
            >
              <a onClick={() => setSpinner(true)}>Read Now</a>
            </Link>
          )}
          <Card.Title className="blog-title">{post.title.rendered}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {moment(post.date).format("MMM Do YYYY")}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostPreview;
