const fs = require('fs');

module.exports = done => {
  fs.readdir('./', 'utf8', (err, data) => {
    if (err) throw err.stack;
    else done(data.join('\n'));
  });
};
