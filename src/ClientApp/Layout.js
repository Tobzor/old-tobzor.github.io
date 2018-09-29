import React, { Component } from "react";
import Header from "./Components/Header";
import CardGrid from "./Components/CardGrid";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <CardGrid />
            </React.Fragment>
        );
    }
}

export default Layout;