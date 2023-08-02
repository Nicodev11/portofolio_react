import React from "react";
import styled from "styled-components/macro";

const _footer = () => {
  return (
    <Footer>
      <footer className="d-flex flex-wrap justify-content-between align-items-center bg-white">
        <div className="container row mx-auto">
          <div className="col-md-8 my-3 d-flex align-items-center">
            <span className="mb-3 mb-md-0 ">© 2023 Company, Inc</span>
          </div>
          <ul className="nav mt-3 col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a href="/">
                <i className="bi bi-facebook" width="24" height="24"></i>
              </a>
            </li>
            <li className="ms-3">
              <a href="/">
                <i className="bi bi-instagram" width="24" height="24"></i>
              </a>
            </li>
            <li className="ms-3">
              <a href="/">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Footer>
  );
};

const Footer = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default _footer;
