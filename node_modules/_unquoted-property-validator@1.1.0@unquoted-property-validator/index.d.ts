declare function unquotedValidator(propertyName: string): {
  needsQuotes: boolean,
  needsBrackets: boolean,
  es3Warning: boolean,
  quotedValue: string,
};

export = unquotedValidator;
