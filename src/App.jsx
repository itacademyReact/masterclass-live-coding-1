import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';

import Home from 'pages/Home'
import Questions from 'pages/Questions'
import './App.css'

// Fake data from json
//import jsonData from 'data/questions.json'

function App() {

  const [allQuestions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/questions');
      setQuestions(result.data);
    };
    fetchData();
  }, []);

  const countQuestions = (filter) => {
    console.log("allQuestions!!", allQuestions);
    return allQuestions.filter(question => filter ? question.type === filter : question).length;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home
                total={countQuestions()}
                html={countQuestions('Html')}
                javascript={countQuestions('Javascript')}
                react={countQuestions('React')}></Home>
            )}
            />
            <Route path="/questions" render={(props) => (
              <Questions
                questions={allQuestions}></Questions>
            )}
            />
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
