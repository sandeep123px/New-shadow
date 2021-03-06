import React ,{useState,useEffect}from 'react';
import './assets/scss/style.scss'
import { Link } from 'react-router-dom';

const CourseList =()=> {


	const [data,setResult]=useState([""]);

                     
          useEffect(()=>{
		    getResult();
	        },[])



	   


	    const getResult = async() =>{
			  await fetch(`https://api.odmit.com/api/v1/college-stack?course_type=on_campus&country=USA&qualification=Graduation&category=Computer%20Science%20and%20IT&page=1&limit=10&offset=0`)
			   .then((response)=>{
				   return response.json()
			   })
			   .then((res)=>{
				   console.log(res,"GEEETTTTTTT")
				   setResult(res.response.data)
				   console.log(res.response.data)
			   })
			   .catch((err)=>{
				   console.log(err)
			   })
		}
		return(
			<div>
				<div className="top-bar">
					<div className="container-fluid">
						<div className="d-between">
							<div className="top-filter">
								<input className="form-control form-control-sm" placeholder="Stream" type="text" />
								<input className="form-control form-control-sm" placeholder="Location" type="text" />
								<input className="form-control form-control-sm" placeholder="Graduation" type="text" />
							</div>
							<div className="right-widget d-center">
								<div className="list-icon">
									<Link to="/"><i className="ri-notification-3-line"></i></Link>
									<Link to="/"><i className="ri-user-line"></i></Link>
									<Link to="/"><i className="ri-shopping-cart-2-line"></i></Link>
								</div>
								<div className="toggles d-center mr-3">
									<div className="toggle-wrap d-center">
										<span>Online Courses</span>
										<label className="switch">
										  <input type="checkbox" checked />
										  <span className="slider round"></span>
										</label>
									</div>
									<div className="toggle-wrap d-center">
										<span>International Courses</span>
										<label className="switch">
										  <input type="checkbox" />
										  <span className="slider round"></span>
										</label>
									</div>
								</div>
								<h2 className="heading">ODMIT</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="apply-for">
					<h2 className="mb-0">Apply<br/>Collaborate<br/>Explore</h2>
				</div>
				<div className="course-bulk">
					<div className="container-lg">
						<div className="courses-slider-wrap">
							<h2 className="mb-0">Best<br/>Online<br/>Courses</h2>
							<div className="courses-slider">
								<div className="slide-list">
									<div className="media">
										<img src="/img/courses-img-1.png" className="img-fluid" alt="Course figure" width="100" height="130" />
										<div className="media-body">
											<h6>Python Advance</h6>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
										</div>
									</div>
									<div className="d-between">
										<span className="small text-muted">T&C Apply*</span>
										<Link to="/" class="site-link">Explore <i className="ri-add-line"></i></Link>
									</div>
								</div>
								<div className="slide-list">
									<div className="media">
										<img src="/img/courses-img-2.png" className="img-fluid" alt="Course figure" width="100" height="130" />
										<div className="media-body">
											<h6>Python Advance</h6>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
										</div>
									</div>
									<div className="d-between">
										<span className="small text-muted">T&C Apply*</span>
										<Link to="/" class="site-link">Explore <i className="ri-add-line"></i></Link>
									</div>
								</div>
								<div className="slide-list">
									<div className="media">
										<img src="/img/courses-img-1.png" className="img-fluid" alt="Course figure" width="100" height="130" />
										<div className="media-body">
											<h6>Python Advance</h6>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
										</div>
									</div>
									<div className="d-between">
										<span className="small text-muted">T&C Apply*</span>
										<Link to="/" class="site-link">Explore <i className="ri-add-line"></i></Link>
									</div>
								</div>
								<div className="slide-list">
									<div className="media">
										<img src="/img/courses-img-2.png" className="img-fluid" alt="Course figure" width="100" height="130" />
										<div className="media-body">
											<h6>Python Advance</h6>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
										</div>
									</div>
									<div className="d-between">
										<span className="small text-muted">T&C Apply*</span>
										<Link to="/" class="site-link">Explore <i className="ri-add-line"></i></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8">
								<div className="box-card">
								                                                                                                     
									<div className="course-stack-card">
										     
												{
										data.map((v,i)=>{
											if(i == 0 ){
											return(
												<div className="media" key={i}>
													<img src={"https://odmit.com"+v.institute_banner} className="img-fluid mr-3" alt="course-img" width="200" height="160" />
											<div className="media-body">
												  
												<div className="mb-3">
													<h6>{v.institute_name}
														<img src="/img/badge.png" className="img-fluid ml-2" alt="badge" width="40" height="40" />
													</h6>
											<span className="text-muted small">{v.city} , {v.country}</span>
												</div>
												<p>{v.courses_list == undefined ? (null) : (
												v.courses_list.map((idx,i,e)=>{
													if(i == 0 ){
													return(
													<span  className="d-block font-lg">{idx.course}</span>
													)		
												}
												
												})
											)}</p>
												<p className="mb-0">{v.institute_overview}</p>
											</div>
											<div className="fixed-block">
											<img src="/img/ribbon.png" className="img-fluid ribbon" alt="ribbon" width="25" height="80" />
												<span className="text-warning d-block mb-4">Get Admission Online</span>
												<p className="price">
													<span className="d-block strike">INR 5,000.00</span>
											<span className="d-block font-lg">INR 3,400.00</span>
												</p>
												<Link className="btn btn-primary btn-sm apply-btn">APPLY</Link>
											</div>
										</div>
											)
										}
										})
									}
											
										<div className="bottom-card">
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
											<div className="review">
												<h4>ReViews</h4>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
											</div>
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
										</div>
									</div>
									<div className="course-stack-card" id="show">
									{
														data.map((v,i)=>{
															if(i == 1){
															return(
																<div className="media" key={i}>
											<img src="/img/course-list-2.png" className="img-fluid mr-3" alt="course img" width="200" height="160" />
											<div className="media-body">
												<div className="mb-3">
													
													<h6>{v.institute_name}
														<img src="/img/badge.png" className="img-fluid ml-2" alt="badge" width="40" height="40" />
													</h6>
															<span className="text-muted small">{v.city} , {v.country}</span>
															<p>
															{v.courses_list == undefined ? (null) : (
												v.courses_list.map((idx,i)=>{
													if(i == 1){
													
													return(
													<span  className="d-block font-lg">{idx.course}</span>
													)		
												}
												
												})
											)}
															</p>
												</div>
												<p  style={{overflow:"hidden"}}className="mb-0">{v.institute_overview}</p>
											</div>
											<div className="fixed-block">
												<img src="/img/ribbon.png" className="img-fluid ribbon" alt="ribbon" width="25" height="80" />
												<span className="text-warning d-block mb-4">Get Admission Online</span>
												<p className="price">
													<span className="d-block strike">INR 5,000.00</span>
													<span className="d-block font-lg">INR 3,400.00</span>
												</p>
												<Link className="btn btn-primary btn-sm apply-btn">APPLY</Link>
											</div>
										</div>
										
															)
														}
														})
													}
										
										<div className="bottom-card">
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
											<div className="review">
												<h4>ReViews</h4>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
											</div>
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
										</div>
									</div>
									<div className="course-stack-card" id="show">
									{
														data.map((v,i)=>{
															if(i == 2){
															return(
																<div className="media" key={i}>
											<img src="/img/course-list-2.png" className="img-fluid mr-3" alt="course img" width="200" height="160" />
											<div className="media-body">
												<div className="mb-3">
													
													<h6>{v.institute_name}
														<img src="/img/badge.png" className="img-fluid ml-2" alt="badge" width="40" height="40" />
													</h6>
															<span className="text-muted small">{v.city} , {v.country}</span>
															<p>
															{v.courses_list == undefined ? (null) : (
												v.courses_list.map((idx,i)=>{
													if(i == 2){
													
													return(
													<span  className="d-block font-lg">{idx.course}</span>
													)		
												}
												
												})
											)}
															</p>
												</div>
												<p  style={{overflow:"hidden"}}className="mb-0">{v.institute_overview}</p>
											</div>
											<div className="fixed-block">
												<img src="/img/ribbon.png" className="img-fluid ribbon" alt="ribbon" width="25" height="80" />
												<span className="text-warning d-block mb-4">Get Admission Online</span>
												<p className="price">
													<span className="d-block strike">INR 5,000.00</span>
													<span className="d-block font-lg">INR 3,400.00</span>
												</p>
												<Link className="btn btn-primary btn-sm apply-btn">APPLY</Link>
											</div>
										</div>
										
															)
														}
														})
													}
										
										<div className="bottom-card">
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
											<div className="review">
												<h4>ReViews</h4>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
											</div>
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
											
										</div>
										
									</div>
                                       
									
								</div>
								<div className="course-stack-card" id="show">
									{
														data.map((v,i)=>{
															if(i == 3){
															return(
																<div className="media" key={i}>
											<img src="/img/course-list-2.png" className="img-fluid mr-3" alt="course img" width="200" height="160" />
											<div className="media-body">
												<div className="mb-3">
													
													<h6>{v.institute_name}
														<img src="/img/badge.png" className="img-fluid ml-2" alt="badge" width="40" height="40" />
													</h6>
															<span className="text-muted small">{v.city} , {v.country}</span>
															<p>
															{v.courses_list == undefined ? (null) : (
												v.courses_list.map((idx,i)=>{
													if(i == 3){
													
													return(
													<span  className="d-block font-lg">{idx.course}</span>
													)		
												}
												
												})
											)}
															</p>
												</div>
												<p  style={{overflow:"hidden"}}className="mb-0">{v.institute_overview}</p>
											</div>
											<div className="fixed-block">
												<img src="/img/ribbon.png" className="img-fluid ribbon" alt="ribbon" width="25" height="80" />
												<span className="text-warning d-block mb-4">Get Admission Online</span>
												<p className="price">
													<span className="d-block strike">INR 5,000.00</span>
													<span className="d-block font-lg">INR 3,400.00</span>
												</p>
												<Link className="btn btn-primary btn-sm apply-btn">APPLY</Link>
											</div>
										</div>
										
															)
														}
														})
													}
										
										<div className="bottom-card">
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
											<div className="review">
												<h4>ReViews</h4>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
											</div>
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
										</div>
									</div>
									<div className="course-stack-card" id="show">
									{
														data.map((v,i)=>{
															if(i == 4){
															return(
																<div className="media" key={i}>
											<img src="/img/course-list-2.png" className="img-fluid mr-3" alt="course img" width="200" height="160" />
											<div className="media-body">
												<div className="mb-3">
													
													<h6>{v.institute_name}
														<img src="/img/badge.png" className="img-fluid ml-2" alt="badge" width="40" height="40" />
													</h6>
															<span className="text-muted small">{v.city} , {v.country}</span>
															<p>
															{v.courses_list == undefined ? (null) : (
												v.courses_list.map((idx,i)=>{
													if(i == 1){
													
													return(
													<span  className="d-block font-lg">{idx.course}</span>
													)		
												}
												
												})
											)}
															</p>
												</div>
												<p  style={{overflow:"hidden"}}className="mb-0">{v.institute_overview}</p>
											</div>
											<div className="fixed-block">
												<img src="/img/ribbon.png" className="img-fluid ribbon" alt="ribbon" width="25" height="80" />
												<span className="text-warning d-block mb-4">Get Admission Online</span>
												<p className="price">
													<span className="d-block strike">INR 5,000.00</span>
													<span className="d-block font-lg">INR 3,400.00</span>
												</p>
												<Link className="btn btn-primary btn-sm apply-btn">APPLY</Link>
											</div>
										</div>
										
															)
														}
														})
													}
										
										<div className="bottom-card">
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
											<div className="review">
												<h4>ReViews</h4>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
											</div>
											<div className="card-links">
												<Link to="/">Explore Opportunities</Link>
												<Link to="/">Alma Mater</Link>
											</div>
										</div>
									</div>
								
							</div>
							<div className="col-lg-4">
								<div className="box-card">
									<img src="/img/admissions-ad-2.jpg" className="img-fluid" alt="ads" width="" height="" />
								</div>
								<div className="suggestion-block box-card">
									<h6>Suggestion For You</h6>
									<div className="media">
										<img src="/img/blog-img-1.png" className="img-fluid mr-3" alt="blog-img" width="120" height="120" />
										<div className="media-body">
											<h6>Aryan University</h6>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting text of the printing and typesetting .</p>
											<Link to="/" className="site-link">Explore <i className="ri-add-line"></i></Link>
										</div>
									</div>
									<div className="media">
										<img src="/img/blog-img-2.png" className="img-fluid mr-3" alt="blog-img" width="120" height="120" />
										<div className="media-body">
											<h6>Aryan University</h6>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting text of the printing and typesetting .</p>
											<Link to="/" className="site-link">Explore <i className="ri-add-line"></i></Link>
										</div>
									</div>
									<div className="media">
										<img src="/img/blog-img-1.png" className="img-fluid mr-3" alt="blog-img" width="120" height="120" />
										<div className="media-body">
											<h6>Aryan University</h6>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting text of the printing and typesetting .</p>
											<Link to="/" className="site-link">Explore <i className="ri-add-line"></i></Link>
										</div>
										
									</div>
									
								</div>
								
							</div>
							
						</div>
						
					</div>
					
				</div>
				
			</div>
		);
	}


export default CourseList;