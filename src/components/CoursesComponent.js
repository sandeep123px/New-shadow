import React, { useState, useEffect, useContext } from "react";
import "./styles/CoursesComponent.css";
import CourseContext from "../context/CourseContext";
import {Link} from 'react-router-dom';

const CoursesComponent = (props) => {
  const [filters, setfilters] = useState({
    type: "",
    country: "",
    qualifications: "",
  });

  const [selectcourse, setselectcourse] = useState("");

  const coursescontext = useContext(CourseContext);

  const {
    getCountries,
    countries,
    getQualifications,
    qualifications,
    getCourses,
    courses,
    loading,
    categories,
    coursescount,
    getCoursesCount,
    getCategories,
  } = coursescontext;

  useEffect(() => {
    getCountries();
    getQualifications();
    getCategories();
  }, []);

  useEffect(() => {
    getCourses(filters.country, filters.type, filters.qualifications);
  }, [filters.country, filters.type, filters.qualifications]);

  useEffect(()=>{
    getCoursesCount(filters.country, filters.type, filters.qualifications)
  },[filters.country, filters.type, filters.qualifications])

  let countriesList =
    countries.length > 0 &&
    countries.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });

  let qualificationslist =
    qualifications.length > 0 &&
    qualifications.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
  let categorieslist =
    categories.length > 0 &&
    categories.map((item) => {
      return (
        <option key={item.category_id} value={item.category_id}>
          {item.category}
        </option>
      );
    });

  let courseslist =
    courses.length > 0 &&
    courses.map((item) => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });

  return (
    <div className="coursescomponent">
      <div>
        <form>
          <div className="d-flex justify-content-flex-start align-items-center mb-2">
            <label htmlFor="type">Course Type:</label>
            <select
            className="ml-2"
              name="type"
              id="type"
              onChange={(e) => {
                setfilters({ ...filters, type: e.target.value });
              }}
            >
                <option value="" selected disabled hidden>Choose here</option>
              <option value="online">Online</option>
              <option value="on_campus">On Campus</option>
            </select>
          </div>
          <div  className="d-flex justify-content-flex-start align-items-center mb-2" >
            <label htmlFor="countries">Select Country:</label>
            <select
            className="ml-2"
              name="country"
              id="country"
              onChange={(e) => {
                setfilters({ ...filters, country: e.target.value });
              }}
            >
                <option value="" selected disabled hidden>Choose here</option>
              {countriesList}
            </select>
          </div>
          <div  className="d-flex justify-content-flex-start align-items-center mb-2">
            <label htmlFor="qualifications">Select Qualification:</label>
            <select
            className="ml-2"
              name="qualifications"
              id="qualifications"
              onChange={(e) => {
                setfilters({ ...filters, qualifications: e.target.value });
              }}
            >
                <option value="" selected disabled hidden>Choose here</option>
              {qualificationslist}
            </select>
          </div>
          <div  className="d-flex justify-content-flex-start align-items-center mb-2">
            <label htmlFor="categories">Select Category:</label>
            <select
            className="ml-2"
              name="categories"
              id="categories"
              onChange={(e) => {
                setfilters({ ...filters, categories: e.target.value });
              }}
            >
                <option value="" selected disabled hidden>Choose here</option>
              {categorieslist}
            </select>
          </div>
          {filters.country !== "" &&
            filters.qualifications !== "" &&
            filters.type !== "" && (
              <div>
                {loading ? (
                  <div>
                    {coursescount!==0 &&  <p style={{ fontStyle:"italic" }}>
                      Fetching {coursescount}  courses for you
                    </p>}
                  </div>
                ) : (
                  <div>
                    <label htmlFor="courses">Select Course:</label>
                    <select
                      name="courses"
                      id="courses"
                      onChange={(e) => {
                        setselectcourse(e.target.value);
                      }}
                    >
                        <option value="" selected disabled hidden>Choose here</option>
                      {courseslist}
                    </select>
                  </div>
                )}
              </div>
            )}
        </form>
       <Link to="/AfterResult"> <button className="btn btn-primary">Result</button></Link>
      </div>
    </div>
  );
};

export default CoursesComponent;
