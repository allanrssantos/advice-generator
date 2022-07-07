import { Component, Input, OnInit } from '@angular/core';
import { SlipService } from '../Services/slip.service';
import { Slip } from './../models/models';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  private _responseSlip: any;
  public slipObject: any;

  constructor(private _slipService: SlipService) {}

  ngOnInit() {
    this._responseSlip = this._slipService.getSlip();
    this.returnSlip();
    this.refresh();
  }

  returnSlip(): void {
    this._responseSlip.forEach(
      (data: { slip: { advice: string; id: number } }) => {
        const slip: Slip = {
          slip: {
            advice: data.slip.advice,
            id: data.slip.id,
          },
        };
        this.slipObject = slip;
        return this.slipObject;
      }
    );
  }

  refresh(): void {
    const btn = <HTMLInputElement>document.querySelector('#refresh');
    btn.addEventListener('click', () => {
      window.setTimeout( () => {
        location.reload();
      }, 1000);
    });
  }
}
