import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import About from 'pages/About'
import logo from 'assets/logo.svg'
import './App.css'

// REDUX
// Import store and wrap app with redux provider
// import store from './store'

//  PROCESO, PASOS:
// 1. Definición: (dibujando, Adobe XD ...) -> Home con resumen de preguntas / Cards de preguntas / Formulario añadir preguntas /
// 2. Tareas:
// -> 2.1. **** Añadir datos fake ***
// 2.1. Home: ruta y componente
// 2.2. Card: ruta y componente
// 2.3. Add Question: ruta y componente

function App() {

  const [allQuestions, setQuestions] = useState(
    [
      {
        question: "Qué significa !important",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        type: "Html"
      },
      {
        question: "Qué significa ES6?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        type: "Javascript"
      },
      {
        question: "Qué son los props?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        type: "React"
      }
    ]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Starter Kit</h2>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
