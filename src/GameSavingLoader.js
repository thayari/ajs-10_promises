import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  load() {
    const readPromise = read();
    readPromise.then((response) => json(response))
      .then((value) => {
        return new Promise((resolve, reject) => {
          resolve(JSON.parse(value));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
