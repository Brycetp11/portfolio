import React from 'react'
// import { Link } from "react-router-dom"

export default function AppCard(props) {
    return (
        <div className="col-md-4 mb-4">
        <div className="card bg-dark text-light text-uppercase text-center h-100">
          <img src="assets/covidocity.png" className="card-img-top img-fluid images" alt="Covidocity" />
          <div className="card-body">
            <h5 className="card-title">
              <a href="https://maria-helbling.github.io/travel-risk-2020/" target="_blank"
                className="badge badge-light">Covidocity</a>
            </h5>
            <p className="card-text">Covidocity is a page which allows the user to look at the current Covid-19 situation in
              a given Country or US State.</p>
          </div>
        </div>
      </div>
    )
}
