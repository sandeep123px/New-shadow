import React,{useState,useEffect} from 'react'
import './components/styles/AdmissionOnline.css'
import Loader from './loader'

function AfterResult() {
   
    
    const [data,setResult]=useState([""]);
    // const [course,setCourse] =useState([])
    let [loader,setLoader] = useState("false")



      useEffect(()=>{
          getResult();
       } ,[])
     
       const getResult = async() =>{
           setLoader("true")
    await fetch(`https://api.odmit.com/api/v1/college-stack?course_type=on_campus&country=USA&qualification=Graduation&category=Computer%20Science%20and%20IT&page=1&limit=10&offset=0
    `)
    .then((response)=>{
        return response.json()
    })
    
    .then((res)=>{
       
        console.log(res)
        setResult(res.response.data)
        
        console.log(res.response.data)
        
        
    })
    .catch((err)=>{
       console.log(err)
    })
    .finally(()=>{
        setLoader("false")
    })
}


    return (
        <div className="bigwhite">
            <Loader loader={loader}/>
            <div className="box1">
                

                <div className="subbox1">
            
               
                    {
                         data.map((v,i)=>{
                             if (i == 0){
                            return(
                            <div className="subbox2" key={i+0}>
                            <div className="collegename">{v.institute_name}</div>
                            <div className="flex">
                            <div className="dbshcbs">
                                <h3>CourseList</h3>
                                {v.courses_list == undefined ? (null) :(
                                      
                                    v.courses_list.map((idx,i)=>{
                                         if (i == 1 )
                                        return(
                                        <div className="review">{idx.course}</div>
                                        )
                                    })
                                )}</div>
                            <div className="courselist">
                            <h3>Reviews</h3>
                            {v.institute_overview}</div>
                            </div>
                            </div>
                            )
                        }
                        })
                        
                    }
                   
              
                </div>
               

            </div>
            <div className="box1">
                <div className="subbox1">
            
               
                    {
                         data.map((v,i)=>{
                            if(i == 1){
                            return(
                            <div className="subbox2" key={i}>
                            <div className="collegename" >{v.institute_name}</div>
                            <div className="flex">
                            <div className="dbshcbs">
                                <h3>CourseList</h3>
                                {v.courses_list == undefined ? (null) :(
                                    v.courses_list.map((idx,i,)=>{

                                          if (i == 0){
                                              
                                        return(
                                        <div className="review">{idx.course}</div>
                                        )
                                    }
                                    })
                                
                                )}</div>
                            <div className="courselist">
                            <h3>Reviews</h3>
                            {v.institute_overview}</div>
                            </div>
                            </div>
                            )
                            }
                               
                        })
                        
                    }
                   
              
                </div>
               

            </div>

            <div className="box1">

                <div className="subbox1">
            
               
                    {
                         data.map((v,i)=>{
                             if(i == 2){
                            return(
                            <div className="subbox2" key={i}>
                            <div className="collegename">{v.institute_name}</div>
                            <div className="flex">
                            <div className="dbshcbs">
                                <h3>CourseList</h3>
                                {v.courses_list == undefined ? (null) :(
                                    v.courses_list.map((idx,i,)=>{
                                        return(
                                        <div className="review">{idx.course}</div>
                                        )
                                    })
                                )}</div>
                            <div className="courselist">
                            <h3>Reviews</h3>
                            {v.institute_overview}</div>
                            </div>
                            </div>
                            )
                        }
                               
                        })
                        
                    }
                   
              
                </div>
               

            </div>



            <div className="box1">
                <div className="subbox1">
            
               
                    {
                         data.map((v,i)=>{
                             if (i == 3){
                            return(
                            <div className="subbox2" key={i}>
                            <div className="collegename">{v.institute_name}</div>
                            <div className="flex">
                            <div className="dbshcbs">
                                <h3>CourseList</h3>
                                {v.courses_list == undefined ? (null) :(
                                    v.courses_list.map((idx,i,)=>{
                                        return(
                                        <div className="review">{idx.course}</div>
                                        )
                                    })
                                )}</div>
                            <div className="courselist">
                            <h3>Reviews</h3>
                            {v.institute_overview}</div>
                            </div>
                            </div>
                            )
                        }
                        })
                        
                    }
                   
              
                </div>
               

            </div>

            <div className="box1">  
                <div className="subbox1">
                      
               
                    {
                         data.map((v,i)=>{
                             if (i == 4){
                            
                            return(
                                
                            <div className="subbox2" key={i}>
                            <div className="collegename">{v.institute_name}</div>
                            <div className="flex">
                            <div className="dbshcbs">
                                <h3>CourseList</h3>
                                {v.courses_list == undefined ? (null) :(
                                    v.courses_list.map((idx,i,)=>{
                                        return(
                                        <div className="review">{idx.course}</div>
                                        )
                                    })
                                )}</div>
                            <div className="courselist">
                            <h3>Reviews</h3>
                            {v.institute_overview}</div>
                            </div>
                            </div>
                            )
                        }
                               
                        })
                        
                    }
                
                   
              
                </div>
               

            </div>
            <div className="box1">  
                <div className="subbox1">
                      
               
                    {
                         data.map((v,i)=>{
                             if (i == 5){
                            
                            return(
                                
                            <div className="subbox2" key={i}>
                            <div className="collegename">{v.institute_name}</div>
                            <div className="flex">
                            <div className="dbshcbs">
                                <h3>CourseList</h3>
                                {v.courses_list == undefined ? (null) :(
                                    v.courses_list.map((idx,i,)=>{
                                        return(
                                        <div className="review">{idx.course}</div>
                                        )
                                    })
                                )}</div>
                            <div className="courselist">
                            <h3>Reviews</h3>
                            {v.institute_overview}</div>
                            </div>
                            </div>
                            )
                        }
                               
                        })
                        
                    }
                
                   
              
                </div>
               

            </div>
            <div className="box1">  
                <div className="subbox1">
                      
               
                    {
                         data.map((v,i)=>{
                             if (i == 6){
                            
                            return(
                                
                            <div className="subbox2" key={i}>
                            <div className="collegename">{v.institute_name}</div>
                            <div className="flex">
                            <div className="dbshcbs">
                                <h3>CourseList</h3>
                                {v.courses_list == undefined ? (null) :(
                                    v.courses_list.map((idx,i,)=>{
                                        return(
                                        <div className="review">{idx.course}</div>
                                        )
                                    })
                                )}</div>
                            <div className="courselist">
                            <h3>Reviews</h3>
                            {v.institute_overview}</div>
                            </div>
                            </div>
                            )
                        }
                               
                        })
                        
                    }
                
                   
                 
                </div>
               

            </div>
            </div>
            
    )
            }
    
    export default AfterResult;
    