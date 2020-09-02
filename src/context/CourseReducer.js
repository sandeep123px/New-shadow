import {GET_COUNTRIES, GET_QUALIFICATIONS, GET_COURSES, SET_LOADING,GET_COURSESCOUNT ,GET_CATEGORIES} from "./Types";

const CourseReducer =  (state,action) =>{
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries : action.payload
            }
        case GET_QUALIFICATIONS:
            return{
                ...state,
                qualifications : action.payload
            }
        case GET_CATEGORIES:
            return{
                ...state,
                categories : action.payload.data
            }
        case GET_COURSES:
            return{
                ...state,
                courses : action.payload.data,
                loading:false
            }
        case SET_LOADING:
            return{
                ...state,
                loading : true
            }
        case GET_COURSESCOUNT:
            return{
                ...state,
                coursescount : action.payload.total_record,
            }
        default:
            return state
    }
}

export default CourseReducer