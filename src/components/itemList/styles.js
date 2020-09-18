import styled from 'styled-components'

export const Div = styled.div`

`;

export const Content = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    -webkit-box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 15px;
    transition: 0.2s;
    &:hover {
        border-style: solid;
        border-width: 1px;
        box-shadow: 0px 0px 0px #FFD400;
        border-color: #FFD400;
        border-width: 2px;
    }

`;
export const Name = styled.div`
    width: 100%;
    color: #555;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
`;
export const Company = styled.div`
    width: 100%;
    color: #555;
    font-size: 12px;
`;
export const Role = styled.i`
    color: #6E6E6E;
    transition: 0.2s;
    font-size: 12px;
`;