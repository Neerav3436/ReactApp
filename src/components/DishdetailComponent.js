import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function RenderDish({ selectedDish, comments }) {
    return (
        selectedDish != null ?
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{selectedDish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDishItem data={selectedDish} />
                    <RenderComments data={comments} />
                </div>
            </div> : <div></div>
    );
}

function RenderDishItem({ data }) {
    return (
        <Card className='col-12 col-md-5 m-1'>
            <CardImg object src={data.image} alt={data.name} />
            <CardBody>
                <CardTitle heading>{data.name}</CardTitle>
                <CardText>{data.description}</CardText>
            </CardBody>
        </Card>
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
