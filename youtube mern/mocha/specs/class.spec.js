var MyClass = require("../src/class.js");
var MyObj = new MyClass();
var chai = require("chai");
var expect = chai.expect;
var sinon = require("sinon");
const chaiaspromised = require("chai-as-promised");
chai.use(chaiaspromised)

describe.skip("test suit", function () {
  it("test add method", function () {
    expect(MyObj.add(1, 2)).to.be.equal(3);
  });

  it("spy the add method", function () {
    var spy = sinon.spy(MyObj, "add");
    var a1 = 10,
      a2 = 20;
    MyObj.callanotherfunc(a1, a2);
    // sinon.assert.calledOnce(spy)
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(a1, a2)).to.be.true;
  });

  it("test the callback method", function () {
    var callback = sinon.spy();
    MyObj.callthecallback(1, callback);
    expect(callback.calledOnce).to.be.true;
  });

  it("mock the hello method", function () {
    var mock = sinon.mock(MyObj);
    var expectation = mock.expects("sayhello");
    expectation.exactly(1);
    expectation.withArgs("hello world");
    MyObj.callanotherfunc(10, 20);
    mock.verify();
  });
});

describe.skip("test suit for stub", function () {
  it("stub the add method", function () {
    console.log(MyObj.add);
    var stub = sinon.stub(MyObj, "add");
    stub.withArgs(10, 20).returns(100);
    expect(MyObj.callanotherfunc(10, 20)).to.be.equal(100);
  });
});

describe("test the promise", function () {
  it("promise test", function () {
    //include done as arg
    this.timeout(0);
    // MyObj.testpromise().then(function (result) {
    //   expect(result).to.be.equal(6);
    //   //   expect(false).to.be.false;
    //   done();
    // });
    return expect(MyObj.testpromise()).to.eventually.equal(6);
  });
});
