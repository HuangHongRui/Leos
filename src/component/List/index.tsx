// import React from "react";
// import { List, Card } from "antd";
// import styled from "styled-components";
//
// const Wrap = styled(List)`
//   overflow: hidden;
// `;
// export default class ListComponent extends React.Component {
//   render() {
//     const data = [
//       {
//         title: "Title 1"
//       },
//       {
//         title: "Title 2"
//       },
//       {
//         title: "Title 3"
//       },
//       {
//         title: "Title 4"
//       },
//       {
//         title: "Title 5"
//       },
//       {
//         title: "Title 6"
//       }
//     ];
//     return (
//       <Wrap
//         grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}}
//         dataSource={data}
//         // tslint:disable-next-line
//         renderItem={(item: any) => (
//           <List.Item>
//             <Card title={item.title}>Card content</Card>
//           </List.Item>
//         )}
//       />
//     );
//   }
// }