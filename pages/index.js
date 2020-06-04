import Head from "next/head";
import Dots from "../components/Misc/Dots";

import Hero from "../components/Hero/Hero";
import MyWork from "../components/MyWork/MyWork";
import MySkills from "../components/MySkills/MySkills";
import Resume from "../components/Resume/Resume";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Home() {
  return (
    <div className="container" id="app-container">
      <Head>
        <title>Michael Roudnitski</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="uMnOLrZSBvORYs6F3iMWsG0m22jE7_SXxPK-Pm0unZc"
        />
        <meta
          name="description"
          content="SWE Intern @ IBM | Computer Science @ York University"
        />
        <meta
          name="keywords"
          content="michael roudnitski,roudnitski,michael,mroudnitski,michaelroudnitski,michaelr,software engineer,blog,michael roudnitski blog,software engineer blog,ibm blog"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <Dots color="#ffd400" left={0} top={370} />
        <Dots right={0} top={120} />
        <div className="row">
          <div className="col-md-4">
            <Hero />
          </div>
          <div className="col-md-8 mt-auto">
            <MyWork />
          </div>
          <div className="col-md-12">
            <MySkills />
          </div>
          <div className="col-md-6">
            <Resume />
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
