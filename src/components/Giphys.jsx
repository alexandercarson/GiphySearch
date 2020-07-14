import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const Giphy = ({ giphyResults }) => {
  return (
    <div>
      {giphyResults &&
        giphyResults.map(
          ({ images, title, rating, trending_datetime }, index) => (
            <div key={index}>
              <Card className="mb-2">
                <CardImg
                  top
                  width="100%"
                  src={images.downsized_medium.url}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Title: {title}</CardTitle>
                  <CardSubtitle>Rating: {rating.toUpperCase()}</CardSubtitle>
                  <CardText>
                    Last Trending On:{" "}
                    {trending_datetime === "1970-01-01 00:00:00" ? (
                      <i>Never Trending</i>
                    ) : (
                      new Date(trending_datetime).toDateString()
                    )}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          )
        )}
    </div>
  );
};

export default Giphy;
