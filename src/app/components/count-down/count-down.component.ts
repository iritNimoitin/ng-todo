import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {


  @Input() set dDay(dDay : Date){
    this._dDay = dDay;
    this.dateNow = new Date();
  }
  private subscription :Subscription = new Subscription();

  private _dDay :Date;

  private dateNow :Date = new Date();
  
  private millisecxondsInSecond:number = 1000;
  private secondInMinute : number = 60;
  private minuteInHour :number = 60;
  private hoursInDay : number = 24;

  public timeDiff : number;
  public seconds:number;
  public minutes:number;
  public houres:number;
  public days:number;

  constructor() { }

  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(() =>{
        this.getTimeDiff();
      })
    )
  }

  private getTimeDiff():void {
    this.timeDiff = new Date(this._dDay).getTime() - new Date().getTime()
    this.setTimeUnits(this.timeDiff);
  }

  private setTimeUnits(timeDiff : number):void {
    this.seconds = Math.floor((timeDiff)/(this.millisecxondsInSecond) % this.secondInMinute)
    this.minutes = Math.floor((timeDiff)/(this.millisecxondsInSecond * this.minuteInHour) % this.minuteInHour)
    this.houres = Math.floor((timeDiff)/(this.millisecxondsInSecond * this.minuteInHour * this.secondInMinute) % this.hoursInDay)
    this.days = Math.floor((timeDiff) /(this.millisecxondsInSecond * this.minuteInHour * this.secondInMinute * this.hoursInDay))

  }

}
