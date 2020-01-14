import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const readPromise = read();
    return readPromise.then((response) => json(response)).then((result) => JSON.parse(result));
  }
}
