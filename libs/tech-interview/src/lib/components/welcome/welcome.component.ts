import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoRepositoryState } from '../../data/todo-repository.state';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'tech-interview-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WelcomeComponent implements OnInit {

  todos: Observable<Todo[]> = new Observable;

  constructor(
    public todoService: TodoRepositoryState
  ) {}

  public ngOnInit(): void {
    // todo actual call to the store fetching the todo
    this.todoService.fetchTodos()
  }

  public getUser(todo: Todo) {
    this.todoService.fetchUser(todo)
  }

}
