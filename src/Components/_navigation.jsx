import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const _navigation = () => {
  return (
    <Navigation>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container mb-3 border-bottom">
          <a class="navbar-brand" href="/">
            <img src="./assets/img/logo/logobb.png" alt="logo" />
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <NavLink
                to="/"
                className="nav-link text-center mx-auto me-3"
                activeClassName="active"
              >
                Acceuil
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
                A propos
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
    </Navigation>
  );
};

const Navigation = styled.div`

  .nav-link {
    
      color: #fff;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 500;
      position: relative;
      transition: all 0.5s ease-in-out;
      
      &:hover {
        color: #fff;
      }

      // barre blanche sous la page active
      &.active {

        color: #fff;

        &::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #fff;
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
      height: 3px;
      background: #fff;
      transition: width 0.3s ease;
      transform-origin: center;
    }

    &:hover::before {
      width: 100%;
    }

    
  }

  .navbar-toggler {
    background-color: #fff;

    &:hover {
      background-color: whitesmoke;
    }
  }

  .navbar-toggler-icon {
    color: black;
  }

  .navbar-brand {
    img {
      width: 100px;
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
