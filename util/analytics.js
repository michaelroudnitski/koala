import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-149927942-1");
};

export const logPageView = () => {
  initGA();
  ReactGA.pageview(window.location.pathname + window.location.search);
};
