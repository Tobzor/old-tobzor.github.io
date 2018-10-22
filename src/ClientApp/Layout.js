import React, { Component } from "react";
import Header from "./Components/Header";
import CardGrid from "./Components/CardGrid";
import Footer from "./Components/Footer";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="main-content">
                    <h1>My Projects</h1>
                    <CardGrid />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;