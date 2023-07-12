import React, {useState, useEffect} from 'react';
import '../css/TeacherCourse.css';
import TeacherHeader from './TeacherHeader';
import axios from 'axios'


const teacherId = localStorage.getItem('teacherId')
const teacherName = localStorage.getItem('teacherName')
const teacherCourse = localStorage.getItem('teacherCourse')


const TeacherCourse = () => {
    const BASE_URL = 'http://127.0.0.1:8000';
    const [courseData, setCourseData] = useState([])

// Fetching the API Here
    useEffect(() => {
        axios.get(BASE_URL + '/teacher-course/3')
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
                                Course Name
                            </th>

                            <th>
                                Cousee Topic
                            </th>

                            <th>
                                Time Duration 
                            </th>
                            <th>
                                Time uploaded
                            </th>
                        </tr>
                    </thead>
                    {
                        courseData.map((cos, index) => {
                            return( 
                        <tbody className='tbody1'>
                         <tr> 
                            <td>{cos.category}</td>
                            <td>{cos.topic}</td>
                            <td>{cos.course_duration}</td>
                            <td>{cos.time}</td>
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