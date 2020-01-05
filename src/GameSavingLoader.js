import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  load() {
    const readPromise = read();

    readPromise.then((response) => {
      return json(response);
    }).then((value) => {

      // получаю данные 
      console.log(value);
      return value; 
    }).catch((error) => {
      console.log(error);
    })
  }
}
