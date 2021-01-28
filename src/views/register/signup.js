import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
// import css
import "../register/signup.css"
import logo from "../../img/logo.png"
// import sweetAlert
import Swal from 'sweetalert2'
// import img
import eclipse1 from "../../img/Ellipse 3.png"
import eclipse2 from "../../img/Ellipse 4.png"
import ilus from "../../img/illustration.png"
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"






const Login = () => {

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getUsername = (e) => {
        setUsername(e.target.value)
    }
    const getName = (e) => {
        setName(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const register = () => {
        const data = {
            name: name,
            username: username,
            email: email,
            password: password
        }

        Swal.fire({
            title: "Loading...",
            showConfirmButton: false,
            backdrop: `rgba(0,0,123,0.4)`
        })

        axios.post("https://restapilogin.herokuapp.com/register", data)
            .then(async (res) => {
                await Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    backdrop: `rgba(0,0,123,0.4)`
                })
                history.push("/")
            }).catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e.response.data.msg
                })
                setName('')
                setUsername('')
                setEmail('')
                setPassword('')
            })
    }

    return (
        <div className='d-flex flex-row'>
            <div className='left'>
                <div className='kartu d-flex flex-column'>
                    <div className='top d-flex flex-row mb-3'>
                        <div className="logo d-flex justify-content-center">
                            <img src={logo} alt='logo' />
                        </div>
                    </div>
                    <Form>
                        <div class="mb-2">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" class="form-control" value={name} onChange={getName} />
                        </div>
                        <div class="mb-2">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" value={username} onChange={getUsername} />
                        </div>
                        <div class="mb-2">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" value={email} onChange={getEmail} />
                        </div>
                        <div className='mb-4'>
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" value={password} onChange={getPassword} />
                        </div>
                        <button type="button" class="btn btn-primary signin" onClick={register}>
                            Register
                            </button>
                        <div className='newaccount'>
                            <Link to='/'>Have Account ?</Link>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="right pl-5">
                <div className="eclipse-top">
                    <img src={eclipse2} alt='variasi' />
                </div>
                <div className="eclipse-bottom">
                    <img src={eclipse1} alt='variasi' />
                </div>
                <div className='ilustration d-flex justify-content-center d-flex flex-column'>
                    <img src={ilus} alt="ilustration" />
                    <div className='text'>
                        <h4>Simple is Key</h4>
                        <p>
                            Generate business model with no hustle and headache
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
