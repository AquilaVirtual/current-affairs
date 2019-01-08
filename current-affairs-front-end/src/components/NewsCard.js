import React from "react";
import moment from "moment";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const NewsCard = (props) => {
    return (
    <div className="data">
      <Card>
        <CardBody>
          <CardTitle style={{ fontSize:'30px', color: 'purple' }}>{props.article.title}</CardTitle>         
          <CardText>{props.article.content}</CardText>   
          <CardText>
            <small className="text-muted">{moment(props.article.publishedAt).calendar()}</small>
          </CardText>      
        <CardImg  width="50%" src={props.article.urlToImage} alt="Card image cap" />
        </CardBody>
      </Card>
    </div>
  );
}

export default NewsCard;