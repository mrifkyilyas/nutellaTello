import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import * as dotenv from 'dotenv';
import * as path from 'path';

@Module({
	imports: [],
    providers: [
    	ConfigService,
    	{
    		provide: 'DOTENV_INIT',
    		useValue: dotenv.config({ path: path.join(__dirname, "../../.env") }),
    	}
    ],
    exports: [ConfigService],
    controllers: [],
})
export class ConfigModule {}
