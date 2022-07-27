import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Detail = () => {
    return (
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400 }}> Welcome Harsh Pathak</h1>
            <Card sx={{ maxWidth: 600 }}>

                <CardContent>
                    <div className='add_btn'>
                        <button className='btn btn-primary mx-2'><EditIcon /></button>
                        <button className='btn btn-danger'><DeleteOutlineIcon /></button>
                    </div>

                    <div className='row'>
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src="/profile.png" style={{ width: 50 }} alt='profile' />
                            <h3 className='mt-3'>Name: <span>Harsh Pathak</span></h3>
                            <h3 className='mt-3'>Age: <span>21</span></h3>
                            <p className='mt-3'> <MailIcon /> Email: <span>harsh@email.com</span></p>
                            <p className='mt-3'> <WorkIcon /> Occupation: <span>Webdeveloper</span></p>
                        </div>


                        <div className='right_view col-lg-6 col-md-6 col-12'>
                            <p className='mt-5'><MobileFriendlyIcon /> mobile: <span>+1 437 555 3669</span></p>
                            <p className='mt-3'><LocationOnIcon /> location: <span>XYZ</span></p>
                            <p className='mt-3'>Description: <span>Lorem Ipsum</span></p>

                        </div>

                    </div>


                </CardContent>
            </Card>
        </div>
    )
}

export default Detail
