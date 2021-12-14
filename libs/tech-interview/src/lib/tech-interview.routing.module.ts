import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule } from "@angular/router";
import { TechInterviewModule } from "@tech-interview/tech-interview";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: WelcomeComponent
        },
      ],
    ),
  ],
})
export class TechInterviewRoutingModule {}
