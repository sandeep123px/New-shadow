import React from "react"
import AdmissionOnline from "../components/AdmissionOnline"
import CoursesComponent from "../components/CoursesComponent"

const Home = () =>{
    return(
        <div id="home" className="d-flex">
        <AdmissionOnline/>
        <CoursesComponent/>
        // </div>
    )
}

export default Home