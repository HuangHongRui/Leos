var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { List, Card } from 'antd';
import styled from 'styled-components';
var Wrap = styled(List)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
var ListComponent = /** @class */ (function (_super) {
    __extends(ListComponent, _super);
    function ListComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListComponent.prototype.render = function () {
        var data = [
            {
                title: 'Title 1'
            },
            {
                title: 'Title 2'
            },
            {
                title: 'Title 3'
            },
            {
                title: 'Title 4'
            },
            {
                title: 'Title 5'
            },
            {
                title: 'Title 6'
            }
        ];
        return (React.createElement(Wrap, { grid: { gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }, dataSource: data, 
            // tslint:disable-next-line
            renderItem: function (item) { return (React.createElement(List.Item, null,
                React.createElement(Card, { title: item.title }, "Card content"))); } }));
    };
    return ListComponent;
}(React.Component));
export default ListComponent;
var templateObject_1;
//# sourceMappingURL=index.js.map