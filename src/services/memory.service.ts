
import MemoryRepository from "../repository/memory.repository";
import Memory from "../interface/memory";
import MemoryDb from "../interface/memory";

export class MemoryService {
    memoryRepository: MemoryRepository;

    constructor() {
        this.memoryRepository = new MemoryRepository();
    }

    async getAllMemories(params: any): Promise<Memory[]> {
        return new Promise((resolve, reject) => {
            this.memoryRepository.getAllMemories(params)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    async getMemory(memory: MemoryDb): Promise<Memory> {
        return new Promise((resolve, reject) => {
            this.memoryRepository.getMemory(memory.memory_id)
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

    async deleteMemory(memory: MemoryDb): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            this.memoryRepository.deleteMemory(memory.memory_id)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

}