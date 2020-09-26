import jwt_decode from "jwt-decode";

export const SET_TOKEN = "notekeeper/authentication/SET_TOKEN";
export const TOKEN_KEY = "notekeeper/authentication/TOKEN";
export const ID_KEY = "notekeeper/authentication/ID_KEY";

export const setToken = (payload) => ({
    type: SET_TOKEN,
    payload,
});

export const login = (email, password) => async (dispatch) => {
    const response = await fetch(`http://localhost:5000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
        const res = await response.json();
        window.localStorage.setItem(TOKEN_KEY, res.token);
        window.localStorage.setItem(ID_KEY, res.id);

        const decodedUser = jwt_decode(res.token);
        dispatch(setToken(decodedUser));
    } else {
        console.log("could not log in user, response not ok")
    }
};
