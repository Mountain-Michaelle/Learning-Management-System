import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CourseImg from '../static/images/Course2.jpg';

const CourseDetail = () => {

    let {course_id} = useParams();

    return(
        <div className="container mt-5">
            <div className='row justify-content-center'>
                <div className='col-md-6 col-sm-12'>
                    <img className='rounded w-100 h-75' style={{objectFit:"contain"}} src={CourseImg} alt=""  />
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
            </div>
            <div className='row'>
                <div className='col'>
                    <Link to="/detail/:course_id/video"><button className='btn btn-success'> Enter Class Now</button></Link>
                </div>
            </div>
        </div>
    )
}
export default CourseDetail;