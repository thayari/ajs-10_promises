import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  load() {
    const readPromise = read();

    readPromise.then((response) => {
      // получили результат первого Promise
      console.log(response); 
      return json(response);
    }).then((value) => {
      // получили результат второго Promise
      console.log(value);
      return value;
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log('promise finished!')
    })
  }
}