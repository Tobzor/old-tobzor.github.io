import React, { Component } from "react";

const publicurl = process.env.PUBLIC_URL;
class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={publicurl + "./assets/profile_img.png"} alt="profile" className="profile-image" />
            </div>
        );
    }
}

export default Header;