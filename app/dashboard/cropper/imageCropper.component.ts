import { Component } from '@angular/core';

@Component({
  selector: 'image-upload',
  styles: [`
    :host{
      display: block
    }
    `],
  template: `
    <h1>Resizing & cropping images with Angular 2</h1>
    <input (change)="Img.imgChange($event)" type="file">

    <button (click)="Img.zoom('+')">
    +
    </button>
    <button (click)="Img.zoom('-')">
    -
    </button>
    <button (click)="Img.center()">
    center
    </button>

    <ly-cropping #Img format="png">
    </ly-cropping>
    <div>Format input: {{Img._img.type}}</div>
    <br />
    <div>Format output: {{Img.format}}</div>
    <br />
    <div>Result: </div>
    <br />
    <img [src]="Img.imgCrop">
    <br />
    <input [(ngModel)]="Img.sizeW" placeholder="Img size W">
    <input [(ngModel)]="Img.sizeH" placeholder="Img size H">
    <input [(ngModel)]="Img.img" placeholder="Img">
  `
})
export class imgUpload {
  constructor(){

  }
}
