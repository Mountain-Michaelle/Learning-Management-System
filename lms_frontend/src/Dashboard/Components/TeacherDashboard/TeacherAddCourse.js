import React, { useState, useEffect} from 'react';
import TeacherHeader from './TeacherHeader';
import '../css/AddCourse.css';
import axios from 'axios';

const teacherId = localStorage.getItem('teacherId')
const TeacherAddCourse = () => {

// *****************   Functionality of the page   ***************//

const BaseUrl = 'http://127.0.0.1:8000/';
const [category, setCategory] = useState([])
const [teacher, setTeacher] = useState([])
const [courseData, setCourseData] = useState({
    id: '',
    topic: '',
    course_image: null,
    description: '',
    course_duration: '',
    teacher: '',
    category: '',
})
const [courseDataError, setCourseDataError] = useState({
    duration: '',
    course_image:null,
})

useEffect(()=>{
    axios.get(BaseUrl + 'course-category/')
    .then((response) => {
        setCategory(response.data)
    })
    .catch(error => {
        console.log("error ", error.data)
    })
},[])

useEffect(() => {
    //Teacher APi
        axios.get(BaseUrl + 'teachers/')
        .then(res => {
            setTeacher(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
}, [])

console.log("categories ", category)
// console.log(teacher, ' hear')

const handleChange = (event) => {
    setCourseData({
        ...courseData,
        [event.target.name]: event.target.value
    })

}

const handleFileChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.files[0]
        })
}

const handleSubmit = e => {
    e.preventDefault()
    const form_Data = new FormData();
    form_Data.append('category', courseData.category);
    form_Data.append('topic', courseData.topic);
    form_Data.append('description', courseData.description);
    form_Data.append('duration', courseData.duration);
    form_Data.append('course_image', courseData.course_image);
    form_Data.append('teacher', teacherId);

    axios.post(BaseUrl + 'courses/', form_Data, {
        headers:{
            'content-type': 'multipart/form-data'
        }
    })
    .then( resp => {
        setCourseData(resp.data)
    })
    .catch(error => {
        setCourseDataError(error.data)
    })}

   

// ********** END Functionality of the page  ************//


    return(
        <div className='course__add'>
                <TeacherHeader />

            <div className='header'>
                <h3>Add Course</h3>
            </div>
            <div className='forms'>
                <form>
                    <label className='label2'>Course Topic</label>
                    <input name='topic' onChange={handleChange} className='input2 text2' type='text' placeholder='' />

                    
                    <label className='tex1'>Course Duration</label>
                    <input name='course_duration' onChange={handleChange} className='input2 text1' type='text' placeholder='eg. 00 04:60:60 ie. day hrs:mins:sec' />
                
                    <label className='label2'>Description</label>
                    <textarea name='description' onChange={handleChange} className='textarea'></textarea>

                    <label className='label2'> Select Course</label>
                    <select name='category' onChange={handleChange} className="select">
                    {
                    category.map(
                        (categ, index) => {return <option value={categ.id} className='option2' key={index}>{categ.title}</option> }  
                          )
                    }
                    </select>

                    {/** This is teacher selection input */}
                    {/* <label className='label2'>Course Owner</label>
                    <select name='teacher' onChange={handleChange} className='select'>
                        {
                            teacher.map(
                                (name, index) => {
                                return <option value={teacher.id} className='option2' key={index}>{name.idcd}</option>
                            })
                        }
                    </select> */}

                    <label className='label2'>Thumbnail Image</label>
                    <input name='course_image' className="input2" onChange={handleFileChange} type='file' accept="image/png, image/gif, image/jpeg"  id='' />
                    
                    <button onClick={handleSubmit} className="butt">Save File</button>
                </form>
            </div>
        </div>
    )
}

export default TeacherAddCourse;