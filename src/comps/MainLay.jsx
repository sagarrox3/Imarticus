import React from "react";

const MainLay = () => {
    const styles = {
        marginLeft: "21vw",
        width: "70vw",
        paddingTop: "1vh",
    };

    return (
        <>
            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url("https://cdn.pixabay.com/photo/2018/06/24/08/01/dark-background-3494082_1280.jpg")`,
                backgroundRepeat: "no-repeat repeat",
                backgroundSize: "100%",
                color: "white",
                opacity: ".7"
            }}>
                <div style={styles}>
                    <h1>
                        this is home
                    </h1>
                </div>
            </div>
        </>
    );
};

export default MainLay;