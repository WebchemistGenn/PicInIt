import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const InitStyle = createGlobalStyle`
  ${reset}
`;

const Root = () => {
  return (
    <React.Fragment>
      <InitStyle />
      <div>aaaa</div>
    </React.Fragment>
  );
};

export default Root;
