import { Component, Input, OnInit } from '@angular/core';
import { SlipService } from '../Services/slip.service';
import { Slip } from './../models/models';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  private responseSlip: any;
  private slipObject: any;
  public slipArray: any;

  constructor(private _slipService: SlipService) {}

  ngOnInit() {
    this.responseSlip = this._slipService.getSlip();
    this.returnSlip();
    this.refresh();
  }

  returnSlip() {
    this.responseSlip.forEach((data: { slip: { advice: any; id: any } }) => {
      const slip: Slip = {
        slip: {
          advice: data.slip.advice,
          id: data.slip.id,
        },
      };
      this.slipObject = slip;
      this.slipArray = Object.entries(this.slipObject);
      for (var i = 0; i < this.slipArray.length; i++) {
        return this.slipArray;
      }
    });
  }

  refresh() {
    const btn = <HTMLInputElement>document.querySelector('#refresh');
    btn.addEventListener('click', () => {
      location.reload();
    });
  }
}
