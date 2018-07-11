import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { getConnection } from '../node_modules/typeorm';

declare const module: any;

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

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(async () => {
            await getConnection().close();
            await app.close();
        });
    }
}
bootstrap();
