import React, { Fragment } from 'react'

const Home = (props) => {
  return (
    <Fragment>
      <h1>Home</h1>
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
