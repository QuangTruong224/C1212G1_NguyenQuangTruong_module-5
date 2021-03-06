import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../model/dictionary';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {
  dictionaryList: Dictionary[];

  constructor(private dictionaryServiceService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionaryList = this.dictionaryServiceService.getAll();
  }


}
