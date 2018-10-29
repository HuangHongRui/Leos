// tslint:disable
import * as React from 'react';
import { Layout, Button } from 'antd';

var Rx = require('rxjs/Rx');
// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, filter, switchMap } from 'rxjs/operators';

/**
 *  Test Page.
 */
export default class Rxjs extends React.PureComponent {
  state = {
    number: 60
  };

  componentDidMount() {
    /** Purity */
    var purity = document.querySelector('.purity');
    Rx.Observable.fromEvent(purity, 'click')
      .scan((count: any) => count + 1, 0)
      .subscribe((count: any) => console.log(`Clicked ${count} times`));

    /**
     * 控制间接时间点击
     * 其他流程控制操作符有 filter、delay、debounceTime、take、takeUntil、distinct、distinctUntilChanged 等等。
     */
    var flow = document.querySelector('.flow');
    Rx.Observable.fromEvent(flow, 'click')
      .throttleTime(2000) //间隔时间
      .scan((count: any) => count + 1, 0)
      .subscribe((count: any) => console.log(`Clicked ${count} times`));

    var value = document.querySelector('.value');
    Rx.Observable.fromEvent(value, 'click')
      .throttleTime(1000)
      .map((event: any) => event.clientX)
      .scan((count: any, clientX: any) => count + clientX, 0)
      .subscribe((count: any) => console.log(count));

  }

  observable = () => {
    var observable = Rx.Observable.create(function (observer: any) {
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
      next: (x: any) => console.log('got value ' + x),
      error: (err: any) => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done')
    });
    console.log('just after subscribe');
    ;
  };

  rang = () => {
    let numbers = Rx.Observable.range(1, 10);
    numbers.subscribe((x: any) => console.log(x));
  }

  timer = () => {
    Rx.Observable
      .timer(0, 1000)
      .map((i: any) => this.state.number - i)
      .subscribe((i: any) => console.log(i));
  }

  switchMap = () => {
    let clicks = Rx.Observable.fromEvent(document, 'click');
    let result = clicks.switchMap((ev: any) => Rx.Observable.interval(1000));
    result.subscribe((x: any) => console.log(x));
  }

  takeUntil = () => {
    let interval = Rx.Observable.interval(1000);
    let clicks = Rx.Observable.fromEvent(document, 'click');
    let result = interval.takeUntil(clicks);
    result.subscribe((x: any) => console.log(x));
  }

  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <Layout>
        <Header>Header</Header>
        <Layout className="content">
          <Content>

            <Button className="purity">Purity</Button>
            <br/>
            <Button className="flow">Flow</Button>
            <br/>
            <Button className="value">Value</Button>
            <br/>
            <Button className="observable" onClick={this.observable}>Observable</Button>
            <br/>
            <Button className="rang" onClick={this.rang}>Rang</Button>
            <br/>
            <Button className="timer" onClick={this.timer}>Timer</Button>
            <br/>
            <Button className="switchMap" onClick={this.switchMap}>SwitchMap</Button>
            <br/>
            <Button onClick={this.takeUntil}>TakeUntil</Button>
            <br/>

          </Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
