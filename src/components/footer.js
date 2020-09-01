import React from "react";
import { withRouter } from "react-router-dom";

function Footer(props) {
  if (!props.location.pathname.includes("admin")) {
    return (
      <React.Fragment>
        <div class="uk-section uk-section-secondary uk-section-medium">
          <div class="uk-container uk-container-large">
            <div
              class="uk-grid uk-child-width-expand@m uk-child-width-1-2@s"
              data-uk-grid=""
            >
              <div>
                <h4>
                  <a
                    href="/inserieren"
                    class="uk-link-heading"
                    title="Inserieren"
                  >
                    Recent Books
                  </a>
                </h4>
                <div class="uk-margin-top">
                  <ul class="uk-nav uk-nav-default" data-uk-nav="">
                    <li class="uk-margin-small">
                      <div class="uk-panel">
                        <img
                          class="uk-align-left uk-margin-remove-adjacent"
                          src="img/book.jpg"
                          width="50"
                          height="50"
                          alt="Example image"
                        />
                        <p>
                          Ut enim ad minim veniam, quis nostrud exercitationUt
                          enim ad minim veniam, quis nostrud.
                        </p>
                      </div>
                    </li>

                    <li class="uk-margin-small">
                      <div class="uk-panel">
                        <img
                          class="uk-align-left uk-margin-remove-adjacent"
                          src="img/corrections.png"
                          width="50"
                          height="50"
                          alt="Example image"
                        />
                        <p>
                          Ut enim ad minim veniam, quis nostrud exercitationUt
                          enim ad minim veniam, quis nostrud.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div class="uk-panel uk-padding-bottom-small">
                        <img
                          class="uk-align-left uk-margin-remove-adjacent"
                          src="img/book.jpg"
                          width="50"
                          height="50"
                          alt="Example image"
                        />
                        <p>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="tm-flex-order-1@s">
                <h4>
                  <a href="/ueber-uns" class="uk-link-heading" title="Über uns">
                    Resources
                  </a>
                </h4>
                <div class="uk-margin-top">
                  <ul class="uk-nav uk-nav-default" data-uk-nav="">
                    <li>
                      <a href="/ueber-uns/team" title="Team">
                        Contact us
                      </a>
                    </li>

                    <li></li>

                    <li>
                      <a href="/ueber-uns/geschichte" title="Geschichte">
                        Advertise here
                      </a>
                    </li>

                    <li>
                      <a href="/ueber-uns/kombi-partner" title="Kombi-Partner">
                        Kombi-Partner
                      </a>
                    </li>

                    <li>
                      <a href="/ueber-uns/kontakt" title="Kontakt">
                        Kontakt
                      </a>
                    </li>

                    <li>
                      <a href="/ueber-uns/schnuppertag" title="Schnuppertag">
                        Schnuppertag
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="uk-width-1-3@m uk-width-1-2@s uk-flex-first@m uk-first-column">
                <div>
                  <img src="" width="50px" alt="gce revision" />

                  <p class="uk-text-medium">xxxxxx</p>

                  <p class="uk-text-medium">
                    <a href="tel:670047511" class="uk-link-reset">
                      Telephone : xxxx{" "}
                    </a>
                    <br />
                    <a
                      href="mailto:info@cameroongcerevision.com"
                      class="uk-link-reset"
                    >
                      Email: xxxx
                      <br />
                      <br />
                      <a href="" class="uk-link-reset">
                        <img
                          src="https://cdn.svgporn.com/logos/google-play-icon.svg"
                          width="50px"
                          alt=""
                        />
                      </a>
                    </a>
                  </p>

                  <div class="uk-margin-top">
                    <a
                      href="https://www.facebook.com/wochepass"
                      title="Facebook"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="uk-icon-button uk-margin-small-right uk-icon"
                      data-uk-icon="icon: facebook; ratio: 1.1"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="facebook"
                      >
                        <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/wochepass"
                      title="Instagram"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="uk-icon-button uk-margin-small-right uk-icon"
                      data-uk-icon="icon: instagram; ratio: 1.1"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="instagram"
                      >
                        <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                        <circle cx="14.87" cy="5.26" r="1.09"></circle>
                        <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.pinterest.ch/wochepass"
                      title="Pinterest"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="uk-icon-button uk-icon"
                      data-uk-icon="icon: pinterest; ratio: 1.1"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="pinterest"
                      >
                        <path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="uk-section uk-section-secondary uk-section-xsmall">
              <div class="uk-container uk-container-large">
                <div class="uk-grid uk-child-width-auto@s" data-uk-grid="">
                  <div class="uk-width-expand">
                    <ul class="uk-subnav uk-flex-center uk-flex-right@s">
                      <li>
                        <a href="/impressum" title="Impressum">
                          xxxx
                        </a>
                      </li>
                      <li>
                        <a href="/datenschutz" title="Datenschutzrichtlinien">
                          xxxx
                        </a>
                      </li>
                      <li>
                        <a href="/agb" title="Allgmeine Geschäftsbedingungen">
                          xxxx
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="uk-flex-first@s uk-first-column">
                    <p class="uk-text-center uk-text-left@s uk-text-muted uk-margin-remove-bottom">
                      © 2019 xxxxxx
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <div />;
  }
}

export default withRouter(Footer);
