import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";
import { fetchSignIn } from "src/request";
import { action_isLogin } from "src/redux/action";
import Tip from "src/component/Tip";
import { onTipHandle } from "src/utils/Methods";

class SignIn extends React.Component <PropsTypes, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      tipText: null
    };
  }

  onInput = (key, val) => {
    this.setState({
      [key]: val,
    });
  };

  signin = async () => {
    let login = await fetchSignIn(this.state);
    onTipHandle.call(this, login.message, () => {
      if (login && login.status) {
        this.props.action_isLogin();
      }
    });
  };

  onLogin = async() => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=0dd096fba4d58d671f24&scope=user:email';
  };

  render() {

    let {tipText} = this.state;

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

            <div className="social-sign-in">
              <i className="author-git" onClick={this.onLogin}/>
            </div>
          </div>
        </div>

        <Tip text={tipText}/>
      </div>
    );

  }
}

const mapDispatchToProps = (dispatch: any) => ({
  action_isLogin: () => dispatch(action_isLogin())
});

export default connect(null, mapDispatchToProps)(SignIn as any);

interface PropsTypes {
  action_isLogin: Function;
  tipText?: string;
}

interface StateType {
  tipText?: string;
}
