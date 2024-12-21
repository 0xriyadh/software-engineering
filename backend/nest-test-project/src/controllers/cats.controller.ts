import { Controller, Get } from '@nestjs/common';

@Controller('cats') // The @Controller() is a class decorator that defines a controller. The optional argument 'cats' is a path prefix that ensures that all routes defined within the controller are prefixed with /cats.
export class CatsController {
  @Get() // @Get is a method decorator that binds the route /cats to the findAll() method. The method name is arbitrary and does not impact the behavior of the application. We can name it anything we want.
  findAll(): string {
    return 'This action returns all cats';
  }
  @Get('breed')
  getBreed(): string {
    return 'This action returns a specific cat breed';
  }
}
