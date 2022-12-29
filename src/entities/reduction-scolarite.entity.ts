import {
    Collection,
    Entity,
    Enum,
    Filter,
    IdentifiedReference,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryKey,
    Property,
    Unique,
  } from '@mikro-orm/core';
  import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategorieEleve } from './categorie-eleve.entity';
import { Personnel } from './pesonnel.entity';
import { Prime } from './prime.entity';
import { Retenue } from './retenu-salaire.entity';


@Entity()
@ObjectType()
export class ReductionScolarite {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field({ nullable: true })
  @Property({ nullable: true })
  nom!: string;

  @Property({ onCreate: () => new Date() })
  createdAt = new Date();

  @Field({ defaultValue:0 })
  @Property({ default:0 })
  montant!: number;

  @OneToMany(()=>CategorieEleve, (categorie) => categorie.reductionScolarite)
  categorie = new Collection<CategorieEleve>(this)
}