import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-doodads',
  templateUrl: './doodads.component.html',
  styleUrls: ['./doodads.component.scss']
})
export class DoodadsComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor() { }

  ngOnInit(): void {
  }

}
