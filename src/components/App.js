import React, { Component, Children, cloneElement } from 'react';
import { Link } from 'react-router';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {

    /*
     *  This block transfers state, props and functions
     *  to children passed down from React Router.
     */

    let children = Children.map(this.props.children, child => {
      return cloneElement(child, {
        ...child.props,
        ...this.props,
        ...this.state,
        handleClick: this.handleClick,
      })
    })

    return (
      <div>
        <h1>Welcome to your app!</h1>

        <nav>
          <Link to="/">Counter</Link>
          <Link to="/about">About</Link>
        </nav>

        { children }

      </div>
    );
  }

}

export default App;
