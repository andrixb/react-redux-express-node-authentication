import React from 'react';
import '../../polyfill/reset.scss';
import './App.style.scss';

class App extends React.Component {
    render() {
        return (
            <div className="app__container"> React simple starter {this.props.hello} </div>
        );
    }
}

App.propTypes = {
    hello: React.PropTypes.string,
};

export default App;
