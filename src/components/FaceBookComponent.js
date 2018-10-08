// EditComponent.js
/*global FB*/

import React, { Component } from 'react';
import FacebookLogin from "react-facebook-login";

export default class FaceBookComponent extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };

    componentClicked = () => console.log("clicked");

    logoutFacebook = () => {
        this.setState({
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        });
        FB.logout(function (response) {
            this.props.history.push('/')
        });
        console.log("logout")
    };

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div
                    style={{
                        width: "400px",
                        margin: "auto",
                        background: "#f4f4f4",
                        padding: "20px"
                    }}
                >
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                    <br />
                    <button onClick={this.logoutFacebook}>Facebook Logout</button>
                </div>
            );
        } else {
            fbContent = (
                <div>
                    <p>Login With facebook default Button</p>
                    <br />
                    <FacebookLogin
                        appId="3598748943327919674571449"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook}
                    />
                    <p>Login With facebook custom Button</p>
                    <br />
                    <FacebookLogin
                        appId="3598748943327919674571449"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        cssClass="loginBtn loginBtn--facebook"
                    />
                </div>
            );
        }

        return <div>{fbContent}</div>;
    }
}