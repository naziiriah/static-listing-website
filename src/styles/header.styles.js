import styled from "styled-components"


const Head = styled.header`
margin:auto;
width:100%;
img{
    margin: auto;
    width:100%;
    height:10rem;
    background-color:hsl(180, 29%, 50%);
    

}
@media screen and (max-width:500px){
    width:500px;
    img{
        margin: auto;
        width:100%;
        height:7rem;
        background-color:hsl(180, 29%, 50%);
    }
}
`;

export default Head;