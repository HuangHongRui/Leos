import * as React from "react";
import "./index.scss";

class SignUp extends React.Component {

  sendCode = () => {
    console.log("☞☞☞ 9527 index 7", 'Cool');
  };

  render() {
    return (
      <div className="signup-wrap content">
        <div className='main'>

          <div className="form-wrap">
            <form action="" acceptCharset="UTF-8" method="POST">

              <div className="form-fields">
                <fieldset>
                  <label htmlFor="account">Name:</label>
                  <input type="text" name='account' tabIndex={1}/>
                </fieldset>

                <fieldset>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name='email' tabIndex={2}/>
                </fieldset>

                <fieldset>
                  <label htmlFor="password">
                    Password:
                  </label>
                  <input type="password" name='password' tabIndex={3}/>
                </fieldset>

                <fieldset>
                  <label htmlFor="code">
                    Email Code:
                  </label>
                  <input type="text" name='code' tabIndex={4} className='code'/>
                  <button type='button' className='sign-up-btn code' onClick={this.sendCode} tabIndex={5}>Send Code</button>
                </fieldset>
              </div>

              <input type="submit" className="sign-up-btn" value="Create Account" tabIndex={6}/>
            </form>
            <p>
              Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default SignUp;