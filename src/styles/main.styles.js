import styled from "styled-components";


const MainSection = styled.section`
width:100%;
height:90rem;
margin:auto;
background-color:hsl(180, 52%, 96%);
position:relative;
top:-2rem;
    .info{
        height:8rem;
        width:60rem;
        margin: 3rem auto;   
        box-shadow: 10px 10px 10px #888888;
        border-radius:10px;       
        display:grid;
        grid-template-columns:10% 39% 50%;
        background-color:#fff;
        .image{
            width:4rem;
            height:4rem;
            margin-top:2rem;
            margin-left:1.5rem;
            img{
                width:4rem;
                height:4rem;
                border-radius:50%;
                margin-right:1rem;
            }
        }
        .position{
            margin:1rem 0rem;
            display:grid;
            grid-template-columns:100%;
            font-weight:bold;
            .feat{
                display:flex;
                margin-top:.7rem;
                margin-bottom:.3rem;
                font-size:0.6rem;
                .company{
                    color:hsl(180, 29%, 50%);
                    margin:.1rem 0.5rem; 
                    font-size:0.9rem;
                    display:flex;
                    justify-self:start;
                }
                .new{
                    height:1rem;
                    text-align:center;
                    display:flex;
                    justify-self:start;
                    border-radius:20px;
                    background-color:hsl(180, 29%, 50%);
                    color:white;
                    font-size:.6rem;
                    margin:0 0.2rem;
                    padding:.3rem .4rem 0 .4rem;
                    text-transform:uppercase;
                }
                .featured{
                    text-transform:uppercase;
                    text-align:center;
                    border-radius:20px;
                    display:flex;
                    justify-self:start;
                    height:1rem;
                    background-color:hsl(180, 14%, 20%);
                    margin:0 0.2rem;
                    color:#fff;
                    font-size:0.6rem;
                    padding:.3rem .4rem 0 .4rem;
                }
            }
            .position-head{
                margin-top:-1px;
                font-size:1.4rem;
                margin-left:.5em;
                cursor:pointer;
                &:hover{
                    color:hsl(180, 29%, 50%);
                }
            }
            .time-location{
                display:flex;
                margin-top:-1.6rem;
                margin-left:1rem;
                font-size:.8rem;
                color:hsl(180, 8%, 52%);
                opacity:0.5;
                span{
                    margin-top:.6rem;
                    margin-left:1rem;
                    margin-right:1rem;
                }
            }
    }
    .hr{
        display:none;
    }
    .lang{
        display:flex;
        justify-content:end;
        margin-right:1rem;
        margin-top:2.5rem; 
    }
    .languages{
        height:2.1rem;
       padding:.5rem .4rem 0rem .4rem;
       background-color:;
       margin:.4rem .4rem;
       text-align:center;
       background-color:hsl(180, 52%, 96%);
       color:hsl(180, 29%, 50%);
       font-weight:700;
       letter-spacing:1px;
       border-radius:5px;
       &:hover{
           cursor:pointer;
           background-color:hsl(180, 29%, 50%);
           color:hsl(180, 52%, 96%);
       }
    }
    
    .table{
        margin:auto;
        height:10rem;
        width:60rem;
        position:absolute;
        top:2rem;
        background-color:#fff;
        border-radius:20px;
        .tab{
            background-color:red;
            color:#fff;
            padding:.4rem .5rem;
            
        }
    }

@media screen and (max-width:500px){
    width:90%;
    margin:4rem auto;
    height:15rem;
    display:grid;
    grid-template-columns:100%;
        .image{
            position:relative;
            top:-2rem;
            left:1.5rem;
            margin:0rem 0rem;
        }
        .position{
            position:relative;
            top:-3rem;
            left:1.5rem;
            .feat{
                display:flex;
                margin-top:.7rem;
                margin-bottom:.3rem;
                .company{
                font-size:1.4rem;
                }
                .new{
                    font-size:1rem;
                    margin:0 0.2rem;
                    padding:.3rem .4rem 0.6rem .4rem;
                    
                }
                .featured{
                    font-size:1rem;
                    padding:.3rem .4rem 0.6rem .4rem;
                }
            }
        }
        .hr{
            width:100rem;
            height:10rem;
            color:red;
            background-color:red;
            position:relative;
            top:-5rem;
        }
        .lang{
            position:relative;
            top:-5rem;
            width:70%;
            margin:2rem 2rem;
            display:flex;
            justify-content:start;
            .languages{
                width:4rem;
                font-size:.6rem;
                height:1rem;
                padding-bottom:.4rem;
                
            }
        }
}

`;
export default MainSection;