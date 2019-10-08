import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private API_BICICLETA = environment.api_url + "data";

  constructor(private http: HttpClient) {}

  save(dado): Observable<any> {
      return this.http.put<any>(
        `${this.API_BICICLETA + '/categorizar'}`,
        dado
      );
    }

  find(): Observable<any> {
    return this.http.get<any>(this.API_BICICLETA);
  }

  findCategorizar(): Observable<any> {
    return this.http.get<any>(this.API_BICICLETA + '/categorizar');
  }

  delete(id):Observable<any>{

    return this.http.delete<any>( `${this.API_BICICLETA + '/' + id}`);
  }
}
