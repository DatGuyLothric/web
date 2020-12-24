import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from "src/api/api.service";
import { getActionUpdate } from "./action";

@Injectable()
export class PetEffects {
 
  load$ = createEffect(() => this._actions$.pipe(
    ofType('getAction'),
    mergeMap(() => this._apiService.get$()
      .pipe(
        map(pets => getActionUpdate({ pets: [...pets._embedded.pets].map(pet => pet.type === 'Dog' ? pet = { ...pet, img: this.sanitization.bypassSecurityTrustStyle(`url(assets/imgs/dog${Math.floor(Math.random() * 4 + 1)}.jpg)`) } : pet = { ...pet, img: this.sanitization.bypassSecurityTrustStyle(`url(assets/imgs/cat${Math.floor(Math.random() * 4 + 1)}.jpg)`) }) })),
        catchError(() => EMPTY)
      )
    )
  ));
 
  constructor(
    private readonly _actions$: Actions,
    private readonly _apiService: ApiService,
    private sanitization: DomSanitizer
  ) {}
}