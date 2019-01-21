import * as React from "react";
import { fetchSendEmail, fetchSignUp, fetchVerifyCode, fetchVerifyEmail } from "../../request";
import "./index.scss";

class SignUp extends React.Component<{}, any> {

  sendCode = () => {
    async function verifyEmail() {
      let res = await fetchVerifyEmail(this.state.email);
      if (res.data.state === 0) {
        fetchSendEmail(this.state.email);
      }
      //  这里如果是已注册，需要提示。
    }

    verifyEmail.bind(this)();
  };

  signup = () => {
    async function signup_sub() {
      let res = await fetchVerifyCode(this.state.email, this.state.vCode);
      console.log("☞☞☞ 9527 index 22",1);
      if (!res.data.state) {return res.data.state}
      console.log("☞☞☞ 9527 index 23",2);
      fetchSignUp(this.state);
      console.log("☞☞☞ 9527 index 26",3);
    }
    signup_sub.bind(this)()
  };

  onInput = (key, val) => {
    this.setState({
      [key]: val
    });
  };

  render() {
    return (
      <div className="signup-wrap content">
        <div className='main'>

          <div className="form-wrap">
            <form action="" acceptCharset="UTF-8" method="POST" target="iframe_none">

              <div className="form-fields">
                <fieldset>
                  <label htmlFor="account">Name:</label>
                  <input
                    type="text"
                    name='account'
                    tabIndex={1}
                    onChange={e => this.onInput("nickname", e.target.value)}
                  />
                </fieldset>

                <fieldset>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name='email'
                    tabIndex={2}
                    onChange={e => this.onInput("email", e.target.value)}
                  />
                </fieldset>

                <fieldset>
                  <label htmlFor="password">
                    Password:
                  </label>
                  <input
                    type="password"
                    name='password'
                    tabIndex={3}
                    onChange={e => this.onInput("password", e.target.value)}
                  />
                </fieldset>

                <fieldset>
                  <label htmlFor="v-code">
                    Email Code:
                  </label>
                  <input
                    type="text"
                    name='v-code'
                    tabIndex={4}
                    className='v-code'
                    onChange={e => this.onInput("vCode", e.target.value)}
                  />
                  <button type='button' className='sign-up-btn v-code' onClick={this.sendCode} tabIndex={5}>Send Code</button>
                </fieldset>
              </div>

              <input
                type="button"
                className="sign-up-btn"
                value="Create Account"
                tabIndex={6}
                onClick={this.signup}
              />
              <iframe id="iframe_none" name="iframe_none"/>
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