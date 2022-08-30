// Decodes a token and retrieves user's information out of it
import decode from "jwt-decode";

// Creates a new class to instantiate for a user
class AuthService {

    // Gets user data from JSON web token by decoding it
    getProfile() {
        return decode(this.getToken());
    }

    // Returns true/false if token exists
    // (Does not verify if it's expired yet)
    loggedIn() {
        const token = this.getToken();
        return token ? true : false;
    }

    // Retrieves the user token from localStorage
    getToken() {
        return localStorage.getItem("id_token");
    }

    // Saves the user token to localStorage and reloads the app for logged-in status to take effect
    login(idToken) {
        localStorage.setItem("id_token", idToken);
        window.location.assign("/");
    }


    // Clears user token and profile data from localStorage. Then, reloads the page to reset the state of the application
    logout() {
        localStorage.removeItem("id_token");
        window.location.reload();
    }
}

export default new AuthService();