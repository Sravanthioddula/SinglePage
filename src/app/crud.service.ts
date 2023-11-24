import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 private url ="http://10.0.53.77:3000/todos";
// private url = "http://localhost:3000/todo";
  // inform="http://10.0.53.77:3000/todos/id";
 
  constructor(private http:HttpClient) { }
  getUser():Observable<any>{
    return this.http.get(this.url)
  }
  postUser(userdata:any):Observable<any>{
    return this.http.post(this.url, userdata)
  }
  updateData(updatedData: any): Observable<any> {
    const updateUrl = `${this.url}/${updatedData.id}`;

    return this.http.put(updateUrl,updatedData).pipe(
      catchError((error: any) => {
        console.error('Error occurred while updating data:', error);
        return throwError(error);
      })
    );
  
  
}
delete(id:any):Observable<void>{
  const deleteUrl = `${this.url}/${id}`;

  return this.http.delete<void>(deleteUrl)

}
// getToDobyID(id: Number): Observable<any> {
//   const apiUrl = `${this.url}/${id}`;
//   return this. http.get<any>(apiUrl);
// }
} 
