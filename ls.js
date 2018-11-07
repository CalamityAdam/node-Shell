const fs = require('fs');

module.exports = done => {
  fs.readdir('./', 'utf8', (err, data) => {
    if (err) {
      throw err.stack;
    } else {
      // process.stdout.write(files.join('\n'));
      // process.stdout.write('\nprompt > ');
      done(data.join('\n'));
    }
  });
};
