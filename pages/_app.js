import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import "../styles/blog.article.scss";
import WebNavbar from "../components/WebNavbar/WebNavbar";
import Footer from "../components/Misc/Footer";
import { logPageView } from "../util/analytics";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => logPageView(), []);
  return (
    <div>
      <WebNavbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
