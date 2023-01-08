import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Todo } from '../shared/interfaces/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy, AfterViewInit {
    private ngUnsubscribe = new Subject<void>();
    todos: Todo[] = [];

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {
        this.todoService.todosUpdated$
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((todos: Todo[]) => {
                this.todos = todos;
            });
        this.todos = this.todoService.todos;
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngAfterViewInit(): void {
        const input = document.getElementById('todo') as HTMLInputElement;
        fromEvent(input, 'keyup')
            .pipe(
                // @ts-ignore
                takeUntil(this.ngUnsubscribe),
                filter((event: KeyboardEvent) => event.key === 'Enter')
            )
            .subscribe(() => {
                this.addTodo();
            });
        input.focus();
    }

    addTodo(): void {
        const input = document.getElementById('todo') as HTMLInputElement;
        const text = input.value.trim();
        if (!!text) {
            this.todoService.addTodo(text);
            input.value = '';
        }
    }

    toggleCompleted(index: number): void {
        this.todoService.toggleCompleted(index);
    }

    delete(index: number): void {
        this.todoService.delete(index);
    }

}
