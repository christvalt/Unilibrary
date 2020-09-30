import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListBook from "./components/Book/listBook";
import AddBook from "./components/Book/addBook";
import ListBoorows from "./components/boorow/listBoorows";
import AllBoorowNotReturn from "./components/boorow/allBoorowNotReturn";
import BorowByUserNotreturned from "./components/boorow/borowByUserNotreturned";

function Admin() {
  const [page, setPage] = useState(0);
  const renderSwitch = () => {
    switch (page) {
      case 1:
        return <ListBook />;

      case 3:
        return <AddBook />;
      case 4:
        return <ListBoorows />;
      case 5:
        return <AllBoorowNotReturn />;
      case 6:
        return <BorowByUserNotreturned />;

      default:
        return <div></div>;
    }
  };

  return (
    <React.Fragment>
      <header id="top-head" class="uk-position-fixed">
        <div class="uk-container uk-container-expand uk-background-primary">
          <nav
            class="uk-navbar uk-light"
            data-uk-navbar="mode:click; duration: 250"
          >
            <div class="uk-navbar-left">
              <div class="uk-navbar-item uk-hidden@m">
                <a class="uk-logo" href="#">
                  <img
                    class="custom-logo"
                    src="img/dashboard-logo-white.svg"
                    alt=""
                  />
                </a>
              </div>
              <ul class="uk-navbar-nav uk-visible@m">
                <li>
                  <a href="#">Accounts</a>
                </li>
                <li>
                  <a href="#">
                    Settings <span data-uk-icon="icon: triangle-down"></span>
                  </a>
                  <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li class="uk-nav-header">YOUR ACCOUNT</li>
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: info"></span> Summary
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: refresh"></span> Edit
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: settings"></span>{" "}
                          Configuration
                        </a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: image"></span> Your Data
                        </a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: sign-out"></span> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <br />
        <br />
      </header>

      <aside id="left-col" class="uk-light uk-visible@m">
        <div class="left-logo uk-flex uk-flex-middle">
          <img class="custom-logo" src="img/dashboard-logo.svg" alt="" />
        </div>
        <div class="left-content-box  content-box-dark">
          <img
            src="img/avatar.svg"
            alt=""
            class="uk-border-circle profile-img"
          />
          <h4 class="uk-text-center uk-margin-remove-vertical text-light">
            John Doe
          </h4>

          <div class="uk-position-relative uk-text-center uk-display-block">
            <a
              href="#"
              class="uk-text-small uk-text-muted uk-display-block uk-text-center"
              data-uk-icon="icon: triangle-down; ratio: 0.7"
            >
              Admin
            </a>

            <div
              class="uk-dropdown user-drop"
              data-uk-dropdown="mode: click; pos: bottom-center; animation: uk-animation-slide-bottom-small; duration: 150"
            >
              <ul class="uk-nav uk-dropdown-nav uk-text-left">
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: info"></span> Summary
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: refresh"></span> Edit
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: settings"></span> Configuration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="left-nav-wrap">
          <ul class="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
            <li class="uk-nav-header">ACTIONS</li>
            <li>
              <a href="#">
                <span
                  data-uk-icon="icon: comments"
                  class="uk-margin-small-right"
                ></span>
                Messages
              </a>
            </li>

            <li class="uk-parent">
              <a href="#">
                <span
                  data-uk-icon="icon: thumbnails"
                  class="uk-margin-small-right"
                ></span>
                Books
              </a>
              <ul class="uk-nav-sub">
                <li>
                  <a
                    class=""
                    onClick={() => {
                      setPage(3);
                    }}
                  >
                    Add Book
                  </a>
                </li>

                <li>
                  <a
                    class=""
                    onClick={() => {
                      setPage(1);
                    }}
                  >
                    List Book
                  </a>
                </li>

                <li>
                  <a
                    title="Album"
                    href="https://zzseba78.github.io/Kick-Off/album.html"
                  >
                    Album
                  </a>
                </li>
              </ul>
            </li>

            <li class="uk-parent">
              <a href="#">
                <span
                  data-uk-icon="icon: thumbnails"
                  class="uk-margin-small-right"
                ></span>
                Boorows
              </a>
              <ul class="uk-nav-sub">
                <li>
                  <a
                    class=""
                    class=""
                    onClick={() => {
                      setPage(4);
                    }}
                  >
                    List Boorows
                  </a>
                </li>
                <li>
                  <a
                    class=""
                    class=""
                    onClick={() => {
                      setPage(5);
                    }}
                  >
                    Allborrow not returned
                  </a>
                </li>
                <li>
                  <a
                    class=""
                    class=""
                    onClick={() => {
                      setPage(6);
                    }}
                  >
                    BorrowByUserNotreturned
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="left-content-box uk-margin-top">
            <h5>Daily Reports</h5>
            <div>
              <span class="uk-text-small">
                Traffic <small>(+50)</small>
              </span>
              <progress class="uk-progress" value="50" max="100"></progress>
            </div>
            <div>
              <span class="uk-text-small">
                Income <small>(+78)</small>
              </span>
              <progress
                class="uk-progress success"
                value="78"
                max="100"
              ></progress>
            </div>
            <div>
              <span class="uk-text-small">
                Feedback <small>(-12)</small>
              </span>
              <progress
                class="uk-progress warning"
                value="12"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div class="bar-bottom">
          <ul
            class="uk-subnav uk-flex uk-flex-center uk-child-width-1-5"
            data-uk-grid
          >
            <li>
              <a
                href="#"
                class="uk-icon-link"
                data-uk-icon="icon: home"
                title="Home"
                data-uk-tooltip
              ></a>
            </li>
            <li>
              <a
                href="#"
                class="uk-icon-link"
                data-uk-icon="icon: settings"
                title="Settings"
                data-uk-tooltip
              ></a>
            </li>
            <li>
              <a
                href="#"
                class="uk-icon-link"
                data-uk-icon="icon: social"
                title="Social"
                data-uk-tooltip
              ></a>
            </li>

            <li>
              <a
                href="#"
                class="uk-icon-link"
                data-uk-tooltip="Sign out"
                data-uk-icon="icon: sign-out"
              ></a>
            </li>
          </ul>
        </div>
      </aside>

      <div id="content" data-uk-height-viewport="expand: true">
        <div class="uk-container uk-container-expand">
          {renderSwitch()}
          <hr />
          <div class="uk-grid uk-grid-medium" data-uk-grid></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Admin;
