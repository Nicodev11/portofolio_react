import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const _navigation = () => {
  return (
    <Navigation>
      <header>
        <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="./assets/img/logo/logobw.png" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <NavLink
                to="/"
                className="nav-link text-center mx-auto me-3"
                activeClassName="active"
              >
                Accueil
              </NavLink>
              <NavLink
                to="/portofolio"
                className="nav-link text-center mx-auto me-3"
                activeClassName="active"
              >
                Portofolio
              </NavLink>
              <NavLink
                to="/a-propos"
                className="nav-link text-center mx-auto me-3"
                activeClassName="active"
              >
                À propos
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link text-center mx-auto"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div> 
      </nav>
      </header>
      
    </Navigation>
  );
};

const Navigation = styled.div`

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .nav-link {
    
      color: black;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 500;
      position: relative;
      transition: all 0.5s ease-in-out;
      
      &:hover {
        color: black;
      }

      // barre blanche sous la page active
      &.active {

        color: black;

        &::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: black;
          transition: all 0.5s ease-in-out;
        }
      }

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -2px;
      transform: translate(-50%);
      width: 0;
      height: 2px;
      background: black;
      transition: width 0.3s ease;
      transform-origin: center;
    }

    &:hover::before {
      width: 100%;
    }

    
  }

  .navbar-toggler {
    background-color: black;

    &:hover {
      background-color: whitesmoke;
    }
  }

  .navbar-toggler-icon {
    color: black;
  }

  .navbar-brand {
    img {
      width: 80px;
    }
  }

  @media (max-width: 991px) {
    .navbar-brand {
      img {
        width: 80px;
      }
    }
  }

`;

export default _navigation;
