import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '../node_modules/@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, new FastifyAdapter()),
        options = new DocumentBuilder()
            .setTitle('Market api')
            .setDescription('The market API description')
            .setVersion('1.0')
            .addTag('market')
            .build(),
        document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
