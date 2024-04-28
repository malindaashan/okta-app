import React, {useEffect} from "react";
import {BASE_NAME} from "../Constants";

function About() {

    useEffect(() => {
        window.history.replaceState(null, null, BASE_NAME + "/about");
    }, []);
    return (
        <>
            <h1>Developed in 2024 @MalindaPeiris </h1>

        </>
    )
}

export default About;
