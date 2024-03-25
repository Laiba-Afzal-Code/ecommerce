import { css } from "styled-components";
export const mobile = (props) => {
  return css`
    @media only screen and (mix-width:400px){
     ${props}
    }
    `;
};
