import { Injectable } from '@angular/core';
import { SubmitData } from './model/SubmitData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {
  url : string;
  Details : SubmitData;
  DetailsArr : SubmitData[];




  constructor( private http : HttpClient) {
    this.url="http://localhost:3554/Details";
    this.Details = new SubmitData();
    this.DetailsArr = [];


   }

  // insertSubmitData(data : SubmitData){
  //   this.http.post<SubmitData>(this.url,data).subscribe();
  //   return "Movie Data Added";
  // }
ClickMe(Details : SubmitData){
  // this.ClickMe
  this.http.post<SubmitData>(this.url,Details).subscribe();
  return "Movie Details Added";

}
UpdateMe(Details : SubmitData){
  this.http.put<SubmitData>(this.url+"/"+Details.id,Details).subscribe();
  return "Movies Details Updated";

}
DeleteMe(id : number){
  this.http.delete<SubmitData>(this.url+"/"+id).subscribe();
  return "Movie Details Deleted";


}
Find(id : number){
  this.http.get<SubmitData>(this.url+"/"+id).subscribe(data => this.Details = data);
  return this.Details;

}
FindAll(){
  this.http.get<SubmitData[]>(this.url).subscribe(data => this.DetailsArr = data);
  return  this.DetailsArr;

}
}
