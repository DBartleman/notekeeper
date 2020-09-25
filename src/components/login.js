import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            firstName: 'Demo',
            lastName: 'User',
            email: 'demo@email.com',
            password: 'demo'
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        login(email, username, password);
    };
    updateEmail = (e) => {
        setEmail(e.target.value);
    };
    //   const updateUsername = (e) => {
    //       setUsername(e.target.value);
    //   };
    // TODO: change form to accept both username or password, or incorporate username somehow
    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if(id) {
        return <Redirect to="/" />;
    }
    render() {
        return (
            <div>
                <form action="" method="get" style={{display: "table"}}>
                    <div style={{ display: "table-row" }}>
                        <label for="email">Email: </label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div style={{ display: "table-row" }}>
                        <label for="password">Password: </label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div style={{ display: "table-row" }}>
                        <input type="submit" value="Log in" onClick={handleSubmit}/>
                    </div>
                </form>
            </div>
        );
    }
};

export default Login;