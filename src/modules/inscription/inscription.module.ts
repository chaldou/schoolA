import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Inscription } from 'src/entities/inscription.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [Inscription] }),
    ],
    providers:[],
    exports:[]
})
export class InscriptionModule {}
