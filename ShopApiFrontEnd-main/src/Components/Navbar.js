import React from "react";
import { Children } from "react/cjs/react.production.min";
import styled from "styled-components";
import { HeaderFrame } from "./ProductStyle";
export default function Header(){
  return (
      <HeaderFrame>
          <ul>
              <li>
                  <a href="/">Welcome</a>
              </li>
              <li>
              <a href="/products">Products</a>
              </li>
          </ul>
      </HeaderFrame>
  );
}
// const HeaderFrame = styled.div`
// min-height: 50px;
// min-width: 100%;
// background-color: rgb(150, 150, 150, 0.7);
// display: flex;
// flex-direction: column;
// & > ul {
//     list-style: none;
//     display: flex;
//     & > li: Notification(:nth-Children(1)) {
//         margin-left: 10px;
//     }
// }
// `;
//export default Header;