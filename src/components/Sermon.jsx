import React from 'react'

const Sermon = () => {
  return (
    <div>
      <section id="join">
        <div className="container">
          <div className="join-title">
            <h5>upcoming sermons</h5>
            <h2>join us and become part of something great</h2>
          </div>
          
          <div className="join-wrapper">
            <div className="left-join">
              <div className="left-wrapper">
                <div className="left-info1">
                  <h5>upcoming event</h5>
                  <h2>WATCH AND LISTEN <br /> TO OUR SERMONS</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="left-info2">
                  <img src="./images/Clock icon.png" alt="time" />
                  <p>Friday 23:39 IST <br />Saturday 11:20 ISD</p>
                </div>
                <div className="left-info3">
                  <img src="./images/Icon.png" alt="pinned" />
                  <p>No 233 Main St. New York, <br />United States</p>
                </div>
                <button className="join-button">REGISTER</button>
              </div>
            </div>
            
            <div className="right-join">
              <img src="./images/Image (1).jpg" alt="hoomans" />
            </div>
          </div>
          
          <div className="viewjoin">
            <h4>View all Sermons</h4>
            <img src="./images/Shape.png" alt="arrow" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sermon
