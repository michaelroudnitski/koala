import React from "react";
import Container from "react-bootstrap/Container";
import Posts from "../../components/Blog/Posts/Posts";
// import ReactGa from "react-ga";

function Index({ posts }) {
  // const match = useRouteMatch();
  // ReactGa.pageview(window.location.pathname + window.location.search);

  return (
    <Container>
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
