import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { config } from "src/config";

export class Application {
    public static async main(): Promise<void>{
        const app =  await NestFactory.create(AppModule);
        app.listen(config.PORT,()=>{
            console.log(`Server is running on port:  ${config.PORT}`)
        })
    }
}