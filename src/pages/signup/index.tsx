import * as React from "react";
import { withRouter } from 'react-router';
import { fetchSendEmail, fetchSignUp, fetchVerifyCode, fetchVerifyEmail } from "../../request";
import { onTipHandle } from "src/utils/Methods";
import "./index.scss";
import Tip from "src/component/Tip";

class SignUp extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      nickname: null,
      email: null,
      password: null,
      vCode: null,
      tipText: null,
    };
  }

  /** 发送验证码 **/
  sendCode = async () => {
    let {email} = this.state;
    if (!email) {
      onTipHandle.call(this, "邮箱不能为空");
      return;
    }

    let res = await fetchVerifyEmail(email);
    if (res.status === 0) {
      fetchSendEmail(email)
        .then(e => {
          onTipHandle.call(this, e.message);
        });
      return;
    }
    onTipHandle.call(this, res.message);
  };

  /** 注册提交 **/
  signup = async () => {
    for (let key in this.state) {
      if (!this.state[key] && key !== "tipText") {
        onTipHandle.call(this, "信息不全，无法提交");
        return;
      }
    }
    const {email, vCode} = this.state;
    let res = await fetchVerifyCode(email, vCode);
    if (!res.status) {
      onTipHandle.call(this, res.message);
      return;
    }
    let result = await fetchSignUp(this.state);
    onTipHandle.call(this, result.message, () => {
      if (result.status) {
        this.props.history.push('/signin')
      }
    });
  };

  /** 表单输入 **/
  onInput = (key, val) => {
    this.setState({
      [key]: val
    });
  };

  render() {
    const {tipText} = this.state;

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

        <Tip text={tipText}/>
      </div>
    );
  }
}

interface PropsType {
  history: any
}

interface StateType {
  nickname?: string;
  email?: string;
  password?: string;
  vCode?: string | number;
  tipText?: string;
}

export default withRouter(SignUp);