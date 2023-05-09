import React from 'react';

class RefClasse extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    state = {
        myArray: ['hello', 'salut']
    }

    handleClick = () => {
        this.myRef.current.focus();
    }





    render() {
        const { myArray } = this.state;
        const keys = Object.entries(myArray);
        console.log(keys[1][1])
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <button onClick={this.handleClick}>Focus input</button>
            </div>
        );
    }
}
export default RefClasse;