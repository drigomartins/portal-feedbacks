import styled from 'styled-components'

export const Div = styled.div`
    
`;
export const Input = styled.input`
    width: 100%;
    margin-bottom: 20px;
    border-style: solid;
    border-radius: 10px;
    border-width: 1px;
    padding: 7px;
    font-size: 12px;
    background-color: white;
    border-color: #6E6E6E;
    transition: 0.2s;
    &:focus {
        outline: none;
        box-shadow: 0px 2px 1px #febc00;
        border-color: #FFD400;
    }
`;
export const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const PaginationButton = styled.button`
    background-color: #fec200;
    border-style: none;
    border-radius: 5px;
    margin: 5px;
    width: 30px;
    height: 25px;
    font-size: 12px;
`;