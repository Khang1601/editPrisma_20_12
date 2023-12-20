import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

// PrismaService mở rộng từ PrismaClient, nghĩa là nó kế thừa tất cả các phương thức của PrismaClient, giúp chúng ta tương tác với cơ sở dữ liệu.

// onModuleInit: Phương thức được triển khai từ OnModuleInit interface. Trong trường hợp này, nó được sử dụng để kết nối với cơ sở dữ liệu khi module khởi tạo.

// await this.$connect(): Gọi phương thức $connect của PrismaClient, đảm bảo rằng kết nối đến cơ sở dữ liệu đã được thiết lập trước khi ứng dụng bắt đầu hoạt động.

// Tổng cộng, PrismaService là một service trong NestJS được sử dụng để tương tác với cơ sở dữ liệu thông qua PrismaClient. Phương thức onModuleInit đảm bảo rằng kết nối đến cơ sở dữ liệu được thiết lập khi module khởi tạo.