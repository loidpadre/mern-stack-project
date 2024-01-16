import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    .content{
       max-width: 790px;
       margin: 30px auto;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       gap: 20px;
       .card{
        width: 250px;
        height: 400px;
        border-radius: 10px;
        border: 1px #232323 solid;
        img{
            width: 250px;
            height: 300px;
            object-fit: cover;
            border-radius: 10px 10px 0px 0px;
        }
        .text{
            padding: 10px;
        }
       }
    }
`