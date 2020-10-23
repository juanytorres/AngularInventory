import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { inventoryitems } from '../models/inventoryitems';

@Injectable({
  providedIn: 'root'
})
export class InventoryitemsService {
  _url = 'http://localhost:9096/api/inventoryitems'
  _baseurl ='http://localhost:9096'
  
  constructor(private http: HttpClient) 
    {
      console.log('Inventarioss')
   }

  getInventoryItems()
  {

        let header = new HttpHeaders()
            .set('Type-content', 'aplication/json')
    return this.http.get(this._url, {
          headers: header
          }   
    );    
  }

  post(oinventory: inventoryitems): Observable<any>{
    return this.http.post("http://localhost:9096/api/inventoryitems/post/",oinventory);

  }

  put(oinventory: inventoryitems): Observable<any>{
    return this.http.put("http://localhost:9096/api/inventoryitems/Put/1",oinventory);
  }

  delete(): Observable<any>{
    return this.http.delete("http://localhost:9096/api/inventoryitems/Delete/1");
  }
 

}
