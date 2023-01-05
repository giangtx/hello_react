import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Home = () => {
    const params = useParams();
    useEffect(() => {
        console.log(params);
      }, [])

    return (
        <div>giag</div>
    )
}

export default Home;