import * as React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { fetchSignIn } from "../../request";

class SignIn extends React.Component {

  onInput = (key, val) => {
    this.setState({
      [key]: val
    });
  };

  signin = () => {
    fetchSignIn(this.state);
  };

  render() {
    return (
      <div className="signin-wrap content">
        <div className='main'>

          <div className="form-wrap">
            <form action="" acceptCharset="UTF-8" method="POST">

              <div className="form-fields">
                <fieldset>
                  <label htmlFor="email">Username or Email:</label>
                  <input
                    type="email"
                    name='email'
                    tabIndex={1}
                    onChange={e => this.onInput("email", e.target.value)}
                  />
                </fieldset>

                <fieldset>
                  <label htmlFor="password">
                    Password:
                    <a href="">Forgot?</a>
                  </label>
                  <input
                    type="password"
                    name='password'
                    tabIndex={2}
                    onChange={e => this.onInput("password", e.target.value)}
                  />
                </fieldset>
              </div>

              <input
                type="button"
                className="sign-in-btn"
                value="Sign In"
                tabIndex={3}
                onClick={this.signin}
              />

            </form>
            <p>
              Not a number?
              <Link to="signup">Sign up now</Link>
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default SignIn;