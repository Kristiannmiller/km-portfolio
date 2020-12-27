import styled from "styled-components";

export const MobileNavMenu = styled.div`
  display: ${props => props.display};
  font-size: 2em;
  flex-direction: column;
  position: fixed;
  right: 0;
  width: auto;
  height: auto;
  padding: 2%;
  z-index: 1000;
  background-color: rgba(248, 248, 248, 0.90);
  border: 2px solid #f5f5f5;
  box-shadow: 1px 1px 10px #300e25;
  border-radius: 20px;
`
export const HamNav = styled.div`
  display: ${props => props.display};
  font-family: 'Raleway', sans-serif;
  font-size: 3em;
  color: #300E25;
  float: right;
  align-self: center;
  text-align:center;
  margin-right: 5%;
  transform: ${props => props.transform};
`
