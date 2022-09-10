import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>("htpp://localhost:8080/tema", this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>("htpp://localhost:8080/tema", tema, this.token)
    
  }
}
