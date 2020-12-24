import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/operators';
import { ApiService, IPet } from 'src/api/api.service';
import { deleteAction, getAction, selectAction } from 'src/store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly pets$;
  public readonly selected$;

  private _selected: IPet[] = [];

  constructor(private readonly _store: Store<{ pets: IPet[], selectedPets: IPet[] }>) {
    this.pets$ = this._store.select('pets').pipe(map(_ => (_ as any).pets.map(pet => pet)));
    this.selected$ = this._store.select('pets').pipe(map(_ => (_ as any).selectedPets.map(pet => pet)), tap(_ => { this._selected = _ as any }));

    this._store.subscribe(_ => console.log(_));
  };

  ngOnInit() {
    this._store.dispatch(getAction());
  }

  public select(id: string): void {
    this._store.dispatch(selectAction({ id }));
  }

  public buy(): void {
    this._selected.forEach(pet => {
      this._store.dispatch(deleteAction({ id: pet.name }));
    });
  }
}
