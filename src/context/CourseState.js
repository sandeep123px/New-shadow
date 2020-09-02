import React, { useReducer } from "react"
import CourseContext from "./CourseContext"
import CourseReducer from "./CourseReducer"
import {GET_COUNTRIES,GET_COURSES,GET_QUALIFICATIONS, SET_LOADING,GET_COURSESCOUNT,GET_CATEGORIES} from "./Types"
import axios from "axios"

const CourseState = (props) =>{

    const initialState ={
        countries : [],
        qualifications:[],
        courses:[],
        categories:[],
        coursescount : 0,
        loading : false
        }

    const [state,dispatch] = useReducer(CourseReducer,initialState)

    const getCountries = async ()=>{
        try {
            const res = await axios.get('https://api.odmit.com/api/v1/get-countries')
            const data = res.data.response.data;
            dispatch({type:GET_COUNTRIES,payload:data})
        } catch (error) {
            console.log("Error while fetching countries");
        }
    }

    const getQualifications = async ()=>{
        try {
            const res = await axios.get('https://api.odmit.com/api/v1/courses-qualifi')
            const data = res.data.response.data
            dispatch({type:GET_QUALIFICATIONS,payload:data})
        } catch (error) {
            console.log("Error while fetching qualificatons");
        }
    }
    const getCourses = async (country,type,qualification)=>{
        try {
            dispatch({type:SET_LOADING})
            const res = await axios.get(`http://18.222.152.113:8080/api/v1/courses-list?country=${country}&course_state=${type}&last_qual=${qualification}`)
            const data = res.data.response
            dispatch({type:GET_COURSES,payload:data})
        } catch (error) {
            console.log("Error while fetching qualificatons");
        }
    }
    const getCategories = async ()=>{
        try {
            const res = await axios.get(`https://api.odmit.com/api/v1//get-categories`)
            const data = res.data.response
            dispatch({type:GET_CATEGORIES,payload:data})
        } catch (error) {
            console.log("Error while fetching categories");
        }
    }
    const getCoursesCount = async (country,type,qualification)=>{
        try {
            const res = await axios.get(`http://18.222.152.113:8080/api/v1/courses-count-params?country=${country}&course_state=${type}&last_qual=${qualification}`)
            const data = res.data.response
            dispatch({type:GET_COURSESCOUNT,payload:data})
        } catch (error) {
            console.log("Error while fetching count");
        }
    }

    return(
        <CourseContext.Provider value={{
            countries : state.countries,
            qualifications:state.qualifications,
            courses:state.courses,
            loading : state.loading,
            coursescount : state.coursescount,
            categories:state.categories,
            getCountries,
            getQualifications,
            getCategories,
            getCourses,
            getCoursesCount
        }}>
            {props.children}
        </CourseContext.Provider>
    )

}

export default CourseState