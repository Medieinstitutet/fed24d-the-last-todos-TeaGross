import { v4 as uuidv4 } from 'uuid';

export class Todo {
    id: string;
    title: string;
    isDone: boolean; 

    constructor( title: string, isDone: boolean) {
        this.id = uuidv4();
        this.title = title;
        this.isDone = isDone;
    }
}