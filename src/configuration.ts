import { App, Configuration, ILifeCycle } from '@midwayjs/core';
import { join } from 'path';
import * as egg from '@midwayjs/web';
import * as socketio from '@midwayjs/socketio';

@Configuration({
  imports: [egg, socketio],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration implements ILifeCycle {
  @App('egg')
  app: egg.Application;

  async onReady() {}
}
