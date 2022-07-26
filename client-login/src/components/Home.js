import React from 'react'

const Home = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2 mb-2'>
                    <button className='btn btn-primary'> Add data</button>
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
                            <td>meet</td>
                            <td>meet@email.com</td>
                            <td>Webdeveloper</td>
                            <td>91919191</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                                <button className='btn btn-primary'><i class="fa-solid fa-pen"></i></button>
                                <button className='btn btn-danger'><i class="fa-solid fa-delete-left"></i></button>
                            </td>
                        </tr>
                       
                        <tr>
                            <th scope="row">1</th>
                            <td>meet</td>
                            <td>meet@email.com</td>
                            <td>Webdeveloper</td>
                            <td>91919191</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                                <button className='btn btn-primary'><i class="fa-solid fa-pen"></i></button>
                                <button className='btn btn-danger'><i class="fa-solid fa-delete-left"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Home
