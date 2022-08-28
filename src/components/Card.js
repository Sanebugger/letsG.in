import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className="col-md-4 col-10 mx-aut0">
        <div className="card" >
            <img src={props.imgsrc} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title fw-bold">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary bg-dark">click here</a>
            </div>
        </div>
    </div>
    </>
  )
}
