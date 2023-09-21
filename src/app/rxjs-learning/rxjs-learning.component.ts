import { Component,OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit{

  agents: Observable<string>;

  agentss: Observable<string>;
  agentName:any;
  orderArr=['apple','banana','grapes'];
  orders$:Observable<string> = from(this.orderArr);

  orderDataValue:string;
  constructor(){

  }

  ngOnInit(): void {

    console.log("TestData");


    // this.agents=new Observable(
    //   function(observable){
    //     try {
    //       observable.next("Raju");
    //       setInterval(()=>{
    //         observable.next("subash");

    //       },3000);

    //       setInterval(()=>{
    //         observable.next("jaisee");
    //       },3000);
    //       setInterval(()=>{
    //         observable.next("Mercy");
    //       },3000);
    //     } catch (error) {
    //       console.log(error,"error ")
    //     }
    //   }
    // )

    // this.agents.subscribe(data=>{
    //   console.log(data,"agentsNames")
    //   this.agentName=data;
    // })  


  //   this.orders$.subscribe(orderData => {
  //     console.log(orderData,"orderData");
  //     setInterval(()=>{
  //       this.orderDataValue=orderData;
  //     },3000)

  // })

  }

  
  
}
