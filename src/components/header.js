import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header(props) {
  //console.log("load", props.location.pathname.includes("admin"));
  const [data, setDate] = useState("");

  useEffect(() => {
    let response = localStorage.getItem("login");
    setDate(JSON.parse(response));
    console.log("data", response);
  }, [0]);

  if (!props.location.pathname.includes("admin")) {
    return (
      <header
        uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
        class="uk-box-shadow-small bg-header-color"
      >
        <div class="uk-container uk-container-expand">
          <nav class="uk-navbar" id="navbar" data-uk-navbar>
            <div class="uk-navbar-left">
              <a class="uk-navbar-item uk-logo" title="Logo" href="#">
                <img data-src="" width="50px" height="50px" alt="" uk-img />
              </a>

              <ul class="uk-navbar-nav uk-visible@m">
                <li class="uk-active">
                  <Link class="" to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link class="" to="/signin">
                    Categories
                  </Link>
                </li>
                <li>
                  <a class="color-is-white" href="#">
                    Books
                  </a>
                </li>

                <li>
                  <a class="color-is-white" href="/join">
                    CHat
                  </a>
                </li>
              </ul>
            </div>

            <div class="nav-overlay uk-navbar uk-navbar-right uk-visible@m">
              <div
                class="uk-navbar-dropdown"
                uk-drop="mode: click; cls-drop: uk-navbar-dropdown; boundary: !nav"
              >
                <div class="uk-grid uk-flex-middle" uk-grid>
                  <div class="uk-width-expand">
                    <form class="uk-search uk-search-navbar uk-width-1-1">
                      <input
                        class="uk-search-input"
                        type="search"
                        placeholder="Search..."
                        autofocus
                      />
                    </form>
                  </div>
                  <div class="uk-width-auto">
                    <a class="uk-navbar-dropdown-close" href="#" uk-close></a>
                  </div>
                </div>
              </div>

              {!!data ? (
                <div class="uk-margin">
                  <Link class="" to="/signin">
                    <a
                      class="uk-text-emphasis uk-text-bold uk-button uk-button-defaultbutton-border"
                      href="#"
                    >
                      Hello, {data.user.name}
                    </a>
                  </Link>

                  <button
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                    class="uk-button uk-button-primary"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div class="uk-margin">
                  <Link class="" to="/loginAd">
                    <a
                      class="uk-text-emphasis uk-text-bold uk-button uk-button-defaultbutton-border"
                      href="#"
                    >
                      Admin
                    </a>
                  </Link>

                  <Link class="" to="/signin">
                    <a
                      class="uk-text-emphasis uk-text-bold uk-button uk-button-defaultbutton-border"
                      href="#"
                    >
                      Login
                    </a>
                  </Link>
                  <Link class="" to="/signup">
                    <button class="uk-button uk-button-primary">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <div class="nav-overlay uk-navbar uk-navbar-right uk-hidden@m">
              <a
                class="uk-navbar-toggle uk-text-emphasis uk-text-bold uk-button uk-button-defaultbutton-border"
                href="#modal-full"
                uk-search-icon
                uk-toggle
              ></a>
              <div id="modal-full" class="uk-modal-full uk-modal" uk-modal>
                <div
                  class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
                  uk-height-viewport
                >
                  <button
                    class="uk-modal-close-full"
                    type="button"
                    uk-close
                  ></button>
                  <form class="uk-search uk-search-large">
                    <input
                      class="uk-search-input uk-text-center"
                      type="search"
                      placeholder="Search..."
                      autofocus
                    />
                  </form>
                </div>
              </div>

              <a
                href=""
                class="color-is-black"
                uk-icon="icon: menu; ratio: 2"
                type="button"
                uk-toggle="target: #offcanvas-nav"
              ></a>

              <div id="offcanvas-nav" uk-offcanvas="overlay: true">
                <div class="uk-offcanvas-bar">
                  <ul class="uk-nav uk-nav-default">
                    <li>
                      <a href="#" class="uk-text-bold color-is-white">
                        <span
                          class="uk-margin-small-right"
                          uk-icon="icon:  home"
                        ></span>
                        Home
                      </a>
                    </li>
                    <li class="uk-nav-divider"></li>

                    <li>
                      <a href="/categories" class="uk-text-bold color-is-white">
                        <span
                          class="uk-margin-small-right"
                          uk-icon="icon:   file-pdf"
                        ></span>
                        Categories
                      </a>
                    </li>

                    <li class="uk-nav-divider"></li>

                    <li>
                      <a href="#" class="uk-text-bold color-is-white">
                        <span
                          class="uk-margin-small-right"
                          uk-icon="icon:   file-pdf"
                        ></span>
                        Books
                      </a>
                    </li>

                    <li class="uk-nav-divider"></li>

                    <li>
                      <a href="#" class="uk-text-bold color-is-white">
                        <span
                          class="uk-margin-small-right"
                          uk-icon="icon: pencil"
                        ></span>
                        Chat
                      </a>
                    </li>

                    <li class="uk-nav-divider"></li>

                    <li class="uk-nav-divider"></li>

                    <li>
                      <a href="#" class="uk-text-bold color-is-white">
                        <span
                          class="uk-margin-small-right"
                          uk-icon="icon:copy"
                        ></span>
                        Artcles
                      </a>
                    </li>

                    <li class="uk-nav-divider"></li>

                    <li>
                      <a href="#" class="uk-text-bold color-is-white">
                        <img
                          class="uk-margin-small-right"
                          src="https://cdn.svgporn.com/logos/google-play-icon.svg"
                          width="20px"
                          alt=""
                        />
                        Download our Application
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  } else {
    return <div />;
  }
}

export default withRouter(Header);
