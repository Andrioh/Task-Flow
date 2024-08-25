import { Injectable } from '@angular/core';

interface Task {
  id: number,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taksarray: Task[] = []

  updatearray() {
    const taskdados = localStorage.getItem("Task")
    this.taksarray = taskdados ? JSON.parse(taskdados) : []
  }

  newtask(content: string) {
    console.log("chamou")
    if (Array.isArray(this.taksarray)) {
      const lastid = this.taksarray.length > 0 ? Math.max(...this.taksarray.map((task: Task) => task.id)): 0
      const lastid2 = lastid + 1

      this.taksarray.push({ id: lastid2, content: content })
      localStorage.setItem("Task", JSON.stringify(this.taksarray))

    }
  }

}
