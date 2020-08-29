import React from 'react'
import "./AppCard.css"

export default function AppCard(props) {
    
    return (
        <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light text-uppercase text-center h-100">
          <img src={props.img} className="card-img-top img-fluid images" alt="Covidocity" />
          <div className="card-body">
            <h5 className="card-title">
              <a href={props.link}
                className="badge badge-light">{props.name}</a>
            </h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    )
}
