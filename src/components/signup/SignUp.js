import "./SignUp.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const SignUp = () => {
  return (
    <Fragment>
      <div className="form_box-sign">
        <div className="sign-box">
          <div className="img-sign"></div>

          <div className="signup-form">
            <form action="#">
              <div className="logo">
                <h2>TBR Agency</h2>
              </div>

              <div className="username-sign">
                <div className="form-input-sign">
                  <input type="text" placeholder="First name" required />
                </div>

                <div className="form-input-sign">
                  <input type="text" placeholder="Last name" required />
                </div>
              </div>

              <div className="form-input-sign">
                <input type="email" placeholder="Email address" required />
              </div>

              <div className="form-input-sign">
                <input type="text" placeholder="Phone number" required />
              </div>

              <div className="form-input-sign">
                <input type="password" placeholder="Password" required />
              </div>

              <div className="form-input-sign">
                <input
                  type="password"
                  placeholder="confirm password"
                  required
                />
              </div>

              <div className="form-input">
                <button type="submit">Sign up</button>
                <div className="create">
                  <span> Already have account ? </span>
                  <span>
                    <Link to="/SignIn"> Login now </Link>{" "}
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

export default SignUp;
