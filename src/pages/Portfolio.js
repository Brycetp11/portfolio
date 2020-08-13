import React, { Component } from 'react'
import AppCard from '../components/AppCard'
import Covidocity from "../assets/covidocity.png"
import Planner from "../assets/planner.png"
import Music from "../assets/musicquiz.png"
import Quiz from "../assets/pocketpubquiz.PNG"

export default class Portfolio extends Component {

    state = {
        projects: [
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
            },
            {
                img: Planner,
                link: "https://brycetp11.github.io/workdayscheduler/",
                name: "Daily Planner",
                description: "The daily planner saves the user's input in each hour, and allows the user to examine their past, present, and future tasks to complete."
            },
            {
                img: Music,
                link: "https://brycetp11.github.io/codequiz/",
                name: "Music Quiz",
                description: "This is a short quiz about Pop Music History, which tracks the user score. Be careful though, there is a time limit!"
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

