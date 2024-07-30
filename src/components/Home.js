import { Link } from "react-router-dom";
import React from "react"
export default function Home(props){
    return(
        <div className={styles.container}>
            
           <div>
                <h1>
                    <Link to="/login">Login</Link>
                </h1>
                <br/>
                <h1>
                    <Link to="/signup">Singnup</Link>
                </h1>
            </div>
            <br/>
            <br/>
            <br/>
            <h2>{props.name? `Welcome - ${props.name}`:"Login Please"}</h2>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between  py-4 px-4 px-xl-5 bg-primary">
    
    
</div>
        </div>
    );
}