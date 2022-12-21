import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
URL = "http://localhoost:8080/personas/"

  constructor(private http: HttpClient) { }
public getPersona(): Observable<persona>{
return this.http.get<persona>(this.URL+ 'traer/perfil');
}
}
