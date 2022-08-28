import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

export default function Header() {
    return (
        <>
            {/* below 3 lines {that is line 7,8,9 added manually} */}
            <div className="container-fluid nav_bg sticky-top">
                <div className="row">
                    <div className="col-11 mx-auto">

                        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                            <div class="container-fluid ">
                                <Link class="navbar-brand" to="/">letsGrow.in</Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">  original code*/}
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/services">Services</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/contact">Contact</Link>
                                        </li>

                                        {/* dropdown code starts below */}
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                More
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><hr class="dropdown-divider" /></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                    {/* end part of header */}
                                    <div className="d-flex m-2 px-3">
                                        <a href="/twr">
                                            <AiOutlineTwitter size={'1.3em'} color={'	#1DA1F2'} cursor={'pointer'} className="m-1" />
                                        </a>
                                        <a href="#">
                                            <AiFillFacebook size={'1.3em'} color={'#4267B2'} cursor={'pointer'} className="m-1" />
                                        </a>
                                        <a href="https://www.instagram.com/sanebugger/" target="_jk">
                                            <AiFillInstagram size={'1.3em'} color={'#E1306C'} cursor={'pointer'} className="m-1" />
                                        </a>
                                                                    {/* <a href="#">
                                        <GrLogin size={'1.5em'} color={'#E1306C'} cursor={'pointer'} className="m-1 " />
                                        </a> */}
                                    </div>
                                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><BiUserCircle size={'1.5em'} color={'#111'} cursor={'pointer'} className="m-1 " /></button>

                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                        <div class="offcanvas-header">
                                            <h2 id="offcanvasRightLabel">USER</h2>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            signOUT
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </>
    )
}
