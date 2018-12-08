import * as React from "react";
import { Link } from 'react-router-dom';
import "./index.scss";

class SignIn extends React.Component {

  render() {
    return (
      <div className="signin-wrap content">
        <div className='main'>

          <div className="form-wrap">
            <form action="" acceptCharset="UTF-8" method="POST">

              <div className="form-fields">
                <fieldset>
                  <label htmlFor="email">Username or Email:</label>
                  <input type="email" name='email' tabIndex={1}/>
                </fieldset>

                <fieldset>
                  <label htmlFor="password">
                    Password:
                    <a href="">Forgot?</a>
                  </label>
                  <input type="password" name='password' tabIndex={2}/>
                </fieldset>
              </div>

              <input type="submit" className="sign-in-btn" value="Sign In" tabIndex={3}/>

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