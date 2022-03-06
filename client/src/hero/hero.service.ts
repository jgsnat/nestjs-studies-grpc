import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from './client.config';

interface HeroById {
  id: number;
}

interface Hero {
  id: number;
  name: string;
}

interface HeroesService {
  FindOne(request: HeroById): Promise<Hero>;
}

@Injectable()
export class HeroService implements OnModuleInit {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;
  private service: HeroesService;

  onModuleInit() {
    this.service = this.client.getService<HeroesService>('HeroesService');
  }

  findById(id: number): Promise<Hero> {
    return this.service.FindOne({ id });
  }
}
