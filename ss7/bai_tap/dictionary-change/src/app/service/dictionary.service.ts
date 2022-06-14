import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: Dictionary[] = [
    {
      word: 'book',
      mean: 'sách'
    },
    {
      word: 'bike',
      mean: 'xe đạp'
    },
    {
      word: 'car',
      mean: 'ô tô'
    },
    {
      word: 'relax',
      mean: 'thư giãn'
    },
    {
      word: 'coffee',
      mean: 'cà phê'
    },
    {
      word: 'house',
      mean: 'nhà'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.dictionaryList;
  }

  search(word: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.dictionaryList.length; i++) {
      if (this.dictionaryList[i].word === word) {
        return this.dictionaryList[i];
      }
    }
  }
}
