"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
const react_1 = require("react");
const antd_1 = require("antd");
var Rx = require('rxjs/Rx');
// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, filter, switchMap } from 'rxjs/operators';
/**
 *  Test Page.
 */
class Rxjs extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            number: 60
        };
        this.observable = () => {
            var observable = Rx.Observable.create(function (observer) {
                observer.next(1);
                observer.next(2);
                observer.next(3);
                setTimeout(() => {
                    observer.next(4);
                    observer.complete();
                }, 1000);
            });
            console.log('just before subscribe');
            observable.subscribe({
                next: (x) => console.log('got value ' + x),
                error: (err) => console.error('something wrong occurred: ' + err),
                complete: () => console.log('done')
            });
            console.log('just after subscribe');
            ;
        };
        this.rang = () => {
            let numbers = Rx.Observable.range(1, 10);
            numbers.subscribe((x) => console.log(x));
        };
        this.timer = () => {
            Rx.Observable
                .timer(0, 1000)
                .map((i) => this.state.number - i)
                .subscribe((i) => console.log(i));
        };
        this.switchMap = () => {
            let clicks = Rx.Observable.fromEvent(document, 'click');
            let result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
            result.subscribe((x) => console.log(x));
        };
        this.takeUntil = () => {
            let interval = Rx.Observable.interval(1000);
            let clicks = Rx.Observable.fromEvent(document, 'click');
            let result = interval.takeUntil(clicks);
            result.subscribe((x) => console.log(x));
        };
    }
    componentDidMount() {
        /** Purity */
        var purity = document.querySelector('.purity');
        Rx.Observable.fromEvent(purity, 'click')
            .scan((count) => count + 1, 0)
            .subscribe((count) => console.log(`Clicked ${count} times`));
        /**
         * 控制间接时间点击
         * 其他流程控制操作符有 filter、delay、debounceTime、take、takeUntil、distinct、distinctUntilChanged 等等。
         */
        var flow = document.querySelector('.flow');
        Rx.Observable.fromEvent(flow, 'click')
            .throttleTime(2000) //间隔时间
            .scan((count) => count + 1, 0)
            .subscribe((count) => console.log(`Clicked ${count} times`));
        var value = document.querySelector('.value');
        Rx.Observable.fromEvent(value, 'click')
            .throttleTime(1000)
            .map((event) => event.clientX)
            .scan((count, clientX) => count + clientX, 0)
            .subscribe((count) => console.log(count));
    }
    render() {
        const { Header, Footer, Sider, Content } = antd_1.Layout;
        return (react_1.default.createElement(antd_1.Layout, null,
            react_1.default.createElement(Header, null, "Header"),
            react_1.default.createElement(antd_1.Layout, { className: "content" },
                react_1.default.createElement(Content, null,
                    react_1.default.createElement(antd_1.Button, { className: "purity" }, "Purity"),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(antd_1.Button, { className: "flow" }, "Flow"),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(antd_1.Button, { className: "value" }, "Value"),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(antd_1.Button, { className: "observable", onClick: this.observable }, "Observable"),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(antd_1.Button, { className: "rang", onClick: this.rang }, "Rang"),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(antd_1.Button, { className: "timer", onClick: this.timer }, "Timer"),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(antd_1.Button, { className: "switchMap", onClick: this.switchMap }, "SwitchMap"),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(antd_1.Button, { onClick: this.takeUntil }, "TakeUntil"),
                    react_1.default.createElement("br", null)),
                react_1.default.createElement(Sider, null, "Sider")),
            react_1.default.createElement(Footer, null, "Footer")));
    }
}
exports.default = Rxjs;
