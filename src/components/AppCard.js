import React from 'react'

export default function AppCard() {
    return (
        <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light text-uppercase text-center h-100">
                <img src={Project-img} className="card-img-top img-fluid images" alt="Covidocity" />
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={Link-to-GitHub-Repo} target="_blank"
                            className="badge badge-light">{Project-Name}</Link>
                    </h5>
                    <p className="card-text">{Project-Description}</p>
                </div>
            </div>
        </div>
    )
}
