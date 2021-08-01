import KnexDB from "../db/knex";
import { MemoryNotFoundError, DatabaseError } from "../exceptions/ValidationError"
import AddMemory from "../interface/add_memory";
import UpdateMemory from "../interface/update_memory";
import MemoryDb from "../interface/memory";
import Memory from "@entities/Memory";

class MemoryBook {

    memoryDB: typeof KnexDB;
    constructor() {
        this.memoryDB = KnexDB;
    }

    async getAllMemories(): Promise<MemoryDb[]> {
        return new Promise((resolve, reject) => {
            this.memoryDB.db
                .select("id", "memory", "date", "location", "title",)
                .from("memories")
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        })
    }

    async getMemory(id: number): Promise<MemoryDb> {
        return new Promise((resolve, reject) => {
            this.memoryDB.db
                .select("id", "memory", "date", "location", "title",)
                .from("memories")
                .where("memoryid", id)
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
                .where("memory.memoryid", memory.id)
                .update(updatedMemory, ["memory_id", "title", "memory", "date", "location"])
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((error) => {
                    reject(new DatabaseError())
                })
        })
    }

    async deleteMemory(id: number): Promise<Boolean> {
        return new Promise(async (resolve, reject) => {
            this.memoryDB.db("memory").where("memory.memoryid", id).del()
                .then(() => {
                    resolve(true);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        })
    }

}

export default MemoryBook;