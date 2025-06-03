import { type ContactMessage, type InsertMessage } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<ContactMessage>;
  getMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, ContactMessage>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async createMessage(insertMessage: InsertMessage): Promise<ContactMessage> {
    const id = this.currentId++;
    const message: ContactMessage = { ...insertMessage, id };
    this.messages.set(id, message);
    return message;
  }

  async getMessages(): Promise<ContactMessage[]> {
    return Array.from(this.messages.values());
  }
}

export const storage = new MemStorage();
