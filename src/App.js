import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { getPost } from './Action/PostAction'

function App(props) {
  useEffect(() => {
    props.dispatch(getPost());
  }, [])
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
};

const stateToProps = (state) => {
  return { post: state.post };
}

export default connect(stateToProps)(App);
