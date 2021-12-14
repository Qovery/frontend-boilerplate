import { State } from '@ngxs/store';
import { DataAction, StateRepository } from '@angular-ru/ngxs/decorators';
import { NgxsDataEntityCollectionsRepository } from '@angular-ru/ngxs/repositories';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { createEntityCollections } from '@angular-ru/cdk/entity';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable, of } from 'rxjs';

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
    // todo making the actual api call and storing the result in the store
    return of([])
  }
}
