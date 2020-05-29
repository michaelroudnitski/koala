import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Article from "../../components/Blog/Article/Article";
import featuredImgSrc from "../../util/featuredImgSrc";
import { parse } from "node-html-parser";

const Post = ({ post }) => {
  return (
    <Container>
      <Head>
        <title>{post.title.rendered}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="description" content={parse(post.excerpt.rendered).text} />
        <meta name="author" content="Michael Roudnitski" />
        <meta
          name="keywords"
          content="michael roudnitski,roudnitski,mroudnitski,michaelroudnitski,software engineer,full stack,developer blog,intern blog,blog,software engineer blog,ibm blog"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title.rendered} />
        <meta
          property="og:description"
          content={parse(post.excerpt.rendered).text}
        />
        <meta property="og:image" content={featuredImgSrc(post)} />
        <meta
          name="og:description"
          content={parse(post.excerpt.rendered).text}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={post.title.rendered} />
        <meta name="twitter:image" content={featuredImgSrc(post)} />
        <meta name="twitter:creator" content="@mroudnitski" />
      </Head>
      <Col className="post mx-auto">
        <a href="/blog">See more articles</a>
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
