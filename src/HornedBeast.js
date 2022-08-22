import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          voteNum : ""
        }
    }

    increaseVotes = () => {
        this.setState({
            voteNum : this.state.voteNum + "🦄"
        })
    
      }




    render(){
        return(
          
            <Card style={{ width: '18rem',display:"inline-block" }} className="beast-card">
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.img} onClick={this.increaseVotes}/>
              <Card.Text className="desc">
              {this.props.description}
              </Card.Text>
              <Card.Text className="vote">
              Votes
              </Card.Text>
              <Card.Text>
              {this.state.voteNum}
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}

export default HornedBeast;