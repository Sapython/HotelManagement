import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomServicesComponent } from './room-services.component';

const routes: Routes = [{ path: '', component: RoomServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomServicesRoutingModule { }
