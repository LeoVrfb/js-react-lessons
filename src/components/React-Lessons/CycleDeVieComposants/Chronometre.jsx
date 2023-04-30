import React, { Component } from 'react';

class Chronometre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            isRunning: false,
        };
    }

    componentDidMount() {
        // Démarrer le chronomètre
        this.startChronometer();
    }

    componentWillUnmount() {
        // Arrêter le chronomètre
        this.stopChronometer();
        console.log(this.state.seconds);
    }

    startChronometer() {
        // Démarre le chronomètre
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.setState({ isRunning: true });
    }

    stopChronometer() {
        // Arrête le chronomètre
        clearInterval(this.timerID);
        this.setState({ isRunning: false });
    }

    tick() {
        // Fonction appelée à chaque seconde
        this.setState((prevState) => ({
            seconds: prevState.seconds + 1
        }));
    }

    render() {
        const { seconds, isRunning } = this.state;
        return (
            <div>
                <h2>Chronomètre Class component</h2>
                <p>Temps écoulé: {seconds} secondes</p>
                <button onClick={() => {
                    if (isRunning) {
                        this.stopChronometer();
                    } else {
                        this.startChronometer();
                    }
                }}>{isRunning ? 'Arrêter' : 'Démarrer'}</button>
            </div>
        );
    }
}

export default Chronometre;
