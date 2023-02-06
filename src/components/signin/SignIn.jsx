import "./SignIn.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const SignIn = () => {
  return (
    <Fragment>
      <div className="form_box">
        <div className="login-box">
          <div className="img"></div>

          <div className="login-form">
            <form action="#">
              <div className="logo">
                <h2>TBR Agency</h2>
              </div>

              <div className="form-input">
                <input type="email" placeholder="Email address" required />
              </div>

              <div className="form-input">
                <input type="password" placeholder="Password" required />
              </div>

              <div className="sub_capt">
                <div className="check">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div className="forgot">
                  <span>
                    <Link to="/forgetpassword">forgot password</Link>
                  </span>
                </div>
              </div>

              <div className="form-input">
                <button type="submit">Login</button>
                <div className="create">
                  <span> Don't have an account? </span>
                  <span>
                    <Link to="/Signup"> Create one now </Link>{" "}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
