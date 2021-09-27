import React from 'react';
import { useLocation } from 'react-router';
import { info } from "./Course";


const CourseEnroll = () => {
    const styles = { marginLeft: "21vw", width: "70vw", marginTop: "1vh" };
    const loc = useLocation();
    
    console.log(loc.state);
    return (
        <>
            <div style={styles} >
                <h1> This is course enroll data </h1>
                <h2> <b> {loc.state} </b> </h2>
            </div>
        </>
    );
}

export default CourseEnroll;