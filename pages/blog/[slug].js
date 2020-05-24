import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Article from "../../components/Blog/Article/Article";

const Post = ({ post }) => {
  return (
    <Container>
      <Col className="post mx-auto">
        <a href="/blog">Back to posts</a>
        <hr />
        <Article post={post} />
      </Col>
    </Container>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.WP_API}/posts?_embed`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.WP_API}/posts?slug=${params.slug}&_embed`
  );
  const post = await res.json();

  return { props: { post: post[0] } };
}

export default Post;
