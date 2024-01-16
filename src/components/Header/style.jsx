import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    background-color: #232323;
    color: white;
    nav{
        .logo{
            font-size: 25px;
        }
        font-weight: bold;
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul{
            display: flex;
            gap: 30px;
        }
    }
`