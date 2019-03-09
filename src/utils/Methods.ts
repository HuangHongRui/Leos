let judge = {
  email: "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
};

/** 触发提示组件方法 **/
function onTipHandle(tipText, callfun) {

  this.setState({
    tipText: tipText
  }, () => {
    setTimeout(() => {
      this.setState({
        tipText: null
      });
      callfun && callfun()
    }, 3000);
  });

}

export {
  judge,
  onTipHandle
};