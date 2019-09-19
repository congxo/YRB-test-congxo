import React from 'react';
import Header from './component/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import MainTeams from './component/MainTeams';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="pageImg">
          <div className="container">
            <Header />
            <div className="clearFloat" />
            <div className="main">
              <div className="topTable">
                <p><i>LỊCH PHÁT SÓNG TRỰC TIẾP</i></p>
              </div>
              <BrowserRouter>
                <Switch>
                  <Route path="/" component={MainTeams} exact />
                  <Route path="/2" component={MainTeams} exact />
                  <Route path="/6" component={MainTeams} exact />
                  <Route path="/132" component={MainTeams} exact />
                  <Route path="/10" component={MainTeams} exact />
                </Switch>
              </BrowserRouter>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
