import React, {useState, useEffect } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';


const Home = () => {

const [getuserdata,setUserdata]=useState([]);
console.log(getuserdata);
    const getdata= async(e)=>
    {

        const res = await fetch("/getdata",{
        method:"GET" ,
        headers:{
            "Content-type":"application/json"
        },
        
    });

    const data=await res.json();
    console.log(data);

    if(res.status===404 || !data){
    
        console.log("error");
    }
    else{
        setUserdata(data)
        console.log("get data");
    }
    }   

useEffect(()=>{
    getdata();
})



    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2 mb-2'>
                    <NavLink to="/register" className='btn btn-primary'> Add data</NavLink>
                </div>
                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{getuserdata[0].name}</td>
                            <td>meet@email.com</td>
                            <td>Webdeveloper</td>
                            <td>91919191</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><RemoveRedEyeIcon/></button>
                                <button className='btn btn-primary'><EditIcon/></button>
                                <button className='btn btn-danger'><DeleteOutlineIcon/></button>
                            </td>
                        </tr>
                       
                        
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Home
