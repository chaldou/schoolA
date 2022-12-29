import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AvanceInscription } from 'src/entities/avance-inscription.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [AvanceInscription] }),
    ],
    providers:[],
    exports:[]
})
export class AvanceInscriptionModule {}
