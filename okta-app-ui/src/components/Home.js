import React, {useEffect} from "react";
import {BASE_NAME} from "../Constants";

function Home() {
    useEffect(() => {
        window.history.replaceState(null, null, BASE_NAME + "/");
    }, []);
    return (
        <>
            <h1>Welcome Home</h1>
            {/*<a href={`${BASE_NAME}/logout`} className="btn">Go!</a>*/}

        </>
    )
}

export default Home;
