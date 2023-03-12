import { NestFactory } from '@nestjs/core';
import { SampleModule } from './sample.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(SampleModule);
  await app.listen(3000);
}
bootstrap();
