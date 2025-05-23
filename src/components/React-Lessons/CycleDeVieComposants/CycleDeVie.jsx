import React, { Component } from 'react';

class CycleDeVie extends Component {
    constructor(props) {
        super(props);
        console.log('Constructeur appelé');
        this.state = { count: 0 };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps appelé');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate appelé');
        return nextState.count !== this.state.count;
    }

    componentDidUpdate() {
        console.log('Composant mis à jour');
        console.log(document.title);
        document.title = `Compteur : ${this.state.count}`;
        console.log(document.title);

    }

    componentWillUnmount() {
        console.log('Composant démonté');
    }

    componentDidMount() {
        console.log('Composant monté');
        document.title = `Compteur : ${this.state.count}`;
    }

    handleClick = () => {
        console.log('handleClick pré-activé');
        console.log(this.state.count);

        this.setState((prevState) => ({
            count: prevState.count + 1

        }));
        console.log('handleClick activé');
    };


    render() {
        console.log('render appelé');
        return (
            <div>
                <h1>Mon application React</h1>
                <p>Compteur : {this.state.count}</p>
                <button onClick={this.handleClick}>Incrémenter</button>
            </div>
        );
    }
}


export default CycleDeVie;
