import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-main-img',
  templateUrl: './main-img.component.html',
  styleUrls: ['./main-img.component.css']
})
export class MainImgComponent implements OnInit {

  constructor(private commonService:CommonService) {}
    
   imageList;
   imageIndex =0;
   private cureentIndex = 0
  ngOnInit() { 
    // this.imageIndex = 0
    this.getData()
    setInterval(()=>{
      this.imageIndex++
      if(this.imageIndex==this.imageList.length){
        this.imageIndex =0
      }
      
    },2000)
   }
 
  
  getData(){
    this.commonService.getMainImageList().subscribe((res)=>{
      this.imageList = res;
      console.log(this.imageList)
    })
  }
}
