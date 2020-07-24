const complexity = require('../too-wordy');

const badWordInSentence = 'An abundance of highlights accede to long, complex sentences and common errors.';
const badPhrasesInSentence = 'a number of sentences are so dense and complicated that your readers will be adversely impacted';
const goodSentence = 'The good dog jumps over the bad cat.';

describe('too-wordy', () => {
  describe('a sentence filled with overly complex words', () => {
    let results = null;

    beforeEach(() => {
      results = complexity(badWordInSentence);
    });

    it('the words are noted', () => {
      expect(results).toEqual([
        { index: 3, offset: 9 },
        { index: 27, offset: 9 },
      ]);
    });
  });

  describe('a sentence with phrases that could be stated more simply', () => {
    let results = null;

    beforeEach(() => {
      results = complexity(badPhrasesInSentence);
    });

    it('the phrases are noted', () => {
      expect(results).toEqual([
        { index: 0, offset: 11 },
        { index: 87, offset: 8 },
      ]);
    });
  });

  it('should not have a problem with a short sentence', () => {
    expect(complexity(goodSentence)).toEqual([]);
  });
});
