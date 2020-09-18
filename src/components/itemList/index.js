import React from 'react';
import { 
    Div,
    Content,
    Name,
    Company,
    Role,
 } from './styles';
import { Link } from "react-router-dom";


export default class ItemList extends React.Component{
    
    render(){
        return (
            <Div className="col-12 col-sm-12 col-md-6">
                <Link to={"/item/" + this.props.id}>
                    <Content>
                        <Name>
                            {this.props.name}
                        </Name>
                        <Company>
                            Empresa: {this.props.company}
                        </Company>
                        <Role>
                            Cargo: {this.props.role}
                        </Role>
                    </Content>
                </Link>
            </Div>
        );
    }

}