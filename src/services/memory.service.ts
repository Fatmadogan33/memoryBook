
import MemoryRepository from "../repository/memory.repository";
import KnexDB from "../db/knex";
import Memory from "../interface/memory";
import AddMemory from "../interface/add_memory";
import UpdateMemory from "../interface/update_memory";
import MemoryDb from "../interface/memory";

export class MemoryService {
    memoryRepository: MemoryRepository;

    constructor() {
        this.memoryRepository = new MemoryRepository();
    }

    async getAllMemories(): Promise<Memory[]> {
        return new Promise((resolve, reject) => {
            this.memoryRepository.getAllMemories()
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async getMemory(id: number): Promise<Memory> {
        return new Promise((resolve, reject) => {
            this.memoryRepository.getMemory(id)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async addMemory(memory: MemoryDb): Promise<Memory> {
        return new Promise((resolve, reject) => {
            this.memoryRepository.addMemory(memory)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async updateMemory(memory: MemoryDb): Promise<Memory> {
        return new Promise((resolve, reject) => {
            this.memoryRepository.updateMemory(memory)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async deleteMemory(id: number): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            this.memoryRepository.deleteMemory(id)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

}