import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Parent } from 'src/entities/parent.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [Parent] }),
    ],
    providers:[],
    exports:[]
})
export class ParentModule {}
