import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Moment from 'react-moment';

function RenderDish({ selectedDish }) {
    return (
        selectedDish != null ?
            <div className='row'>
                <Card className='col-12 col-md-5 m-1'>
                    <CardImg object src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle heading>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
                <RenderComments data={selectedDish.comments} />
            </div> : <div></div>
    );
}

function RenderComments({ data }) {
    return (
        <Card className='col-12 col-md-5 m-1'>
            <CardBody>
                <CardTitle heading>Comments</CardTitle>
                {data.map(comment => {
                    return (
                        <CardText>
                            {comment.comment}{"\n"}<br></br>-- {comment.author},
                            <Moment format="MMM D, YYYY" withTitle>{comment.date}</Moment>
                        </CardText>
                    )
                })}
            </CardBody>
        </Card>
    );
}

export default RenderDish;
