import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function GitHubStats() {
  const [repos, setRepos] = useState({
    requestComplete: false,
    data: [],
  });

  useEffect(() => {
    fetch("https://api.github.com/users/michaelroudnitski/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos({ requestComplete: true, data });
      })
      .catch(() => setRepos({ requestComplete: true }));
  }, []);

  let content = <Spinner role="status" animation="border" />;

  if (repos.requestComplete) {
    if (repos.data !== []) {
      content = (
        <ul className="list-unstyled">
          <li>{repos.data.length + " repositories"}</li>
          <li>
            {repos.data.reduce(
              (total, curr) => total + parseInt(curr.stargazers_count),
              0
            ) + " stars"}
          </li>
        </ul>
      );
    } else {
      content = null;
    }
  }

  return (
    <div className={!repos.requestComplete ? "m-auto" : null}>{content}</div>
  );
}

export default GitHubStats;
