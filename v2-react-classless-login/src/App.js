import React, { useRef, useEffect } from "react";
import mainStyles from "./main.scss";

const App = () => {
  const mainRef = useRef();
  useEffect(() => {
    const setMinHeight = () => {
      if (!mainRef.current) return;
      mainRef.current.style.minHeight = `${window.innerHeight}px`;
    };
    setMinHeight();
    window.addEventListener("resize", setMinHeight);
    return () => {
      window.removeEventListener("resize", setMinHeight);
    };
  }, []);

  return (
    <main ref={mainRef}>
      <h1>Sign in</h1>
      <form>
        <input
          type="text"
          name="login"
          placeholder="Login"
          aria-label="Login"
          autoComplete="username"
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
        <button type="submit">
          Login
        </button>
      </form>
    </main>
  );
};
export default App;
