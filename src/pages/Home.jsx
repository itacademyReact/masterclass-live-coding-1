import React, { Fragment } from 'react'
import {
  Link
} from "react-router-dom";

const Home = (props) => {
  return (
    <Fragment>
      <h1>Home</h1>
      <Link to="/questions">Questions</Link>
      <p>
        Total: {props.total}<br />
        html: {props.html}<br />
        javascript: {props.javascript}<br />
        react: {props.react}<br />
      </p>

    </Fragment>
  )
}

export default Home
