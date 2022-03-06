import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcServerOptions = {
  transport: Transport.GRPC,
  options: {
    url: '127.0.0.1:6379',
    protoPath: join('src/hero/hero.proto'),
    package: 'hero',
  },
};
