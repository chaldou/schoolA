import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Student } from 'src/entities/student.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [Student] }),
    ],
    providers:[],
    exports:[]
})
export class StudentModule {}
