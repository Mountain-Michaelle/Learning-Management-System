import React, {useState, useEffect} from 'react';
import '../css/TeacherCourse.css';
import TeacherHeader from './TeacherHeader';
import axios from 'axios';
import noImage from '../images/no_img.jpg';


const teacherId = localStorage.getItem('teacherId')
const teacherName = localStorage.getItem('teacherName')
const teacherCourse = localStorage.getItem('teacherCourse')


const TeacherCourse = () => {
    const BASE_URL = 'http://127.0.0.1:8000';
    const [courseData, setCourseData] = useState([])

// Fetching the API Here
    useEffect(() => {
        axios.get(BASE_URL + '/teacher-course/' + teacherId)
        .then((response) => {
            setCourseData(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

console.log('Your Id is ', teacherId, ' and your name is ', teacherName, ' and you teach ', teacherCourse)
    return(
        <div className='course11'>
            <TeacherHeader />
        <div className='teacher__course'>
             <div className='course__header'>
                <h2>Loaded Courses </h2>
            </div>

            <div className='tables1'>
                <table>
                    <thead className='thead1'>
                        <tr>
                            <th>
                                Course Topic
                            </th>

                            <th>
                                Course Image
                            </th>

                            <th>
                                Time Duration 
                            </th>
                            <th>
                                Time uploaded
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    {
                        courseData.map((cos, index) => {
                            return( 
                        <tbody className='tbody1'>
                         <tr> 
                            <td>{cos.topic}</td>
                            {
                               cos.course_image ?  <td> <img className='cos_image' src={cos.course_image} alt='' width="80px" /> </td> 
                               :  <td><img className='cos_image' src={noImage} alt="" width="80px" /> </td>
                            }
                            
                            <td>{cos.course_duration}</td>
                            <td>{cos.time}</td> 
                            <td>
                                <div className='butn'>
                                <button className='but11 btn'>Delete</button>
                                <button className='but12 btn'>Add Module</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    )
                        })
                    }
                    
                </table>
            </div>
        </div>
           
        </div>
    )
}

export default TeacherCourse;