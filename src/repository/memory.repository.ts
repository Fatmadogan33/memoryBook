import KnexDB from "../db/knex";
import { MemoryNotFoundError, DatabaseError } from "../exceptions/Http-exception"
import AddMemory from "../interface/add_memory";
import UpdateMemory from "../interface/update_memory";
import MemoryDb from "../interface/memory";
import Memory from "../entities/Memory";

class MemoryBook {

    memoryDB: typeof KnexDB;
    constructor() {
        this.memoryDB = KnexDB;
    }

    async getAllMemories(params: any): Promise<MemoryDb[]> {
        return new Promise((resolve, reject) => {
            this.memoryDB.db
                .select("memory_id", "memory", "date", "location", "title",)
                .from("memory")
                .orderBy(params.order_column,params.order_type)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        })
    }

    async getMemory(memory_id: number): Promise<MemoryDb> {
        return new Promise((resolve, reject) => {
            this.memoryDB.db
                .select("memory_id", "memory", "date", "location", "title",)
                .from("memory")
                .where("memory_id", memory_id)
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        })
    }


    async addMemory(memory: MemoryDb): Promise<MemoryDb> {
        return new Promise(async (resolve, reject) => {
            this.memoryDB.db("memory")
                .insert(memory)
                .returning("*")
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        });
    }

    async updateMemory(memory: MemoryDb): Promise<MemoryDb> {
        return new Promise(async (resolve, reject) => {
            const updatedMemory = memory;
            this.memoryDB.db("memory")
                .where("memory_id", memory.memory_id)
                .update(updatedMemory, ["memory_id", "title", "memory", "date", "location"])
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(new DatabaseError())
                })
        })
    }

    async deleteMemory(memory_id: number): Promise<Boolean> {
        return new Promise(async (resolve, reject) => {
            this.memoryDB.db("memory").where("memory_id", memory_id).del()
                .then((result) => {
                    if(result == 0){
                        resolve(false);
                    }else{
                        resolve(true);
                    }
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        })
    }

}

export default MemoryBook;