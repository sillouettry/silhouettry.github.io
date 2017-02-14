import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Promise from 'bluebird';
import _ from 'lodash';
import classNames from 'classnames';

class Index extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row h-100">
          {(() => {
            if (this.state.i === -1) {
              return (
                <div className="col-sm-10 col-lg-11 push-sm-2 push-lg-1 home h-100">
                  <div className="home-top row justify-content-end">
                    <div className="col-lg d-flex align-items-end">
                      <h1 className="display-3">Reid Roman <small className="text-muted">Photography</small></h1>
                    </div>
                    <div className="col-lg-auto d-flex align-items-end">
                      <ul className="nav">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            onClick={() => this.goToPhotos()}
                          >Photos
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="modal"
                            data-target=".about-modal"
                          >About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="modal"
                            data-target=".contact-modal"
                          >Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-bottom">
                  </div>
                </div>
              )
            } else {
              return (
                <div className="col-sm-10 col-lg-11 push-sm-2 push-lg-1 d-flex align-items-center hidden-xs-down display-container">
                  <img
                    className="main-img"
                    srcSet={this.state.img.srcSet}
                  />
                  <div className="u-trbl d-flex justify-content-between align-items-center">
                    <i
                      className="material-icons"
                      onClick={() => this.prevImg()}
                    >chevron_left
                    </i>
                    <i
                      className="material-icons"
                      onClick={() => this.nextImg()}
                    >chevron_right
                    </i>
                  </div>
                </div>
              )
            }
          })()}
          <div className="col-sm-2 col-lg-1 pull-sm-10 pull-lg-11 nav-wrap js-nav-wrap h-100">
            <div className="js-nav-inner">
              <div className="row">
                <div
                  className="col hidden-xs-down h-100 nav-img"
                  onClick={() => this.chooseImg(-1)}
                >
                  <p className="nav-top">Home</p>
                </div>
              </div>
              {images.map((img, i) => {
                return (
                  <div
                    className="row"
                    key={img.src}
                    onClick={() => this.chooseImg(i)}
                  >
                    <img
                      className={classNames('col', 'h-100', 'nav-img')}
                      srcSet={img}
                    />
                  </div>
                );
              })}
              <div className="row">
                <div
                  className="col hidden-xs-down h-100 nav-img"
                  onClick={() => this.chooseImg(-1)}
                >
                  <p className="nav-top">Home</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade contact-modal">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <form id="contact-me" action="https://formspree.io/mailto@reidroman.com" method="POST">
                <div className="modal-header">
                  <h5 className="modal-title">Contact Reid</h5>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="reply-to">Reply To</label>
                    <input type="email" className="form-control" id="reply-to" name="reply-to" aria-describedby="emailHelp" placeholder="pictureme@beautiful.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="3"></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  <button
                    className="g-recaptcha btn btn-primary"
                    data-sitekey="6LdTGRMUAAAAADMxtXYd5LVRFvedvsJQu9FzmO-w"
                    data-size="invisible"
                    data-badge="inline"
                    data-callback="contactMe"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="modal fade about-modal">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">About Reid</h5>
              </div>
              <div className="modal-body">
                <p>
                  An avid perceiver of light, Reid finds beauty in contrast and
                  relief.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Index);
