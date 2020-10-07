import styled from 'styled-components'

export const Div = styled.div`
    
`;
export const Content = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`;
export const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 0px;
    color: #555;
`;
export const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    -webkit-box-shadow: 0px 10px 22px -6px rgba(0,0,0,0.13);
    -moz-box-shadow: 0px 10px 22px -6px rgba(0,0,0,0.13);
    box-shadow: 0px 10px 22px -6px rgba(0,0,0,0.13);
    margin-top: -50px;
    margin-bottom: 20px;
`;
export const Text = styled.p`
    font-size: 12px;
    margin-bottom: 0px;
    color: #6E6E6E;
    display: block;
    width: 100%;
    text-align: center;
`;
export const ListFeedback = styled.div`
    width: 100%;
    height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 15px;
`;

export const ContentFeedback = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: #bbb;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
`;
export const MessageFeedback = styled.div`
    color: #555;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
`;
export const LikeFeedback = styled.div`
    color: #555;
    font-size: 16px;
    cursor: pointer
`;