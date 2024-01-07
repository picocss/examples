import React from "react";
import mainStyles from "./main.scss";

const App = () => {
  return (
    <>
      <hgroup>
        <h1>Sign in</h1>
        <p>A minimalist React example with Pico CSS</p>
      </hgroup>
      <form>
        <input
          type="text"
          name="login"
          placeholder="Login"
          aria-label="Login"
          autoComplete="nickname"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          autoComplete="current-password"
          required
        />
        <fieldset>
          <label htmlFor="remember">
            <input type="checkbox" role="switch" id="remember" name="remember" />
            Remember me
          </label>
        </fieldset>
        <button type="submit" className="contrast">
          Login
        </button>
      </form>
    </>
  );
};
export default App;
