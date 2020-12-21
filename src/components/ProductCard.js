import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",

    margin: "20px auto",
    width: "300px",
  },
}));

function ProductCard() {
  const classes = useStyles();
  const [{ products }, dispatch] = useStateValue();

  return (
    <div>
      {products.map((product) => (
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img
              src={product.image}
              style={{ height: "20vw", objectFit: "contain" }}
              alt="product image"
            />
            <h3> {product.title}</h3>
            <p>₹{product.price}</p>
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "#3f51b5" }}
            >
              View more
            </Link>
          </Paper>
        </Grid>
      ))}
    </div>
  );
}

export default ProductCard;
