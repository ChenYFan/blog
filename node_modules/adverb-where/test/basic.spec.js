var adverbs = require('../adverbs');
var badWordInSentence = 'Allegedly, this sentence is terrible.';
var goodSentence = 'The good dog jumps over the bad cat.';
var vagueSentence = 'We are writing about things and stuff.';

describe('adverb-where', function () {

  describe('a sentence filled with adverbs', function() {
    var results = null;

    beforeEach(function() {
      results = adverbs(badWordInSentence);
    });

    it('will not escape notice', function () {
      expect(results).toEqual([{index: 0, offset: 9}]);
    });
  })

  it('should not have a problem with a short sentence', function () {
    expect(adverbs(goodSentence)).toEqual([]);
  });

  it('should flag vague constructs', function () {
    expect(adverbs(vagueSentence)).toEqual(
           [{index: 21, offset: 6 }, {index: 32, offset: 5 }]);
  });
});
