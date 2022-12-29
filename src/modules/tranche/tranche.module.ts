import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Tranche } from 'src/entities/tranche.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [Tranche] }),
    ],
    providers:[],
    exports:[]
})
export class TrancheModule {}
