import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
 private url="https://jsonplaceholder.typicode.com/todos";


  constructor(private http:HttpClient) {
    this.loadJobListFromLocalStorage();
   }
  getProduct():Observable<any>{
    return this.http.get(this.url);
  }
  // postProduct(productData:any):Observable<any>{
  //   return this.http.post(this.url, productData);
  // }

formData:any;
setFormData(data:any){
  this.formData=data;
}
getFormData():any{
return this.formData;
}

  private jobListSubject = new BehaviorSubject<string[]>([]);
    jobList$ = this.jobListSubject.asObservable();
  
    
  
    private loadJobListFromLocalStorage(): void {
      const storedJobList = localStorage.getItem('TodoList');
      const initialJobList = storedJobList ? JSON.parse(storedJobList) : [];
      this.jobListSubject.next(initialJobList);
    }
  
    updateJobList(newJob: string): void {
      const currentList = this.jobListSubject.value;
      const updatedList = [...currentList, newJob];
      this.jobListSubject.next(updatedList);
      // Update local storage
      localStorage.setItem('TodoList', JSON.stringify(updatedList));
    }

    regformData:any;
    setregFormData(data:any){
      this.regformData=data;
    }
    getregFormData():any{
    return this.regformData;
    }
}
