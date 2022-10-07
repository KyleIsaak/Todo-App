import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/Todo.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [RouterModule.register([{
    path: 'todo',
    module: TodoModule,
  }]),RenderModule, MongooseModule.forRoot('mongodb://127.0.0.1/todo?directConnection=true'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
