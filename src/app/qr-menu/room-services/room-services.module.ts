import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomServicesRoutingModule } from './room-services-routing.module';
import { RoomServicesComponent } from './room-services.component';


@NgModule({
  declarations: [
    RoomServicesComponent
  ],
  imports: [
    CommonModule,
    RoomServicesRoutingModule
  ]
})
export class RoomServicesModule { }
