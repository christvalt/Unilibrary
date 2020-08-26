import React from "react";

function DetailRead() {
  return (
    <React.Fragment>
      <section class="uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium" data-uk-grid>
            <div class="uk-width-1-1@m">
              <h1 class="uk-article-title">
                <a class="uk-link-reset" href="">
                  Heading
                </a>
              </h1>

              <p class="uk-article-meta">
                Written by <a href="#">Super User</a> on 12 April 2012. Posted
                in <a href="#">Blog</a>
              </p>
              <div class="uk-margin-top" data-uk-grid>
                <div class="uk-width-1-3@m">
                  <img
                    src="https://source.unsplash.com/user/erondu/1600x900"
                    alt=""
                  />
                </div>
                <div class="uk-width-2-3@m uk-flex-left">
                  <p className="uk-text-left">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p className="uk-text-left">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>

                  <p data-uk-margin>
                    <button class="uk-button uk-button-default">
                    <a href ="link.pdf">Download</a>
                    </button>
                  </p>
                  <button class="uk-button uk-button-primary">Primary</button>
                </div>
              </div>

              <h3 class="uk-text-bold uk-text-left uk-margin-large-top ">
                Similare Books
              </h3>
              <div class="uk-margin-large-top" data-uk-grid>
                <div class="uk-width-1-4@m">
                  <div>
                    <div class="uk-card uk-card-hover uk-card-body uk-padding-small">
                      <h5 class="uk-text-bold uk-padding-small uk-text-center uk-margin-remove">
                        Intermediate Physics For Ordinary Level – Third Edition
                      </h5>
                      <br />
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="uk-width-1-4@m">
                  <div>
                    <div class="uk-card uk-card-hover uk-card-body uk-padding-small">
                      <h5 class="uk-text-bold uk-padding-small uk-text-center uk-margin-remove">
                        Intermediate Physics For Ordinary Level – Third Edition
                      </h5>
                      <br />
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="uk-width-1-4@m">
                  <div>
                    <div class="uk-card uk-card-hover uk-card-body uk-padding-small">
                      <h5 class="uk-text-bold uk-padding-small uk-text-center uk-margin-remove">
                        Intermediate Physics For Ordinary Level – Third Edition
                      </h5>
                      <br />
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div class="uk-width-1-4@m">
                  <div>
                    <div class="uk-card uk-card-hover uk-card-body uk-padding-small">
                      <h5 class="uk-text-bold uk-padding-small uk-text-center uk-margin-remove">
                        Intermediate Physics For Ordinary Level – Third Edition
                      </h5>
                      <br />
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default DetailRead;
