import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'List of users';
  }

  @Get(':id')
  getUser(@Param() id: string): object {
    return { user: id };
  }

  @Post()
  createUser(@Body() user: { name: string }): object {
    return user;
  }

  @Patch(':id')
  updateUser(@Param() id: string, @Body() user: { name: string }): object {
    return { user: id, ...user };
  }

  @Delete(':id')
  deleteUser(@Param() id: string): object {
    return { user: id };
  }
}
