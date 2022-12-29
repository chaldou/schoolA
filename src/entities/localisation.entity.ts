import {
    Collection,
    Entity,
    Enum,
    IdentifiedReference,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryKey,
    Property,
  } from '@mikro-orm/core';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Localisation {
  @Field(() => ID)
  @PrimaryKey()
  id!: string;

  @Field({ nullable: true })
  @Property({nullable:true})
  ville!: string;

  @Field({ nullable: true })
  @Property({nullable:true})
  region!: string;

  @Field({ nullable: true })
  @Property({nullable:true})
  pays!: string;

  @Field({ nullable: true })
  @Property({nullable:true})
  quartier!: string;

  @Field({ nullable: true })
  @Property({nullable:true})
  longitude!: string;

  @Field({ nullable: true })
  @Property({nullable:true})
  latitude!: string;

  @Field({ nullable: true })
  @Property({nullable:true})
  bp!: string;

  @Property({ onCreate: () => new Date() })
  created = new Date();
}