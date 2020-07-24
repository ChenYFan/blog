var cliches = require('../cliches');
var clichesInSentence = 'Writing specs puts me at loose ends.';
var goodSentence = 'The good dog jumps over the bad cat.';

describe('no-cliches', function () {

  describe('a sentence filled with cliches', function() {
    var results = null;

    beforeEach(function() {
      results = cliches(clichesInSentence);
    });

    it('will not escape notice', function () {
      expect(results).toEqual([{ index : 22, offset : 13 }]);
    });
  })

  it('should not have a problem with a short sentence', function () {
    expect(cliches(goodSentence)).toEqual([]);
  });
});
