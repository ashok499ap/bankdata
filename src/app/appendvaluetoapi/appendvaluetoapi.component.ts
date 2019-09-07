// import { Component, OnInit } from '@angular/core';
// import { MyServiceService } from '../my-service.service';
// import { HttpClient } from '@angular/common/http';
// import { getAppInitializer } from '@angular/router/src/router_module';

// @Component({
//   selector: 'app-appendvaluetoapi',
//   templateUrl: './appendvaluetoapi.component.html',
//   styleUrls: ['./appendvaluetoapi.component.css']
// })
// export class AppendvaluetoapiComponent implements OnInit {
// public first = [];
// // public second = [];
// public total;
// public anyvalue;
// public totalItem;
//   sendValue: string;
//   constructor(public  httpService: MyServiceService) { }

//   ngOnInit() {
//     // this.searchValue1()
//     // this.getApi()
//   }
//   // searchValue1(){ 
//   //    this.httpService.searchValue1().subscribe((data) => {
//   //      this.first.push(data)
//   //       this.total = this.first[0].incomplete_results
//   //     // console.log(this.first[0].incomplete_results)
     
//   //   })
//   // //   return this.httpService.get("https://api.github.com/search/users?q=<searchText>").subscribe(data => {
    
//   // //   this.first.push(data)
//   // //   for(var i=0; i<this.first.length; i++){
//   // //     console.log('fun called', this.first[i].total_count)
//   // //   }
    
//   // // })

//   // }
//   // getApi(){
//   //   this.httpService.getApi().subscribe((data) => {
//   //     console.log(data)
//   //   })
//   // }
//   appendValue(){
//      this.anyvalue = this.sendValue;
//      console.log('boss' ,this.anyvalue)
//     this.httpService.appendToValue(this.anyvalue).subscribe(data => {
//       this.first.push(data);
//           this.total = this.first[0].items
//           for(var i=0; i<this.total.length; i++) {
//             this.totalItem = this.total[i]
//           }
         
//           console.log('ashok hi',this.totalItem)
        
      
//     })
// }
// }
