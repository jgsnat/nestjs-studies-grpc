import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '127.0.0.1:6379',
    package: 'hero',
    protoPath: join(__dirname, '/hero.proto'),
  },
};
