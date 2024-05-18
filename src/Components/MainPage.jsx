import React, { useState } from "react";
import { profileIcon } from "../images/IconAssets";

const MainPage = (props) => {
  const maineBgLinesCount = [1, 2, 3, 4, 5];

  const [isMainHeaderVisible, setIsMainHeaderVisible] = useState(false);
  const screenWidth = window.innerWidth;

  const navigationList = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/resume",
      title: "Resume",
    },
    {
      href: "/projects",
      title: "Projects",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  const currentUrl = props.children.props.match.url;

  return (
    <div className="mWrapper">
      {/* ///////////////////////////////////////////////////////////////////////////// */}

      {/* ///////////////////////  BACKGROUND LINES STARTS   //////////////////////////////////////// */}
      <div className="mBgLines">
        {maineBgLinesCount.map((item) => {
          return <span key={item}></span>;
        })}
      </div>
      {/* ///////////////////////  BACKGROUND LINES ENDS   //////////////////////////////////////// */}

      {/* ///////////////////////  NAVIGATION BAR STARTS   //////////////////////////////////////// */}
      <nav
        className={
          screenWidth > 1200
            ? "mHeader"
            : isMainHeaderVisible === true
            ? "mHeader is-visible"
            : "mHeader"
        }
      >
        {/* .......................................................................... */}
        <button
          className="mHeader-toggler"
          onClick={() => setIsMainHeaderVisible(!isMainHeaderVisible)}
        >
          <i
            className={`lni ${
              isMainHeaderVisible === true ? "lni-close" : "lni-menu"
            }`}
          ></i>
        </button>
        {/* .......................................................................... */}
        <div className="mHeader-inner">
          {/* //////////////////////////////////////////////////// */}
          <div className="mHeader-image">
            <a href="/">
              <img src={profileIcon} alt="vipin kumar" />
            </a>
          </div>
          {/* //////////////////////////////////////////////////// */}
          <ul className="mHeader-menu">
            {navigationList.map((item, i) => {
              return (
                <li key={i}>
                  <a
                    href={item.href}
                    className={item.href === currentUrl ? "active" : null}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* //////////////////////////////////////////////////// */}

          <div className="mHeader-copyright">© 2022 Portfolio</div>

          {/* //////////////////////////////////////////////////// */}
        </div>
        {/* .......................................................................... */}
      </nav>
      {/* ///////////////////////  NAVIGATION BAR ENDS   //////////////////////////////////////// */}

      {/* ///////////////////////  HOME AREA STARTS   //////////////////////////////////////// */}
      <div>{props.children}</div>
      {/* ///////////////////////  HOME AREA ENDS   //////////////////////////////////////// */}

      {/* ///////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
};

export default MainPage;
