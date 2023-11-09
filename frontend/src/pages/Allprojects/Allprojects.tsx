import React from 'react';
import "./Allprojects.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaAngleDoubleRight, FaEye, FaLink } from "react-icons/fa";
import port1 from "../../../../assets/portfolio-1.jpg";
import port2 from "../../../../assets/portfolio-2.jpg";
import port3 from "../../../../assets/portfolio-3.jpg";
import port4 from "../../../../assets/portfolio-4.jpg";
import port5 from "../../../../assets/portfolio-5.jpg";
import port6 from "../../../../assets/portfolio-6.jpg";

const portfolio = [
    {
        image: port1,
        title: "Portfolio title",
    },
    {
        image: port2,
        title: "Portfolio title",
    },
    {
        image: port3,
        title: "Portfolio title",
    },
    {
        image: port4,
        title: "Portfolio title",
    },
    {
        image: port5,
        title: "Portfolio title",
    },
    {
        image: port6,
        title: "Portfolio title",
    },
]

const Allprojects = () => {
    return (
        <div className="allprojects_sec">
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h1 className="main-title">Project</h1>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="align-items-center">
                                <a className="btn-outline-border" href="">Home</a>
                                <FaAngleDoubleRight className='icon' />
                                <a className="btn-outline-border" href="">Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6">
                        <h6 className="main-title">Our Projects</h6>
                        <h1 className="section-title">Visit Our Awesome Cleaning Projects</h1>
                    </div>
                    <div className="col-lg-6 text-center">
                        <ul className="list-inline mb-2 d-flex" id="portfolio-flters">
                            <li className="btn-outline-border" data-filter="*">All</li>
                            <li className="btn-outline-border">Complete</li>
                            <li className="btn-outline-border">Running</li>
                            <li className="btn-outline-border">Upcoming</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">

                    {portfolio.map((item, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item" key={i}>
                            <div className="position-relative">
                                <div className="portfolio-img">
                                    <img src={item?.image} alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <h4 className="title">{item?.title}</h4>
                                    <div className="d-flex align-items-center">
                                        <a className="btn-sm" href="">
                                            <FaLink className='icon' />
                                        </a>
                                        <a className="btn-sm" href={item?.image}>
                                            <FaEye className='icon' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Allprojects