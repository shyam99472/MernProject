import React from 'react';
import Navbar from './Navbar';


export default function Main() {
  return (
    <>
    <Navbar/>
      <div className="d-flex align-items-center justify-content-center" style={{ height: 'calc(100vh - 56px)', backgroundColor: '#f4f4ff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Learn New <br />Languages and <br />Move Forward</h1>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <a href="./" className="btn btn-custom btn-info">Enroll</a>
            </div>
            <div className="col-md-6 text-center position-relative">
              <img src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/2021/06/image-JA74V7F.png" alt="Teacher" className="img-fluid" style={{ width: '300px' }} />
              <div className="card p-3 position-absolute" style={{ top: '10%', right: '5%', width: '180px' }}>
                <h5 className="card-title">6</h5>
                <p className="card-text">Interactive Courses</p>
              </div>
              <div className="card p-3 position-absolute" style={{ top: '20%', left: '5%', width: '200px' }}>
                <h5 className="card-title">Largest Collection</h5>
                <p className="card-text">In Every Course</p>
              </div>
              <div className="card p-3 position-absolute" style={{ bottom: '7%', left: '0', width: '180px' }}>
                <h5 className="card-title">Cool Content</h5>
                <p className="card-text">And Active Students</p>
              </div>
              <div className="card p-3 position-absolute" style={{ bottom: '0', right: '-10%', width: '200px' }}>
                <h5 className="card-title">100% Free</h5>
                <p className="card-text">Learning Languages is completely Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};


