import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  baseUrl = 'http://localhost/lotteryapi/';

  headers = new HttpHeaders(
    {
        'Content-Type':  'application/x-www-form-urlencoded'
    }
);
  constructor(public http: HttpClient) {


   }
 
getAdminByEmail(email) {
  let body = new URLSearchParams();
  body.set('type', '1');
  body.set('email', email);
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

getTotalMembers() {
  let body = new URLSearchParams();
  body.set('type', '2');
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

getTotalInviteCode() {
  let body = new URLSearchParams();
  body.set('type', '3');
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

getTop5NewMember() {
  let body = new URLSearchParams();
  body.set('type', '4');
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

getGenerateCode() {
  let body = new URLSearchParams();
  body.set('type', '5');
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

getInviteCodeList() {
  let body = new URLSearchParams();
  body.set('type', '6');
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

getAllMemberList() {
  let body = new URLSearchParams();
  body.set('type', '7');
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

updateInfo(json) {
  let body = new URLSearchParams();
  body.set('type', '8');
  
  body.set('infoData', this.utf8_to_b64(JSON.stringify(json)));
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

getInfo(){
  let body = new URLSearchParams();
  body.set('type', '9');
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

getPrize(){
  let body = new URLSearchParams();
  body.set('type', '10');
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}


getmember(email){
  let body = new URLSearchParams();
  body.set('type', '11');
  body.set('email', email);
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

register(json){
  let body = new URLSearchParams();
  body.set('type', '12');
  body.set('user', JSON.stringify(json));
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

checkInviteCode(uid,email){
  let body = new URLSearchParams();
  body.set('type', '13');
  body.set('uid', uid);
  body.set('email', email);
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}

saveWheel(json){
  let body = new URLSearchParams();
  body.set('type', '14');
  body.set('prizeJson', JSON.stringify(json));
  return this.http.post(this.baseUrl+'adminuser.php',body.toString(),{ headers: this.headers }).pipe(retry(3), catchError(this.handleError));
}



utf8_to_b64( str ) {
return window.btoa(encodeURIComponent(str));
}

handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
 
}
