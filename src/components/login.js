import React from 'react';
// import { Redirect } from "react-router-dom";
import { login } from "../actions/auth_actions";

class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            firstName: 'Demo',
            lastName: 'User',
            email: 'demo@email.com',
            password: 'demo',
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        login(this.state);
    };
    setEmail = (email) => {
        this.email = email;
    }
    setPassword = (password) => {
        this.password = password;
    }
    updateEmail = (e) => {
        this.setEmail(e.target.value);
    };
    updatePassword = (e) => {
        this.setPassword(e.target.value);
    };
    // if(id) {
    //     return <Redirect to="/" />;
    // }
    render() {
        return (
            <div>
                <form action="" method="get" style={{display: "table"}}>
                    <div style={{ display: "table-row" }}>
                        <label for="email">Email: </label>
                        <input type="email" name="email" id="email" required autoFocus onChange={this.updateEmail}/>
                    </div>
                    <div style={{ display: "table-row" }}>
                        <label for="password">Password: </label>
                        <input type="password" name="password" id="password" required onChange={this.updatePassword}/>
                    </div>
                    <div style={{ display: "table-row" }}>
                        <input type="submit" value="Log in" onClick={this.handleSubmit}/>
                    </div>
                </form>
            </div>
        );
    }
};

export default Login;