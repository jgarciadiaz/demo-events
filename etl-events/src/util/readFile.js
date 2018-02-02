import fs from 'fs';

const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (error, data) => {
    if (error) {
      return reject(new Error(error));
    }
    return resolve(data);
  });
});

export default readFile;
