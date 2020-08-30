import React, { Component } from 'react'
import AppCard from '../components/AppCard/AppCard'
import Covidocity from "../assets/covidocity.png"
import Quiz from "../assets/pocketpubquiz.PNG"
import PLANiT from "../assets/PLANiT.PNG"

export default class Portfolio extends Component {

    state = {
        projects: [
            {
                img: PLANiT,
                link: "https://travelplanit.herokuapp.com/",
                name: "PLANiT",
                description: "PLANiT is a collaborative travel planning app for groups looking to make the most of their next adventure. Users can create planning boards, or maps as we call them, where an unlimited amount of guests can be invited to suggest or vote on plans within user-customized trip catergories. Whether you are trying coordinate plans with a group or are just having fun dreaming about your next vacation, planning a trip has never been easier or as stress free!"
            },
            {
                img: Covidocity,
                link: "https://maria-helbling.github.io/travel-risk-2020/",
                name: "Covidocity",
                description: "Covidocity is a page which allows the user to look at the current Covid-19 situation in a given Country or US State."
            },
            {
                img: Quiz,
                link: "https://pocketpubquiz.herokuapp.com/",
                name: "Pocket Pub Quiz",
                description: "The Pocket Pub Quiz is a fun game which allows the user to create a unique quiz, with a chosen category. The user can then share the link with friends, and compare their scores to their friends. This app uses Sequelize, Express.js, Node.js, express-handlebars, and Materialize."
            }
        ]
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.projects.map(project => (
                        <AppCard
                            img={project.img}
                            link={project.link}
                            name={project.name}
                            description={project.description}
                        />
                    ))};
            </div>
            </div>
        )
    }
}

