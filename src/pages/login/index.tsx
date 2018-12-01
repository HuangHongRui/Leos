import * as React from 'react';
import './index.scss'

class Login extends React.Component {
  render() {
    return (
      <div className="login-wrap content">
        <div className='main'>

          <div className="form-wrap">
            <form action="" acceptCharset="UTF-8" method="POST">

              <div className="form-fields">
                <fieldset>
                  <label htmlFor="account">Username or Email:</label>
                  <input type="text" name='account' tabIndex={1} />
                </fieldset>

                <fieldset>
                  <label htmlFor="password">
                    Password:
                <a href="">Forgot?</a>
                  </label>
                  <input type="password" name='password' tabIndex={2} />
                </fieldset>
              </div>

              <input type="submit" className="sign-in-btn" value="Sign In" tabIndex={3} />

            </form>
            <p>
              Not a number?
              <a href="">Sign up now</a>
            </p>
          </div>

        </div>
      </div>
    )
  }
}

export default Login;