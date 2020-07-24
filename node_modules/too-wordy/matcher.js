function matcher(regex, text) {
  const results = [];
  let result = regex.exec(text);

  while (result) {
    results.push({ index: result.index, offset: result[0].length });
    result = regex.exec(text);
  }

  return results;
}

module.exports = matcher;
