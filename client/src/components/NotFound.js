import React from "react";
import TopHeader from "./TopHearder";
import "../styles/NotFound.css";
import Footer from "./Footer";
import HomeNav from "./HomeNav";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <TopHeader />
      <HomeNav />
      <div className="NotFound">
        <div className="dataInfo">
          <div className="notf">404 Not Found</div>
          <p className="text-wrapper-9">
            Your visited page not found. You may go home page.
          </p>
          <Link className="link" to="/">
            <button id="view">Back to home page</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NotFound;
