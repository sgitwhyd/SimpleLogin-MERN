import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"

const Dashboard = () => {

    const history = useHistory()
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));

    if (isAuth !== 1) {
        history.push('/');
    }

    const [users, setUsers] = useState([])

    const userData = JSON.parse(localStorage.getItem('userData'));

    const GetUsers = async () => {
        try {
            axios.get("https://restapilogin.herokuapp.com/auth/users", {
                headers: {
                    "auth": userData.token
                }
            }).then(res => {
                setUsers(res.data.data)
            })
        } catch {
            Swal.fire({
                icon: 'error',
                title: "Ops...",
                text: "You Must Login First"
            })
            history.push('/')
        }
    }

    useEffect(() => {
        GetUsers()
    }, [])

    const handleLogout = async () => {
        await Swal.fire({
            icon: 'success',
            title: "Logout Successfully",
            backdrop: `rgba(0,0,123,0.4)`,
        })
        history.push('/');
        window.localStorage.clear();
        window.location.reload();
    }



    return (
        <div className='container'>
            <h1>Selamat Datang</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user._id}>
                                    <th scope="row">1</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-danger">Delete</button>
                                        <button className="btn btn-primary  ml-3">Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button
                className='btn btn-danger'
                onClick={handleLogout}>
                Logout
                </button>
        </div>
    )
}

export default Dashboard
