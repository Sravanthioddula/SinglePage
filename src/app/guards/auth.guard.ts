import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
 
  
 const router = new Router();
  if (!localStorage.getItem("email") || !localStorage.getItem("password")) {
    router.navigate(['/login']);
    return false;
  } else {
     return true;
  }

  // loginUser(user){
  //   return !!localStorage.getItem('token')
  // }
  // getToken(){
  //   return localStorage.getItem('token')
  // }
  // logoutUser(){
  //   localStorage.removeItem('token')
  // }
}
;


