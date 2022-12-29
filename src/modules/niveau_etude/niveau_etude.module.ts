import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { NiveauEtude } from 'src/entities/niveau-etude.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [NiveauEtude] }),
    ],
    providers:[],
    exports:[]
})
export class NiveauEtudeModule {}
