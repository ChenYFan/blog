var assert = require("assert");
describe('hexo-generator-name', function() {
  var mockFunc;

  before(function() {
    hexo = {
      extend: {
        generator: {
          register: function(func){
            mockFunc = func;
          }
        }
      }
    }

    require('./');
  });

  it('should support http', function () {
    var http = mockFunc.call({
      config:{
        url: 'http://google.com'
      }
    });
    
    assert.equal(http.path,"CNAME",".path should be CNAME");
    assert.equal(http.data,"google.com",".data should be google.com");
  });

  it('should support https', function () {
    var https = mockFunc.call({
      config:{
        url: 'https://google.com'
      }
    });

    assert.equal(https.path,"CNAME",".path should be CNAME");
    assert.equal(https.data,"google.com",".data should be google.com");
  });
});