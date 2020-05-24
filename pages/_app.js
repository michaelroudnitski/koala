import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import "../styles/blog.article.scss";
import WebNavbar from "../components/WebNavbar/WebNavbar";
import Footer from "../components/Misc/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <WebNavbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
