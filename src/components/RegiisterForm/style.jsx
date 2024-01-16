import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    .container{
        max-width:400px;
        margin: 40px auto;
        h1{
            font-size: 40px;
            margin-bottom: 10px;
            font-weight: bold;
        }
        form{
            display: flex;
            flex-direction: column;
            gap: 18px;
            input{
                padding: 8px;
                border: 1px #232323 solid;
            }
            button{
                padding: 10px 8px;
                font-size: 16px;
                background-color: #232323;
                color: #fff;
            }
        }
    }
`