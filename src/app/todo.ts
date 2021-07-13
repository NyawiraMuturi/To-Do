export class Todo {
    showDescription: boolean;
    constructor(public id: number, public name: string, public description: string){
        this.showDescription= false;
    }
}
