import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Global()
@Module ({
    providers:[PrismaService],
    exports: [PrismaService],
    // controllers: [],
}) 
export class PrismaModule {}


/*
Module: Decorator của NestJS để đánh dấu một class là một module.

Global: Decorator này đánh dấu rằng PrismaModule là một module toàn cục, nghĩa là nó sẽ được sử dụng trong toàn bộ ứng dụng và có thể được inject vào bất kỳ module nào.

PrismaService: Import service PrismaService từ file prisma.service, mà ta giả sử là một service được tạo để tương tác với cơ sở dữ liệu thông qua Prisma.
*/

/*
@Global(): Decorator để đánh dấu rằng module này là global. Các providers và controllers trong module này có thể được sử dụng trong toàn bộ ứng dụng.

@Module: Decorator này đánh dấu rằng PrismaModule là một module trong NestJS.

providers: [PrismaService]: Khai báo rằng PrismaService là một provider của module. Các providers là những thành phần có thể được inject vào các controllers, services, hoặc module khác.

exports: [PrismaService]: Khai báo rằng PrismaService là một thành phần có thể được sử dụng bên ngoài module. Nếu một module khác import PrismaModule, nó có thể sử dụng PrismaService mà không cần phải khai báo lại.

Tóm lại, PrismaModule định nghĩa một module toàn cục trong NestJS và export PrismaService để có thể sử dụng nó ở bất kỳ module nào trong ứng dụng.
*/