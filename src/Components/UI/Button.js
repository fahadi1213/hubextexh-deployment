import styled from "styled-components";

const EButton = styled.button`
background-color:${props => props.bgColor};
color:${props => props.color};
text-align: center;
padding: 8px 10px;
width: ${props => props.width};
border:${props => props.primary? "1px solid #FFFF":"none"};
border-radius:50px;
`;

export default EButton;