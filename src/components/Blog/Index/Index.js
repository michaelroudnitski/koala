import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

function Index() {

    const [posts, setPosts] = useState({
        requestComplete: false,
        data: null
    });

    useEffect(() => {
        fetch(`${process.env.REACT_APP_WP_API}/posts`)
            .then((res) => res.json())
            .then((data) => {
                setPosts({ requestComplete: true, data });
            })
            .catch(() => setPosts({ requestComplete: true }));
    }, []);

    let content = null;
    if (!posts.requestComplete) {
        content = <Spinner role="status" animation="border" />;
    } else if (posts.data) {
        return posts.data.map((post, index) => <h1>{post.title.rendered}</h1>);
    }

    return (
        <Container>
            {content}
        </Container>
    );
}

export default Index;