import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Salle } from 'src/entities/salle.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [Salle] }),
    ],
    providers:[],
    exports:[]
})
export class SalleModule {}
