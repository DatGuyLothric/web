import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IPet {
  id: number,
  name: string,
  type: string,
  cost: number,
  img?: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public readonly http: HttpClient) { }

  public get$(): Observable<any> {
    return this.http.get('http://localhost:8080/pets');
  }

  public getOne$(pet: IPet): Observable<any> {
    return this.http.get(`http://localhost:8080/pets/${ pet.id }`);
  }

  public post$(pet: IPet): Observable<any> {
    return this.http.post('http://localhost:8080/pets', { id: pet.id, name: pet.name, type: pet.type, cost: pet.cost });
  }

  public patch$(pet: IPet): Observable<any> {
    return this.http.patch(`http://localhost:8080/pets/${ pet.id }`, { name: pet.name, type: pet.type, cost: pet.cost });
  }

  public delete$(pet: IPet): Observable<any> {
    return this.http.delete(`http://localhost:8080/pets/${ pet.id }`);
  }
}
