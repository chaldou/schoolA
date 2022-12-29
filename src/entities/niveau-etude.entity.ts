import {
    Collection,
    Entity,
    Enum,
    IdentifiedReference,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryKey,
    Property,
  } from '@mikro-orm/core';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Cycle } from './cycle.entity';
import { FraisExamen } from './frais-exament.entity';
import { Salle } from './salle.entity';
import { SectionCycle } from './section-cycle.entity';


@Entity()
@ObjectType()
export class NiveauEtude{
    @Field(() => ID)
    @PrimaryKey()
    id!: string;
  
    @Field({ nullable: true })
    @Property({nullable:true})
    name!: string;

    @Field({ nullable: true })
    @Property({nullable:true})
    description!: string;

    @Property({ onCreate: () => new Date() })
    createdAt = new Date();

    @ManyToOne(() => SectionCycle, {
        nullable: true,
        onDelete: 'CASCADE',
      })
    sectionCycle!: IdentifiedReference<SectionCycle> | null;

    @OneToMany(() => Salle, (salle) => salle.niveau)
    salle = new Collection<Salle>(this);
    
}