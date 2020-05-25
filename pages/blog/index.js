import Head from "next/head";
import Container from "react-bootstrap/Container";
import Posts from "../../components/Blog/Posts/Posts";

function Index({ posts }) {
  return (
    <Container>
      <Head>
        <title>Blog | Michael Roudnitski</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="SWE Intern @ IBM | Computer Science @ York University"
        />
        <meta
          name="keywords"
          content="michael roudnitski,roudnitski,michael,mroudnitski,michaelroudnitski,michaelr,software engineer,blog,michael roudnitski blog,software engineer blog,ibm blog"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog | Michael Roudnitski" />
        <meta name="twitter:title" content="Blog | Michael Roudnitski" />
        <meta name="twitter:creator" content="@mroudnitski" />
      </Head>
      <h1 className="text-center d-block">
        <code>
          "Michael Roudnitski"
          <br />
          |> blog()
        </code>
      </h1>
      <hr />
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.WP_API}/posts?_embed`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Index;
