import { NavLink } from 'react-router-dom';
import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomeData from "../HomeData";

const Home = () => {
    return (
        <>
            {HomeData.map((cur, index) => {
                return (
                    <>
                        <br />
                        <div className="container card" style={{ marginLeft: "21vw", width: "70vw" }}>
                            <h5 className="card-header">{cur.header}</h5>
                            <div className="card-body">
                                <h5 className="card-title">{cur.title}</h5>
                                <p className="card-text">{cur.text}</p>
                                <button className="btn btn-warning">
                                    <NavLink
                                        to={{
                                            pathname: `/course/${cur.id}`
                                        }}
                                        style={{ color: "black", textDecoration: "none" }}
                                    >
                                        View Course
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                        <br />
                    </>
                );
            })}

        </>
    );
}

export default Home;