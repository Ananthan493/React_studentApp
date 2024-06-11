import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const[data,setData]=useState(
        {
            "Name": "",
            "Rollno": "",
            "Admno": "",
            "College": ""
        }
    )
    const inputHandler = (event) => {
        setData({...data, [event.target.name]:event.target.value})
      }
      const readValue = () => {
            console.log(data)
            axios.post("http://localhost:8080/add",data).then(
            (response)  => {
              console.log(response.data)
              if(response.data.status=="success")
                {
                  alert("successfully added")
                }
                else{
                  alert("error")
                }
            }).catch(
                (error)=>{
                  console.log(error.message)
                  alert(error.message)
                }
              )
          }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Name</label>
                                <input type="text" className="form-control" name='Name'value={data.Name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Roll No.</label>
                                <input type="text" className="input form-control" name='Rollno' value={data.Rollno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Admn No.</label>
                                <input type="text" className="input form-control" name='Admno' value={data.Admno} onChange={inputHandler}/>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">College</label>
                                <input type="text" className="input form-control" name='College' value={data.College} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent