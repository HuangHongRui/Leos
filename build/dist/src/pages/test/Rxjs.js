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
// tslint:disable
import React from 'react';
import { Layout, Button } from 'antd';
var Rx = require('rxjs/Rx');
// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, filter, switchMap } from 'rxjs/operators';
/**
 *  Test Page.
 */
var Rxjs = /** @class */ (function (_super) {
    __extends(Rxjs, _super);
    function Rxjs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            number: 60
        };
        _this.observable = function () {
            var observable = Rx.Observable.create(function (observer) {
                observer.next(1);
                observer.next(2);
                observer.next(3);
                setTimeout(function () {
                    observer.next(4);
                    observer.complete();
                }, 1000);
            });
            console.log('just before subscribe');
            observable.subscribe({
                next: function (x) { return console.log('got value ' + x); },
                error: function (err) { return console.error('something wrong occurred: ' + err); },
                complete: function () { return console.log('done'); }
            });
            console.log('just after subscribe');
            ;
        };
        _this.rang = function () {
            var numbers = Rx.Observable.range(1, 10);
            numbers.subscribe(function (x) { return console.log(x); });
        };
        _this.timer = function () {
            Rx.Observable
                .timer(0, 1000)
                .map(function (i) { return _this.state.number - i; })
                .subscribe(function (i) { return console.log(i); });
        };
        _this.switchMap = function () {
            var clicks = Rx.Observable.fromEvent(document, 'click');
            var result = clicks.switchMap(function (ev) { return Rx.Observable.interval(1000); });
            result.subscribe(function (x) { return console.log(x); });
        };
        _this.takeUntil = function () {
            var interval = Rx.Observable.interval(1000);
            var clicks = Rx.Observable.fromEvent(document, 'click');
            var result = interval.takeUntil(clicks);
            result.subscribe(function (x) { return console.log(x); });
        };
        return _this;
    }
    Rxjs.prototype.componentDidMount = function () {
        /** Purity */
        var purity = document.querySelector('.purity');
        Rx.Observable.fromEvent(purity, 'click')
            .scan(function (count) { return count + 1; }, 0)
            .subscribe(function (count) { return console.log("Clicked " + count + " times"); });
        /**
         * 控制间接时间点击
         * 其他流程控制操作符有 filter、delay、debounceTime、take、takeUntil、distinct、distinctUntilChanged 等等。
         */
        var flow = document.querySelector('.flow');
        Rx.Observable.fromEvent(flow, 'click')
            .throttleTime(2000) //间隔时间
            .scan(function (count) { return count + 1; }, 0)
            .subscribe(function (count) { return console.log("Clicked " + count + " times"); });
        var value = document.querySelector('.value');
        Rx.Observable.fromEvent(value, 'click')
            .throttleTime(1000)
            .map(function (event) { return event.clientX; })
            .scan(function (count, clientX) { return count + clientX; }, 0)
            .subscribe(function (count) { return console.log(count); });
    };
    Rxjs.prototype.render = function () {
        var Header = Layout.Header, Footer = Layout.Footer, Sider = Layout.Sider, Content = Layout.Content;
        return (React.createElement(Layout, null,
            React.createElement(Header, null, "Header"),
            React.createElement(Layout, { className: "content" },
                React.createElement(Content, null,
                    React.createElement(Button, { className: "purity" }, "Purity"),
                    React.createElement("br", null),
                    React.createElement(Button, { className: "flow" }, "Flow"),
                    React.createElement("br", null),
                    React.createElement(Button, { className: "value" }, "Value"),
                    React.createElement("br", null),
                    React.createElement(Button, { className: "observable", onClick: this.observable }, "Observable"),
                    React.createElement("br", null),
                    React.createElement(Button, { className: "rang", onClick: this.rang }, "Rang"),
                    React.createElement("br", null),
                    React.createElement(Button, { className: "timer", onClick: this.timer }, "Timer"),
                    React.createElement("br", null),
                    React.createElement(Button, { className: "switchMap", onClick: this.switchMap }, "SwitchMap"),
                    React.createElement("br", null),
                    React.createElement(Button, { onClick: this.takeUntil }, "TakeUntil"),
                    React.createElement("br", null)),
                React.createElement(Sider, null, "Sider")),
            React.createElement(Footer, null, "Footer")));
    };
    return Rxjs;
}(React.PureComponent));
export default Rxjs;
//# sourceMappingURL=Rxjs.js.map