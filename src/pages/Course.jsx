import React from 'react';
import { NavLink } from 'react-router-dom';
import CourseData from "../CourseData";

const Course = ({ match }) => {
    const styles = { marginLeft: "21vw", width: "70vw", marginTop: "1vh" };
    return (
        <>
            <div style={styles} >
                {CourseData.filter(cur => {
                    // eslint-disable-next-line
                    return cur.id == match.params.id;
                }).map((data, index) => (
                    <div style={{ display: "grid", placeItems: "center" }}>
                        <ul style={{ listStyle: "none", textAlign: "center" }}>
                            <li>
                                {data.info}
                            </li>
                            <br />
                            <iframe title={data.info}
                                src={data.video}>
                            </iframe>

                        </ul>
                        <button className="btn btn-warning">
                            <NavLink
                                to={{
                                    pathname: `/course/${data.id}/enroll`,
                                    state: `${data.info}`
                                }}
                                style={{ color: "black", textDecoration: "none" }}
                            >
                                Enroll
                            </NavLink>

                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Course;

