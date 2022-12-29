import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AvanceTranche } from 'src/entities/avance-tranche.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [AvanceTranche] })
    ],
    providers:[],
    exports:[]
})
export class AvanceTrancheModule {}
