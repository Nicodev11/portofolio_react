import React from "react";
import styled from "styled-components/macro";

const _footer = () => {
  return (
    <Footer>
      <footer class="d-flex flex-wrap justify-content-between align-items-center bg-dark">
        <div class="container my-3 border-top row mx-auto">
          <div class="col-md-8 d-flex align-items-center">
            <span class="mb-3 mb-md-0 text-white">© 2023 Company, Inc</span>
          </div>
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-white" href="/">
                <i class="bi bi-facebook" width="24" height="24"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-white" href="/">
                <i class="bi bi-instagram" width="24" height="24"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-white" href="/">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Footer>
  );
};

const Footer = styled.div``;

export default _footer;
