import React from 'react'

const NavigationBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
    <div class="container">
      <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt=""
        loading="lazy" />
      <button class="navbar-toggler ps-0" type="button" data-mdb-collapse-init data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon d-flex justify-content-start align-items-center"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#news">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#pets">Pets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#adoptions">Adoptions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#foundation">Foundation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#help">How can I help?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#about">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#contact">Contact</a>
          </li>
        </ul>

        <ul class="navbar-nav flex-row">
          <li class="nav-item">
            <a class="nav-link px-2" href="#!">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-2" href="#!">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ps-2" href="#!">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default NavigationBar
