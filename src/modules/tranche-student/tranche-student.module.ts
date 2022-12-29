import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { TrancheStudent } from 'src/entities/tranche-student.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [TrancheStudent] }),
    ],
    providers:[],
    exports:[]
})
export class TrancheStudentModule {}
