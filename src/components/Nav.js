import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import getCookie from "../common/getCookie";

export default function Nav({
  isLoggedIn,
  setIsLoggedIn,
  isAdmin,
  setIsAdmin,
  isLogout,
  setIsLogout,
  headerState,
  setHeaderState
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const logout = () => {
    document.cookie = `Authorization=; expires=${new Date().toUTCString()}`;
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsLogout(true);
    setIsCollapsed(true);
    setHeaderState(false);
  };

  useEffect(() => {
    setIsLoggedIn(document.cookie.includes("Authorization"));
    if (document.cookie.includes("Authorization")) {
      // Cookie 값에서 Admin 정보 뽑아내기
      const jwt = getCookie("Authorization").split(" ")[1];
      const payload = jwt.split(".")[1];
      // 해시 값을 Parse
      const { admin } = JSON.parse(atob(payload));
      setIsAdmin(admin);
    }
  }, []);

  return (
    <>
      {isLogout && <Redirect to="/" />}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
        style={!headerState ? { display: "contents" } : null}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href={isLoggedIn ? "/home" : "/"}
            style={!headerState && !isAdmin ? { color: "darksalmon" } : null}
          >
            HIGH END KNOWLEDGE
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              setIsMenuOpened(!isMenuOpened);
            }}
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${!isCollapsed && `show`}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li
                className="nav-item"
                onClick={() => {
                  if (isMenuOpened) {
                    setIsCollapsed(!isCollapsed);
                    setIsMenuOpened(!isMenuOpened);
                  }
                }}
              >
                {isLoggedIn ? (
                  <Link
                    className="nav-link"
                    to="/home"
                    style={
                      !headerState && !isAdmin ? { color: "darksalmon" } : null
                    }
                  >
                    Home
                  </Link>
                ) : null}
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  if (isMenuOpened) {
                    setIsCollapsed(!isCollapsed);
                    setIsMenuOpened(!isMenuOpened);
                  }
                }}
              >
                {isLoggedIn ? (
                  <a
                    className="nav-link"
                    onClick={logout}
                    style={
                      !headerState && !isAdmin ? { color: "darksalmon" } : null
                    }
                  >
                    Logout
                  </a>
                ) : (
                  <Link
                    className="nav-link"
                    to="/"
                    style={
                      !headerState && !isAdmin ? { color: "darksalmon" } : null
                    }
                  >
                    Login
                  </Link>
                )}
              </li>
              {isAdmin && (
                <>
                  <li
                    className="nav-item"
                    onClick={() => {
                      if (isMenuOpened) {
                        setIsCollapsed(!isCollapsed);
                        setIsMenuOpened(!isMenuOpened);
                      }
                    }}
                  >
                    <Link
                      className="nav-link"
                      to="/admin/home"
                      style={
                        !headerState && !isAdmin
                          ? { color: "darksalmon" }
                          : null
                      }
                    >
                      Admin Quiz
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      if (isMenuOpened) {
                        setIsCollapsed(!isCollapsed);
                        setIsMenuOpened(!isMenuOpened);
                      }
                    }}
                  >
                    <Link
                      className="nav-link"
                      to="/createQuiz"
                      style={
                        !headerState && !isAdmin
                          ? { color: "darksalmon" }
                          : null
                      }
                    >
                      Create Quiz
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
