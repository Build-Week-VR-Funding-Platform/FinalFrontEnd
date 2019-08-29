import React, { useState, useEffect } from "react";
import axios from "axios";

const Founders = () => {

    const [founders, setFounders] = useState([])

    useEffect(() => {
        axios
          .get('https://vr-funding-app.herokuapp.com/api/founders/public')
          .then(res => {
            console.log('public founders: ', res);
            setFounders(res.data)//check res.data
          })
          .catch(err => console.log(err.response))
      }, []);

    return (
        <>
            <h2>Founders list</h2>
            {founders.map(fou => <div key={fou.name} className="founders-card"><h3>{fou.username}</h3><h4>{fou.name}</h4><p>{fou.about}</p></div>)}
        </>
    )
}

export default Founders;