export interface IMemory {
    memory_id: number;
    title: string;
    date: string;
    memory: string;
    location: string;
}

class Memory implements IMemory {

    public memory_id: number;
    public title: string;
    public date: string;
    public memory: string;
    public location: string;

    constructor(titleOrUser: string | IMemory, date?: string,  memory?: string, location?: string, memory_id?: number) {
      debugger;
        if (typeof titleOrUser === 'string') {
            this.title = titleOrUser;
            this.date = date || '';
            this.memory = '';
            this.location = '';
            this.memory_id = memory_id || -1;
        } else {
            this.title = titleOrUser.title;
            this.date = titleOrUser.date;
            this.memory = titleOrUser.memory;
            this.location = titleOrUser.location;
            this.memory_id = titleOrUser.memory_id;
        }
    }
}

export default Memory;
