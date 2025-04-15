import React, { useState } from 'react'
import { toast } from 'react-toastify';

const SignupPage = () => {

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await reg
            if (response.ok) {
                toast.success("User Registered Successfully!", {
                    position: "top-left",
                    autoClose: 3000,
                });
                setTimeout(() => {
                    window.location.href = '/login';
                }, 3000);
            } else {
                toast.error("Registration Failed. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error("Error during registration:", error);

            toast.error("Something went wrong!", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };


    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">

                        <div className="px-5 ms-xl-4">
                            <i
                                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                                style={{ color: '#709085' }}
                            ></i>
                            <span className="h1 fw-bold mb-0">
                                <img width='200px' src="./src/assets/cloudshelf logo H.png" alt="logo" />
                            </span>
                        </div>

                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <form style={{ width: '23rem' }}>
                                <h3 className="fw-normal mb-2 pb-3" style={{ letterSpacing: '1px' }}>
                                    Register Here
                                </h3>

                                <div className="form-outline mb-4" data-mdb-input-init>
                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control form-control-lg fs-6"
                                        name="userName"
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="form2Example18"  >Name</label>
                                </div>

                                <div className="form-outline mb-4" data-mdb-input-init>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control form-control-lg fs-6"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="form2Example18">Email address</label>
                                </div>

                                <div className="form-outline mb-4" data-mdb-input-init>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control form-control-lg"
                                        name="password"
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="form2Example28">Password</label>
                                </div>

                                <div className="pt-1 mb-3">
                                    <button
                                        type="button"
                                        className="btn btn-info btn-lg btn-block"
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        onClick={handleSubmit}
                                    >
                                        Register
                                    </button>
                                </div>

                                <p className="small mb-2 pb-lg-2">
                                    <a className="text-muted" href="#!">Forgot password?</a>
                                </p>
                                <p>
                                    You already have an account?
                                    <a href="/login" className="link-info"> Login here</a>
                                </p>
                            </form>
                        </div>

                    </div>

                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                            alt="Login"
                            className="w-100 vh-100"
                            style={{ objectFit: 'cover', objectPosition: 'left' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignupPage
