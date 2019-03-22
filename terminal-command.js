
const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('hello-world.txt', "Hello to this great world", (err) => {
  if (err) throw err;
  console.log('success');
  });

};

module.exports.mkdir = () => {
  fs.mkdir('newDir', (err) => {
    if(err) {
      console.log(err.message);
    } else {
      console.log('Directory Created');
    }
  });

};
