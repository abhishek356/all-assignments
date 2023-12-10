 export class Todo
{


     title : string;
     description : string;
     done:boolean;
     userId:string;

    // constructor({title, description, done, userId} : {title:string, description:string, done:boolean, userId:string})
     constructor({title, description, done, userId} : {title:string, description:string, done:boolean, userId:string})

     {
        this.title = title,
        this.description = description,
        this.done = done,
        this.userId = userId
     }

}