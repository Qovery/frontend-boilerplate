import { State, StateContext } from '@ngxs/store';
import { DataAction, Persistence, StateRepository } from '@angular-ru/ngxs/decorators';
import { NgxsDataEntityCollectionsRepository } from '@angular-ru/ngxs/repositories';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { createEntityCollections } from '@angular-ru/cdk/entity';
import { HttpClient } from '@angular/common/http';
import { delay, filter, map, Observable, of } from 'rxjs';

export interface ExtraOption {
  loading: boolean;
  error: Error;
}

@StateRepository()
@State({
  name: 'todo',
  defaults: createEntityCollections<Todo, string>(),
})
@Injectable({ providedIn: 'root' })
export class TodoRepositoryState extends NgxsDataEntityCollectionsRepository<
  Todo,
  string,
  ExtraOption
> {
  constructor(private _http: HttpClient) {
    super();
  }

  @DataAction()
  public setLoading(value: boolean): void {
    this.setEntitiesState({
      ...this.getState(),
      loading: value,
    });
  }

  public fetchTodos(): Observable<Todo[]> {
    this.setLoading(true);
    // todo making the actual api call and storing the result in the store
    const api = this._http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    api
    .pipe(
      delay(1000)
    )
    .subscribe((todos) => {
      this.setAll(todos)
      this.setLoading(false);
      console.log(this.getState())
    })
    return api
  }

  public fetchUser(todo: Todo) {
    this._http.get<any>(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)
      .subscribe((user: any) => {
        this.updateOne({
          id: todo.id,
          changes: {
            ...todo,
            user: user
          }
         })
      })
  }
}
