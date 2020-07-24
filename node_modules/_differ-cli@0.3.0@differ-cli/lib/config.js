var config = {
    // if over limit, no word-by-word diff
    lengthLimit: 120,
    // num of lines around diff blocks
    aroundLineNum: 3,
    // if use similarity judge
    similarityJudge: process.env.SIMILARITY_JUDGE === 'true',
    // similarity limit (bigger -> more similar)
    similarityLimit: 1
};

module.exports = config;