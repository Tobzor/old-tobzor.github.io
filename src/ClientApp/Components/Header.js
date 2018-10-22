import React, { Component } from "react";

// import {profile} from "../../assets/profile_img.png"

const publicurl = process.env.PUBLIC_URL;
class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={""} alt="profile" className="profile-image" />
            </div>
        );
    }
}

export default Header;