class MyClass {
  constructor() {
    console.log("initiate");
  }

  add(a1, a2) {
    var res;
    res = a1 + a2;
    return res;
  }

  sayhello(str) {
    console.log(str);
  }

  callanotherfunc(a1, a2) {
    this.sayhello("hello world");
    var res = this.add(a1, a2);
    return res;
  }

  callthecallback(data, callback) {
    if (data === 1) {
      callback();
    }
  }

  testpromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(3), 4000);
    }).then(function (result) {
      return result * 2;
    });
  }
}

module.exports = MyClass;
