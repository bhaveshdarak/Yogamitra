const { readFile } = require('./utils/file');

readFile('./data.txt')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
