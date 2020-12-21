import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import axios from "../axios-reviews";
import { Button, Container, Paper, TextField } from "@material-ui/core";

function ViewProduct() {
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  let { productId } = useParams();
  const [{ products }, dispatch] = useStateValue();
  let product = products.find((prodt) => prodt.id == productId);
  console.log(product);

  const submitHandler = (e) => {
    e.preventDefault();
    setReviews((prevState) => [...prevState, comment]);
    setComment("");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginRight: "130px",
          }}
        >
          <img src={product.image} alt="product image" />
          <h2>{product.title}</h2>
          <p>₹{product.price}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ marginTop: "70px" }}>
            <TextField
              value={comment}
              placeholder="Enter review"
              onChange={(e) => setComment(e.target.value)}
              style={{ marginRight: "20px" }}
            />
            {console.log("reviews:", reviews)}
            <Button color="primary" variant="contained" onClick={submitHandler}>
              submit
            </Button>
          </div>
          <h5>Reviews:</h5>
          {reviews.reverse().map((review, i) => (
            <Paper style={{ padding: "10px", marginTop: "20px" }} key={i}>
              - {review}
            </Paper>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
