import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const NewsCard = (props) => {
    return (
    <div className="data">
      <Card>
        <CardBody>
          <CardTitle style={{ fontSize:'30px', color: 'purple' }}>{props.article.title}</CardTitle>         
          <CardText>{props.article.content}</CardText>         
        <CardImg  width="50%" src={props.article.urlToImage} alt="Card image cap" />
        </CardBody>
      </Card>
    </div>
  );
}

export default NewsCard;