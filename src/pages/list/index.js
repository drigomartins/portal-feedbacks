import React from 'react';
import { 
    Div,
    Input,
    Pagination,
    PaginationButton
 } from './styles';

import Topbar from '../../components/topbar';
import ItemList from '../../components/itemList';


export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            filteredList: [],
            paginationCount: 0,
            startPaginationCountNow: 0,
            endPaginationCountNow: 10,
        };
    }

    async getList(){
        try {
            const response = await fetch('http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator')
            const data = await response.json()
            this.setState({
                list: data, 
                filteredList: data, 
                paginationCount: Math.round((data.length / 10)*1),
            });

        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {

        this.getList();

    }

    search(event) {
        const text = event.target.value;
        const filter = this.state.list.filter(function(item){
            return item.name.toString().toLowerCase().search(
                text.toString().toLowerCase()) !== -1;
        });
        this.setState({filteredList: filter});
    }

    updatePagination(page){
        this.setState({
            startPaginationCountNow: Math.round( page * 10 ) - 10,
            endPaginationCountNow: Math.round( page * 10 ),
        });
    }

    createPagination(){
    
        let pagination = []
        for (let j = 0; j < this.state.paginationCount; j++) {
            pagination.push(<PaginationButton key={j} onClick={() => this.updatePagination(j + 1)}>{`${j + 1}`}</PaginationButton>)
        }
        return pagination
    }
    
    render(){
        return (
            <Div>
                <Topbar />
                <Div className="container">
                    <Input onChange={this.search.bind(this)} placeholder="Digite o Nome" />
                    <Div className="row">
                        { (this.state.filteredList.slice(this.state.startPaginationCountNow, this.state.endPaginationCountNow)).map(item => 
                            <ItemList key={item.id} id={item.id} name={item.name} company={item.company} role={item.role} />
                        )}
                    </Div>
                    <Pagination>
                        {this.createPagination()}
                    </Pagination>
                </Div>
            </Div>
        );
    }
}