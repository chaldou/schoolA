import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Pension } from 'src/entities/pension.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [Pension] }),
    ],
    providers:[],
    exports:[]
})
export class PensionModule {}
