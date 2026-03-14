import { Injectable, signal, computed, effect } from '@angular/core';

/*
 Task interface
 Task structure definition

 Tamil:
 ஒரு Task object எப்படி இருக்கும் என்று define பண்ணும் interface
*/
export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export interface Error {
    message: string;
}

@Injectable({ providedIn: 'root' })
export class TaskStore {

    /*
     SIGNAL STATE
  
     English:
     "tasks" signal stores the list of tasks.
  
     Tamil:
     "tasks" signal-ல் எல்லா task list-மும் store ஆகும்.
     இது change ஆனவுடன் UI automatically update ஆகும்.
    */
    tasks = signal<Task[]>([]);
    errors = signal<Error | null>(null);


    constructor() {

        // if user refresh the page, signal store data will disappear, for overcome this one So we save tasks to localStorage automatically.
        // THAT IS THE USE OF EFFECTS

        // When tasks change:
        // addTask()
        //    ↓
        // tasks.update()
        //    ↓
        // signal changed
        //    ↓
        // effect() runs
        //    ↓
        // localStorage updated

        // User refresh page: -->> tasks restored
        const savedTasks = localStorage.getItem('tasks');

        if (savedTasks) {
            this.tasks.set(JSON.parse(savedTasks));
        }

        effect(() => {
            const tasks = this.tasks();
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });

    }

    /*
     FILTER STATE
  
     English:
     filter signal stores the current filter type.
  
     Tamil:
     எந்த filter apply பண்ணணும் (all / completed / pending)
     என்பதை இந்த signal store பண்ணும்.
    */
    filter = signal<'all' | 'completed' | 'pending'>('all');


    /*
     COMPUTED SIGNAL
  
     English:
     visibleTasks automatically recalculates whenever
     tasks or filter changes.
  
     Tamil:
     tasks அல்லது filter change ஆனதும்
     visibleTasks automatic-ஆ recompute ஆகும்.
    */
    visibleTasks = computed(() => {

        const filter = this.filter();

        if (filter === 'completed') {
            return this.tasks().filter(t => t.completed);
        }

        if (filter === 'pending') {
            return this.tasks().filter(t => !t.completed);
        }

        return this.tasks();
    });


    /*
     COMPUTED SIGNAL
  
     English:
     pendingCount calculates number of unfinished tasks.
  
     Tamil:
     இன்னும் complete ஆகாத task count-ஐ
     automatic-ஆ calculate பண்ணும் computed signal.
    */
    pendingCount = computed(() =>
        this.tasks().filter(t => !t.completed).length
    );

    completedCount = computed(() => {
        return this.tasks().filter(t => t.completed).length
    })


    /*
     ACTION METHOD
  
     English:
     Adds a new task to the tasks list.
  
     Tamil:
     புதிய task-ஐ list-க்கு add பண்ணும் method.
  
     update() → previous value எடுத்துக்கிட்டு
     புதிய value return பண்ண வேண்டும்.
    */
    addTask(title: string) {

        const checkTheTask = title.trim().toLowerCase();

        // ❌ Check empty title
        if (!checkTheTask) {
            console.warn('Task title cannot be empty');
            this.errors.set({ message: 'Task title cannot be empty' });
            return;
        }

        const task: Task = {
            id: Date.now(),
            title,
            completed: false
        };

        this.tasks.update(tasks => {

            const checkDuplicates = tasks.some((tasks) => {
                return tasks.title.trim().toLowerCase() === checkTheTask
            })

            if (checkDuplicates) {
                console.warn('Task already exists');
                this.errors.set({ message: 'Task already exists' });
                return tasks; // return old state (no change)
            }
            this.errors.set(null);
            return [...tasks, task];

        });
    }


    /*
     ACTION METHOD
  
     English:
     Toggle task completion status.
  
     Tamil:
     task completed status-ஐ toggle செய்யும் method.
     completed → true / false change ஆகும்.
  
     mutate() Angular latest versions-ல் remove பண்ணப்பட்டு
     update() தான் use பண்ணணும்.
    */
    toggleTask(id: number) {

        this.tasks.update(tasks =>
            tasks.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );

    }


    /*
     ACTION METHOD
  
     English:
     Updates filter state.
  
     Tamil:
     filter signal value-ஐ update பண்ணும் method.
    */
    setFilter(value: 'all' | 'completed' | 'pending') {
        this.errors.set(null);
        if (value === 'completed') {
            if (this.tasks().filter(t => t.completed).length === 0) {
                this.errors.set({ message: 'There is no completed tasks yet!' })
                return;
            }
        }
        if (value === 'pending') {
            if (this.tasks().filter(t => !t.completed).length === 0) {
                this.errors.set({ message: 'There is pending tasks!' })
                return;
            }
        }
        return this.filter.set(value);
    }

    removeTask(id: number) {
        this.tasks.update(task => {
            return task.filter(e => e.id !== id)
        })
    }
}

// Now our store looks like:

// State
// signals()

// Selectors
// computed()

// Actions
// methods()

// Exactly like NgRx but 10x simpler.