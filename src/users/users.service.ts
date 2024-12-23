import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // dummy users array
  private users = [
    { id: 1, name: 'John Doe', role: 'INTERN' },
    { id: 2, name: 'Jane Doe', role: 'ENGINEER' },
    { id: 3, name: 'Alice', role: 'ENGINEER' },
    { id: 4, name: 'Bob', role: 'ADMIN' },
    { id: 5, name: 'Eve', role: 'INTERN' },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) return this.users.filter((user) => user.role === role);
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string; role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    // generate a new id
    const id = this.users.length + 1;
    this.users.push({ id, ...user });
    return user;
  }

  update(
    id: number,
    userUpdate: { name?: string; role?: 'INTERN' | 'ENGINEER' | 'ADMIN' },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    const user = this.users[index];
    this.users = this.users.filter((user) => user.id !== id);
    return user;
  }
}
