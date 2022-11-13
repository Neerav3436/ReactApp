import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Moment from 'react-moment';

class DishDetail extends Component {

    componentDidMount(){
        console.log("DishDetail Component Did mount");
    }

    componentDidUpdate(){
        console.log("DishDetail Component Did Update")
    }

    render() {
        console.log("DishDetail Render")
        return (
            this.props.selectedDish != null ?
                <div className='row'>
                    <Card className='col-12 col-md-5 m-1'>
                        <CardImg object src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                        <CardBody>
                            <CardTitle heading>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                    <Card className='col-12 col-md-5 m-1'>
                        <CardBody>
                            <CardTitle heading>Comments</CardTitle>
                            {this.props.selectedDish.comments.map(comment => {
                                return (
                                    <CardText>
                                        {comment.comment}{"\n"}<br></br>-- {comment.author},
                                        <Moment format="MMM D, YYYY" withTitle>{comment.date}</Moment>
                                    </CardText>
                                )
                            })}
                        </CardBody>
                    </Card>
                </div> : <div></div>
        );
    }
}

export default DishDetail;
