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
import { Periode } from './periode.entity';
import { Personnel } from './pesonnel.entity';
import { PrimePersonnel } from './prime-personnel.entity';
import { RetenuPersonnel } from './retenu-personnel.entity';


@Entity()
@ObjectType()
export class Salaire {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field({ nullable: true })
  @Property({ nullable: true })
  description!: string;

  
  @Field({ defaultValue: false })
  @Property({ default: false })
  payer!: boolean;


  @Field({ defaultValue: 0 })
  @Property({ default: 0 })
  montant!: number ;
  
// relation with another Entites
  @ManyToOne(() => Periode ,{
    nullable:false,
    onDelete:'CASCADE'
  })
  periode!:IdentifiedReference<Periode>|null

  @ManyToOne(() => Personnel ,{
    nullable:false,
    onDelete:'CASCADE'
  })
  personnel!:IdentifiedReference<Personnel>|null

  @ManyToOne(() => PrimePersonnel ,{
    nullable:false,
    onDelete:'SET NULL'
  })
  primePersonnel!:IdentifiedReference<PrimePersonnel>|null

  @ManyToOne(() => RetenuPersonnel ,{
    nullable:false,
    onDelete:'SET NULL'
  })
  retenuPersonnel!:IdentifiedReference<RetenuPersonnel>|null

}