import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

interface Task {
  id: number,
  content: string,
  done: boolean,
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

  GetArray() {
    this.updatearray()
    return this.taksarray
  }

  newtask(content: string) {
    if (Array.isArray(this.taksarray)) {
      const lastid = this.taksarray.length > 0 ? Math.max(...this.taksarray.map((task: Task) => task.id)) : 0
      const lastid2 = lastid + 1

      this.taksarray.push({ id: lastid2, content: content, done: false })
      localStorage.setItem("Task", JSON.stringify(this.taksarray))

    }
  }

  DoneTask(id: string) {
    console.log("chamou")
    const num = Number(id);
    const iddone = this.taksarray.find((task: Task) => task.id === num)
    if (iddone) {
      if (iddone.done == false) {
        iddone.done = true
        localStorage.setItem("Task", JSON.stringify(this.taksarray))
      } else {
        iddone.done = false
        localStorage.setItem("Task", JSON.stringify(this.taksarray))
      }
    }
  }

  DeleteTask(id: string) {
    const num = Number(id);
    const indexToDelete = this.taksarray.findIndex((task: Task) => task.id === num);
    if (indexToDelete !== -1) {
      this.taksarray.splice(indexToDelete, 1);
      localStorage.setItem("Task", JSON.stringify(this.taksarray))
    }
  }

}
