// import * as React from 'react';
// import { connect } from 'react-redux';
// import Styled from 'styled-components';
// import Login from './Login';
// import Sign from './Sign';
// import Menu from 'src/component/Menu';
// import FootComponent from 'src/component/Foot';
//
// const Wrap = Styled.div`
//   display: grid;
//   height: 100vh;
//   grid-template-rows: auto 1fr auto;
// `;
//
// class UserComponent extends React.Component {
//   state = {
//     pathname: ''
//   };
//
//   static getDerivedStateFromProps(nextProps: StateTypes, prevState: StateTypes): void | {} {
//     if (nextProps !== prevState) {
//       return { pathname: nextProps.pathname };
//     }
//   }
//
//   /**
//    *  @parms: string
//    *  return: React.ReactNode | null
//    */
//   judgeRender = (parms: string): React.ReactNode | void => {
//     if (parms === 'login') {
//       return <Login/>;
//     } else if (parms === 'sign') {
//       return <Sign/>;
//     }
//   }
//
//   render() {
//     const pn = this.state.pathname;
//     return (
//       <Wrap>
//         <Menu/>
//         {this.judgeRender(pn) || null}
//         <FootComponent/>
//       </Wrap>
//     );
//   }
// }
//
// const mapStateToProps = (state: StateTypes): void | {} => {
//   const value = state.router.location.pathname.substr(1);
//   if (value) {
//     return { pathname: value };
//   }
// };
//
// // tslint:disable-next-line
// export default connect(mapStateToProps)(UserComponent as any);
//
// interface StateTypes {
//   pathname: string;
//   router: {
//     location: {
//       pathname: string;
//     }
//   };
// }
