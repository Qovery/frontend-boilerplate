import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TechInterviewRoutingModule } from "./tech-interview.routing.module";
import { NgxsModule } from "@ngxs/store";
import { TodoRepositoryState } from "./data/todo-repository.state";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, TechInterviewRoutingModule,
    HttpClientModule,
    NgxsModule.forFeature([
    TodoRepositoryState
  ])],
  declarations: [
    WelcomeComponent
  ],
})
export class TechInterviewModule {}
