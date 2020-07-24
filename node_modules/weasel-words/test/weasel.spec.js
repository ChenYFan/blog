var weasel = require('../weasel');

describe('weasel', function () {

  it('should detect weasel words', function () {
    expect(weasel('Remarkably few developers write well.')).toEqual([
      { index : 0, offset : 10 },
      { index : 11, offset : 3 }
    ]);
  });

  it('should not detect weasel sub-words', function () {
    expect(weasel('Everything is ok.')).toEqual([]);
  });

  it('should not detect "too many"', function () {
    expect(weasel('I have too many things.')).toEqual([]);
  });

  it('should not detect "too few"', function () {
    expect(weasel('I have too few things.')).toEqual([]);
  });

});
