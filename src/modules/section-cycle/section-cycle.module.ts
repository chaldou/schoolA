import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { SectionCycle } from 'src/entities/section-cycle.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [SectionCycle] }),
    ],
    providers:[],
    exports:[]
})
export class SectionCycleModule {}
