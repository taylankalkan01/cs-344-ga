import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const TRACKING_ID = "G-B6T7CXQ3PZ"; // OUR_TRACKING_ID
// import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category = "Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
// export default useAnalyticsEventTracker;

const ContactUs = () => {
  const gaEventTracker = useAnalyticsEventTracker("Contact us");
  return (
    <div>
      <h3>Contact Us</h3>
      <div>
        <a href="#" onClick={() => gaEventTracker("call")}>
          Call Us
        </a>
      </div>
      <div>
        <a
          href="mailto:someone@example.com"
          onClick={() => gaEventTracker("email")}
        >
          Write to us
        </a>
      </div>
    </div>
  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
