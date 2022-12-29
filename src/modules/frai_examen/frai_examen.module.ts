import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { FraisExamen } from 'src/entities/frais-exament.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [FraisExamen] }),
    ],
    providers:[],
    exports:[]
})
export class FraiExamenModule {}
