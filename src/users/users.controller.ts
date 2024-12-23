import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // first inject the user service in this class
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): object[] {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  // the parseIntPipe will convert the id to a number
  findOne(@Param('id', ParseIntPipe) id: number): object {
    return this.usersService.findOne(id);
  }

  @Post()
  createUser(
    @Body() user: { name: string; role: 'INTERN' | 'ENGINEER' | 'ADMIN' },
  ): object {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: { name?: string; role?: 'INTERN' | 'ENGINEER' | 'ADMIN' },
  ): object {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): object {
    return this.usersService.delete(id);
  }
}
