import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { FraisInscription } from 'src/entities/frais-inscription.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [FraisInscription] }),
    ],
    providers:[],
    exports:[]
})
export class FraisInscriptionModule {}
