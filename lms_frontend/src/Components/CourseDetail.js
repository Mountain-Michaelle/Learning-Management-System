import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {

    let {course_id} = useParams();

    return(
        <div>
            <h4>
                Hello am the detail page {course_id}
            </h4>
        </div>
    )
}
export default CourseDetail;