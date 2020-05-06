import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

function Index() {

    const [posts, setPosts] = useState({
        requestComplete: false,
        data: null
    });

    useEffect(() => {
        fetch(`${process.env.REACT_APP_WP_API}/posts`)
            .then((res) => res.json())
            .then((data) => {
                console.log({data})
                setPosts({ requestComplete: true, data });
            })
            .catch(() => setPosts({ requestComplete: true }));
    }, []);

    return (
        <Container>
            <h1>Hello world</h1>
            {posts.requestComplete ? "hello" : "bye"}
        </Container>
    );
}

export default Index;