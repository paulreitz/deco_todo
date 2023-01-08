import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private _todos: Todo[] = [];
    private todosUpdated = new Subject<Todo[]>();

    todosUpdated$ = this.todosUpdated.asObservable();

    private baseIcons: string[] = [];
    private icons: string[] = [];

    constructor() {
        for(let i = 0; i < 10; i++) {
            this.baseIcons.push(`icon_${i}.png`);
        }
    }

    private nextIcon(): string {
        if(this.icons.length === 0) {
            this.icons = this.baseIcons.slice();
        }
        const index = Math.floor(Math.random() * this.icons.length);
        return this.icons.splice(index, 1)[0];
    }

    public addTodo(text: string): void {
        this._todos.push({
            text,
            completed: false,
            icon: this.nextIcon()
        });
        this.todosUpdated.next(this._todos);
    }

    public toggleCompleted(index: number): void {
        this._todos[index].completed = !this._todos[index].completed;
        this.todosUpdated.next(this._todos);
    }

    public delete(index: number): void {
        this._todos.splice(index, 1);
        this.todosUpdated.next(this._todos);
    }

    get todos(): Todo[] {
        return this._todos;
    }
}
