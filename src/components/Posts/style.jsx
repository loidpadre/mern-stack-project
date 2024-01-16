import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    .content{
       max-width: 990px;
       margin: 30px auto;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       gap: 30px;
       .card{
        width: 200px;
        border: 1px #232323 solid;
        img{
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
        .text{
            padding: 10px;
            h1{
                font-weight: bold;
                font-size: 18px;
            }
            .autor-date{
                display: flex;
                flex-direction: column;
                gap: 5px;
                gap: 5px;
                span{
                font-size: 13px;
                color: #888;
            }
            }
            p{
                line-height: 1.2rem;
                color: #232323;
            }
            
        }
       }
    }
`