import React from 'react';

class RefClasse extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    handleClick = () => {
        this.myRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <button onClick={this.handleClick}>Focus input</button>
            </div>
        );
    }
}
export default RefClasse;