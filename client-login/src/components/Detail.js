import React, { useEffect,useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {NavLink, useHistory, useParams} from 'react-router-dom';

const Detail = () => {

    const [getuserdata,setUserdata]=useState([]);

    console.log(getuserdata);
    const {id} =useParams("");
    console.log(id);
   
    const history= useHistory();
    const getdata= async()=>
    {

        const res = await fetch(`/getuser/${id}`,{
        method:"GET" ,
        headers:{
            "Content-type":"application/json"
        },
        
    });

    const data=await res.json();
    console.log(data);

    if(res.status===422 || !data){
    
        console.log("error");
    }
    else{
        setUserdata(data)
        console.log("get data");
    }
    }   

useEffect(()=>{
    getdata();
});
const deleteuser =async(id)=>{
    const res2 = await fetch(`/deleteuser/${id}`,{
        method:"DELETE" ,
        headers:{
            "Content-type":"application/json"
        },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if(res2.status === 422 || !deletedata){
        console.log("error");
    }
    else{
        console.log("user deleted");
       history.push("/");
    }
}


    return (
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400 }}> Welcome </h1>
            <Card sx={{ maxWidth: 600 }}>

                <CardContent>
                    <div className='add_btn'>
                       <NavLink to ={`edit/${getuserdata._id}`}> <button className='btn btn-primary mx-2'><EditIcon /></button></NavLink>
                        <button className='btn btn-danger' onClick ={()=>deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                    </div>

                    <div className='row'>
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src="/profile.png" style={{ width: 50 }} alt='profile' />
                            <h3 className='mt-3'>Name: <span>{getuserdata.name}</span></h3>
                            <h3 className='mt-3'>Age: <span>{getuserdata.age}</span></h3>
                            <p className='mt-3'> <MailIcon /> Email: <span>{getuserdata.email}</span></p>
                            <p className='mt-3'> <WorkIcon /> Occupation: <span>{getuserdata.work}</span></p>
                        </div>


                        <div className='right_view col-lg-6 col-md-6 col-12'>
                            <p className='mt-5'><MobileFriendlyIcon /> mobile: <span>{getuserdata.mobile}</span></p>
                            <p className='mt-3'><LocationOnIcon /> location: <span>{getuserdata.add}</span></p>
                            <p className='mt-3'>Description: <span>{getuserdata.desc}</span></p>

                        </div>

                    </div>


                </CardContent>
            </Card>
        </div>
    )
}

export default Detail
