import React from 'react'
import './components/styles/AdmissionOnline.css'

export default function Loader(props){
    if(props.loader == "true"){
      return(
        <div  className="myLoader">
            <div className="loaderPic"></div>
        </div>
      )
    }else{
      return(
        <div></div>
      )
    }
}
  


