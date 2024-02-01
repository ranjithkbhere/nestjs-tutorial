import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserGuard } from './user.guard';
import { UserInterceptor } from './user.interceptor';
import { UserFilter } from './user.filter';

@UseInterceptors(UserInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseFilters(UserFilter)
  findAll() {
    throw new UnauthorizedException();
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('id', id, typeof id);
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UseGuards(UserGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
