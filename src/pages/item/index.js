import React from 'react';
import { 
    Div,
    Content,
    Title,
    Text,
    Img,
    ListFeedback,
    ContentFeedback,
    MessageFeedback,
    LikeFeedback
 } from './styles';

import Topbar from '../../components/topbar';


export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item:[],
            feedback: [],
            addFeedback: "",
            liked: []
        };
    }

    async getCollaborator(){
        try {

            const response = await fetch('http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator/' + this.props.id)
            const collaborator = await response.json()
            this.setState({item: collaborator});
            this.getFeedback();

        } catch (error) {
            console.log(error)
        }
    }

    async getFeedback(){
        try {

            const response = await fetch('http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator/' + this.props.id +'/feedback')
            const feedback = await response.json()
            this.setState({feedback: feedback});

        } catch (error) {
            console.log(error)
        }
    }

    arrayLike(liked){
        const filterId = this.state.liked.filter(function (item) {
          return item.id.toString().toLowerCase().search(
            liked.id.toString().toLowerCase()) !== -1;
        });
    
        if(filterId.length > 0){
    
          this.setState({
            liked: this.state.liked.filter((i) => i.id !== liked.id)
          })
          this.desLike(liked.id,liked.like);
          
        }else{
    
          this.setState({
            liked: [...this.state.liked, liked]
          })
    
        }
    }

    async like(idLike, qtdLike){
        try {

            const response = await fetch('http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator/' + this.props.id + '/feedback/' + idLike,{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },    
                method: 'PUT',
                body: JSON.stringify({
                    "like": qtdLike + 1
                })
            })
            const like = await response.json()
            this.getCollaborator();

        } catch (error) {
            console.log(error)
        }
    }

    async desLike(idLike, qtdLike){
        try {

            const response = await fetch('http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator/' + this.props.id + '/feedback/' + idLike,{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },    
                method: 'PUT',
                body: JSON.stringify({
                    "like": qtdLike - 1
                })
            })
            const like = await response.json()
            this.getCollaborator();

        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {

        this.getCollaborator();

    }

    createLikeIcon(liked){

        const filterId = this.state.liked.filter(function (item) {
            return item.id.toString().toLowerCase().search(
              liked.id.toString().toLowerCase()) !== -1;
        });

        if(filterId.length > 0){
    
            return <i className="fas fa-thumbs-up"></i>
            
        }else{

      
            return <i className="far fa-thumbs-up"></i>
      
        }
    }
    
    render(){
        return (
            <Div>
                <Topbar />
                {this.state.item.id &&
                    <Div className="container">
                        <Content>
                            <Img src={this.state.item.avatar} />
                            <Title>
                                {this.state.item.name}
                            </Title>
                        </Content>
                        <Content>
                            <Text>
                                Empresa: {this.state.item.company}
                            </Text>
                            <Text>
                                Cargo: {this.state.item.role}
                            </Text>
                        </Content>
                        <Content>
                            <Text>
                                Feedbacks:
                            </Text>
                            <ListFeedback>
                            { (this.state.feedback.slice(0,20)).map(item => 
                                <ContentFeedback key={item.id}>
                                    <MessageFeedback>
                                        {item.message}
                                    </MessageFeedback>
                                    <LikeFeedback onClick={() => {this.like(item.id, item.like); this.arrayLike({"id": item.id, "like": item.like})}}>
                                        {this.createLikeIcon({"id": item.id})}
                                        {item.like}
                                    </LikeFeedback>
                                </ContentFeedback>
                            )}
                            </ListFeedback>
                        </Content>
                    </Div>
                }
            </Div>
        );
    }
}