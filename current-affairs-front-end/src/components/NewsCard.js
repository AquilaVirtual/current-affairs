import React from "react";
import moment from "moment";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const NewsCard = props => {
  let imageUrl = props.article.urlToImage
    ? props.article.urlToImage
    : "https://mk0globalbankin3xg02.kinstacdn.com/wp-content/uploads/2018/09/business-news-3.jpg";
  let url = props.article.url;
  return (
    <div className="data">
      <Card    style={{  marginTop: "14px"}}>
        <CardBody>
          <CardTitle style={{ fontSize: "30px", color: "purple" }}>
            <a href={url} target="blank"style={{ textDecoration: "none" }}>{props.article.title}</a>
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
            style={{ margin: "14px 0", width: "50%", height: "30%" }}
            src={imageUrl}
            alt="Article image"
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default NewsCard;
