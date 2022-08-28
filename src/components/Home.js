import React from 'react'
import img2 from './img/img2.jpg'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
    <div className="container-fluid ">
      <div className="row">
        <div className="col-10 mx-auto">

            <div className="row align-items-center">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                  <h1>Grow your <strong className='business'>business</strong> with us</h1>
                  <h3 className='mt-3'>We are the team of talented developers making website</h3>
                  <div class="btn-group my-3">
                      <button type="button" class="btn btn-warning"> <Link to="/services">Get Started</Link> </button>
                      <button type="button" class="btn btn-warning mx-2"> <Link to="/contact">Contact Us</Link></button>
                  </div>
                </div>

                <div className="col-md-6 pt-5 pt-lg-5 order-1 order-lg-2 ">
                  <img src={img2} className='img-fluid animated' alt="" />
                </div>   
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
