import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import Footer from "../components/Misc/Footer";
import { logPageView } from "../util/analytics";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => logPageView(), []);
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
