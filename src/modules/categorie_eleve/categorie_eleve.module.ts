import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CategorieEleve } from 'src/entities/categorie-eleve.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [CategorieEleve] }),
    ],
    providers:[],
    exports:[]
})
export class CategorieEleveModule {}
