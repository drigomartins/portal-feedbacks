import React from 'react';
import { 
    Title,
    Bar
 } from './styles';


export default class Topbar extends React.Component{
    
    render(){
        return (
            <Bar>
                <Title>Portal de Feedbacks</Title>
            </Bar>
        );
    }

}