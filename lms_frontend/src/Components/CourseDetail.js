import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CourseImg from '../static/images/Course2.jpg';
import Image from '../static/images/nature-3082832_960_720.jpg';
import '../css/CourseDetail.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
const CourseDetail = () => {

    let {course_id} = useParams();

    return(
        <div className="container mt-5">
            <div className='row justify-content-center'>
                <div className='col-md-6 col-sm-12'>
                    <img className='borders rounded w-100 h-75' style={{objectFit:"contain"}} src={CourseImg} alt=""  />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h2 className='mb-md-3 text-xs-left'>Application Program Interface</h2>
                    <article className='max-h-50'>
                    The useParams hook returns an object of key/value pairs of the...
                    Line 17:58:  The href attribute requires a valid value to be accessible.
                    </article>
                    <p><b>Course by: </b><i> Ugwu Michaello </i></p>
                    <p><b>Class Time: </b><i> 12:00pm</i></p>
                    <p><b>Total Student Enrolled: </b><strong> 400 students </strong></p>
                    <p><b>Rating: </b><strong> 4/5 </strong></p>
                </div>

                {/* Course Videos */}
                <div className='card mb-2'>
                    <div className='card-header'>
                        Featured
                    </div>
                    <ul class="list-group list-group-flush">
                        <li className='list-group-item'>Introduction <i className='point float-end'><YouTubeIcon /></i></li>
                        <li className='list-group-item'>Set up projects <i className='point float-end'><YouTubeIcon /></i></li>
                        <li className='list-group-item'>Functional Components <i className='point float-end'><YouTubeIcon /></i></li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Link to="/detail/:course_id/video"><button className='btn btn-success'> Enter Class Now</button></Link>
                </div>
            </div>

            <div className='row mt-5'>
                <h4>Related Courses</h4>
                <div className='col-3 col-md-3 mt-2 mb-3'>
                    <div className='card' style={{ width: '100%'}}>
                        <img className="card-i" src={Image}  alt='' />
                     <div className='card-b'>
                        <h4 className='card-title'>Essay Writ..</h4>
                     </div>
                    </div>
                </div>
                <div className='col-3 col-md-3 mt-2 mb-3'>
                    <div className='card' style={{ width: '100%'}}>
                        <img className="card-i" src={Image}  alt='' />
                     <div className='card-b'>
                        <h4 className='card-title'>Essay Writ..</h4>
                     </div>
                    </div>
                </div>
                <div className='col-3 col-md-3 mt-2 mb-3'>
                    <div className='card' style={{ width: '100%'}}>
                        <img className="card-i" src={Image}  alt='' />
                     <div className='card-b'>
                        <h4 className='card-title'>Essay Writ..</h4>
                     </div>
                    </div>
                </div>
                <div className='col-3 col-md-3 mt-2 mb-3'>
                    <div className='card' style={{ width: '100%'}}>
                        <img className="card-i" src={Image}  alt='' />
                     <div className='card-b'>
                        <h4 className='card-t'>Essay Writ..</h4>
                     </div>
                    </div>
                </div>
                
                            
            </div>
        </div>
    )
}
export default CourseDetail;