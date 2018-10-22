import React, { Component } from "react";
import profile from "../../assets/profile_img.png";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={profile} alt="profile" className="profile-image" />
            </div>
        );
    }
}

export default Header;