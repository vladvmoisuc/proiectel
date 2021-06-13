const lineReader = require('line-reader');

function readLines(filename, processLine) {
  return new Promise((resolve, _reject) => {
    lineReader.eachLine(filename, (line, _last, callback) => {
      processLine(line, resolve, callback);
    });
  });
}

const getUrlFriendlyPath = (filename) => {
  const path = filename.replace('.md', '').replace(/\s/g, '-').toLowerCase();

  // The path has to be URL friendly, therefore
  // we need to remove special characters from the path
  return path.replace(
    /&|\$|\+|,|\/|:|;|=|\?|@|#|<|>|\[|\]|\/|\||"|\^|%|\*|\!/g,
    ''
  );
};

module.exports = {
  readLines,
  getUrlFriendlyPath,
};
