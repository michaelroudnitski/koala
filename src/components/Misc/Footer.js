import React from "react";
import Socials from "./Socials";
import Dots from "./Dots";
import GitHubStats from "./GitHubStats";

function Footer() {
  return (
    <footer className="footer bg-light mt-5">
      <Dots color="white" height={120} />
      <div className="container">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <h5 className="mt-3 mb-3">Socials</h5>

              <ul className="list-unstyled">
                <li className="px-auto">
                  <Socials />
                </li>
              </ul>
            </div>

            <div className="col-md-3 mx-auto">
              <h5 className="mt-3 mb-3">Developer Profiles</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="https://apps.apple.com/ca/developer/michael-roudnitski/id1489070114">
                    App Store
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/developer?id=Michael+Roudnitski">
                    Play Store
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto">
              <GitHubStats />
            </div>
          </div>
        </div>
        <div className="text-muted text-center py-3">
          © {new Date().getFullYear()} Copyright: Michael Roudnitski
        </div>
      </div>
    </footer>
  );
}

export default Footer;
