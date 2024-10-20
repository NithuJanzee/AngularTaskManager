import { Injectable } from "@angular/core"
import { NewTaskData } from "./tasks/tasks.model"

@Injectable({providedIn:'root'})
export class TaskService {
    private Tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ]
  

    getUserTask(userId:string){
        return this.Tasks.filter((task) => task.userId === userId)
    }
    
    AddTask(taskData: NewTaskData, userId: string) {
        this.Tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
        });
    }

    removeTask(userId :string)
    {
        this.Tasks = this.Tasks.filter((task) => task.id !== userId)
    }
}