import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { title: 'Cabbage', id: 1 },
                { title: 'Garlic', id: 2 },
                { title: 'Apple', id: 3 },
                { title: 'Samsung', id: 4 },
            ]
        }
    }
    render() {
        return ( <
            div className = 'container border mt-5' >
            <
            h1 > Nguyen Ba Truong - Render - Event form < /h1> <
            hr / >
            <
            /div>
        )
    }
}