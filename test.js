var rewire = require("rewire");
var chai = require("chai");
var should = chai.should();

var app = rewire("./index.js");

analyzeText = app.__get__("analyzeText");

describe("analyzeText", function() {
  it("should output the correct word count", function(done) {
    analyzeText("hello, my friend.").should.include("3 words");
    done();
  });

  it("should output the correct character count", function(done) {
    analyzeText("hello, my friend.").should.include("17 characters");
    done();
  });

  it("should output the correct space count", function(done) {
    analyzeText("hello, my friend.").should.include("2 spaces");
    done();
  });
});
