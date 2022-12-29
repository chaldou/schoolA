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
import { AvanceTranche } from './avance-tranche.entity';
import { Personnel } from './pesonnel.entity';
import { Student } from './student.entity';
import { Tranche } from './tranche.entity';

@Entity()
@ObjectType()
export class TrancheStudent {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  name!: string;

  @Field()
  @Property()
  description!: string;

  @Property({ onCreate: () => new Date() })
  createdAt = new Date();

  @Field(() => Date)
  @Property({ onCreate: () => new Date() })
  paiementDate = new Date();

  @Field({ defaultValue:0 })
  @Property({ default:0 })
  montant!: number;

  @ManyToOne(() => Student ,{
    nullable:false,
    onDelete:'CASCADE'
  })
  student!:IdentifiedReference<Student>|null

  @ManyToOne(() => Tranche ,{
    nullable:false,
    onDelete:'CASCADE'
  })
  tranche!:IdentifiedReference<Tranche>|null

  @OneToMany(()=>AvanceTranche, (avance) => avance.trancheStudent)
  avancheTranche = new Collection<AvanceTranche>(this)

}