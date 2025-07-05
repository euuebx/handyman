import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text4">Plumbing Services</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2">
                      Our experienced plumbers can handle any plumbing issue,
                      from leaky faucets to full bathroom installations.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text3">
                      Electrical Services
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text6">
                      Trust our skilled electricians for all your electrical
                      needs, including wiring, lighting, and repairs.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text1">Carpentry Services</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text5">
                      Our carpenters are experts in woodworking, offering custom
                      furniture, repairs, and installations.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3Title: undefined,
  feature1ImgAlt: 'Plumbing Icon',
  feature1Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1571763806648-5d022a3d1a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTcwMzEzN3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1729710877235-28d1e82d0442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTcwMzEzN3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Title: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'Carpentry Icon',
  feature3Description: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTcwMzEzN3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description: undefined,
  feature2ImgAlt: 'Electrical Icon',
}

Features25.propTypes = {
  feature3Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
}

export default Features25
