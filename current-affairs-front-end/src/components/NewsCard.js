import React from "react";
import moment from "moment";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const NewsCard = props => {
  let url = props.article.urlToImage
    ? props.article.urlToImage
    : "https://mk0globalbankin3xg02.kinstacdn.com/wp-content/uploads/2018/09/business-news-3.jpg";
  return (
    <div className="data">
      <Card>
        <CardBody>
          <CardTitle style={{ fontSize: "30px", color: "purple" }}>
            {props.article.title}
          </CardTitle>
          <CardText style={{ margin: "14px 0" }}>
            {props.article.content}
          </CardText>
          <CardText>
            <small className="text-muted" style={{ margin: "14px 0" }}>
              {moment(props.article.publishedAt).calendar()}
            </small>
          </CardText>
          <CardImg
            style={{ margin: "14px 0", width: "500px", height: "300px" }}
            src={url}
            alt="Article image"
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default NewsCard;
