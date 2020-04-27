import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-proficiencies',
  templateUrl: './proficiencies.component.html',
  styleUrls: ['./proficiencies.component.scss']
})
export class ProficienciesComponent implements OnInit {

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver) {}


  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
