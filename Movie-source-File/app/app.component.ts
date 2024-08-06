import { Component , HostListener} from '@angular/core';
import { SubmitData } from './model/SubmitData';
import { MovieReviewService } from './movie-review.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'microProject';


  myClass : string;
  myH1 : string;

  myStyle : {};
  Details : SubmitData ;
  result : string ;
  DetailsArr : SubmitData[];
  flag : boolean ;

  constructor(private service : MovieReviewService ){
    this.Details = new SubmitData();
    this.DetailsArr = [];
    this.flag = false;
  
    this.myClass = "heading";
    this.myH1 = "H2";
   
    this.myStyle = {'text-align':'center'};
    this.result = " ";
  }
  
  // insertSubmitData(data1 : any){
  //   this.data.id = data1.id;
  // }
  // changeSubmit(){
  //   this.submit="Result1";
  // }
  ClickMe(data : any) {
 this.Details.id=data.id;
 this.Details.MovieName = data.MovieName;
 this.Details.Rating = data.Rating;
 this.Details.Review = data.Review;
 alert(data.id+" "+data.MovieName+" "+data.Rating+ " "+data.Review);
 this.result = this.service.ClickMe(this.Details);

    
  }
  UpdateMe(data : any){
  this.Details.id=data.id;
 this.Details.MovieName = data.MovieName;
 this.Details.Rating = data.Rating;
 this.Details.Review = data.Review;
 alert(data.id+" "+data.MovieName+" "+data.Rating+ " "+data.Review);
 this.result = this.service.UpdateMe(this.Details);
  }
  DeleteMe(data : any){
this.result = this.service.DeleteMe(data.id)
  }
  Find(data : any){
   this.Details = this.service.Find(data.id);
   this.result = this.Details.id+ " "+this.Details.MovieName+" "+this.Details.Rating+" "+this.Details.Review;
  }
  FindAll(){
   this.DetailsArr = this.service.FindAll();
   this.flag = true;
  }
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const targetElement = event.target as HTMLElement;

    // // Check if the click is outside the button
    // if (this.flag && !targetElement.closest('.submit-btn')) {
    //   this.flag = false;
    // }
    

  }

 
}
