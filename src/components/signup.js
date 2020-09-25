import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }
    render() {
        return (
            <div>
                <form action="" method="get" style={{ display: "table" }}>
                    <div style={{ display: "table-row" }}>
                        <label for="firstName">First Name: </label>
                        <input type="firstName" name="firstName" id="firstName" required />
                    </div>
                    <div style={{ display: "table-row" }}>
                        <label for="lastName">Last Name: </label>
                        <input type="lastName" name="lastName" id="lastName" />
                    </div>
                    <div style={{ display: "table-row" }}>
                        <label for="email">Email: </label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div style={{ display: "table-row" }}>
                        <label for="password">Password: </label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div style={{ display: "table-row" }}>
                        <input type="submit" value="Log in" onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;