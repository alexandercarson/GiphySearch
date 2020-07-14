import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { searchGiphys } from "../services/giphyService";
import Giphys from "./Giphys";
import { Container, Col, Row, Button, Input } from "reactstrap";
import Swal from "sweetalert2";

const Search = () => {
  const [giphys, setGiphys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchSuccess = (result) => {
    setIsLoading(false);
    if (result.data.length < 1) {
      noResults();
    } else {
      setGiphys(result.data);
    }
  };

  const noResults = () => {
    Swal.fire({
      title: "There's been an error!",
      text:
        "Sorry, there are no results to display. Please adjust your search term!",
      icon: "info",
      confirmButtonText: "Okay, Search again!",
    });
  };

  const onSearchError = (error) => {
    Swal.fire({
      title: "Sorry, we have an error!",
      text: error,
      icon: "error",
      confirmButtonText: "Close Warning",
    });
  };

  return (
    <Container>
      <div id="formik-giph-search" className="mb-4">
        <Formik
          initialValues={{ query: "" }}
          onSubmit={(values, { setSubmitting }) => {
            searchGiphys(values.query)
              .then(setIsLoading(true))
              .then(onSearchSuccess)
              .then(setSubmitting(false))
              .catch(onSearchError);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Row className="justify-content-center mb-2">
                <Col md={8}>
                  <Field
                    component={Input}
                    type="text"
                    name="query"
                    id="giph-search-query"
                    placeholder="Search For You're favorite Giphys"
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Button
                  type="submit"
                  className="btn btn-primary "
                  disabled={isSubmitting}
                >
                  Submit Search
                </Button>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
      <div id="giph-results">
        <Row>
          <Col>
            {isLoading === true ? (
              <img src={require("../assetts/loading2.gif")} alt="Loading..." />
            ) : (
              <Giphys giphyResults={giphys} />
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Search;
