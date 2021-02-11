import React, { Fragment } from 'react'

const Questions = (props) => {
  console.log('Props in questions!', props);
  return (
    <Fragment>
      <h1>Questions </h1>
      <p>
        Pregunta: {props.questions[0].question}<br />
      </p>

    </Fragment>
  )
}

export default Questions
