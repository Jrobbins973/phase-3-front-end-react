import React from "react";
import {Link, Switch, Route} from 'react-router-dom'

function Home() {
    return (
        <div className="homepage">
            <h1 className="title">Welcome To Estos</h1>
            <Link to ='/movies'>
            <button className='button-49'>Enter</button>
            </Link>
            
            
        </div>
    )
}

export default Home

