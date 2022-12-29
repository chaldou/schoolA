/* eslint-disable prettier/prettier */
import { EntityManager, EntityRepository, FilterQuery, NotFoundError, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CategoriePersonnel } from 'src/entities/categorie-personnel.entity';
import { SalaireBaseService } from '../salaire_base/salaire-base.service';
import { RetenuService } from '../retenu_salarial/retenu.service';
import { PrimeService } from '../prime/prime.service';
import { Salaire } from 'src/entities/salaire.entity';
import { RetenuPersonnelService } from '../retenu_personnel/retenu-personnel.service';
import { PrimePersonnelService } from '../prime_personnel/prime-personnel.service';
import { SalaireCreateInput } from './dto/salaire.input';
import { PersonnelService } from '../personnel/personnel.service';

@Injectable()
export class SalaireService {
  constructor(
    @InjectRepository(Salaire)
    private salaireRepository: EntityRepository<Salaire>,
    private salaireBaseeService: SalaireBaseService,
    private retenuPersonnel : RetenuPersonnelService,
    private primePersonnel: PrimePersonnelService,
    private personnel : PersonnelService,
    private readonly em: EntityManager,
  ) {}

  async create(
    input: SalaireCreateInput,
  ): Promise<Salaire> {

    const retenu = input.retenu
        ? await this.retenuPersonnel.findByOne(input.prime.ID)
        : await this.retenuPersonnel.create(input.retenu)


    const prime = input.prime
        ? await this.primePersonnel.findByOne(input.prime)
        : await this.primePersonnel.create(input.prime)

    const personnel = input.retenu
        ? await this.personnel.findByOne(input.personnel)
        : await this.personnel.createPersonnel(input.personnel)

    var salaire_brute = personnel.categorie.getEntity().salaireBase.getEntity().montant + prime.prime.getEntity().montant

    // check categorie prime
    const primes = personnel.prime.loadItems()
    const retenus = personnel.retenue.loadItems()
    var listPrimes = (await primes).length

    const salaire = new Salaire()
    salaire.montant = salaire_brute

    const saveSalire = this.salaireRepository.persistAndFlush(salaire)

    return salaire
  }

  findByOne(filters: FilterQuery<Salaire>): Promise<Salaire | null> {
    return this.salaireRepository.findOne(filters);
  }

  findById(id:string){
    return this.salaireRepository.findOne(+id)
  }

  getAll(): Promise<Salaire[]> {
    return this.salaireRepository.findAll()
  }
  
//   async update(categorie: CategoriePersonnel, input: CategoriePersonnelUpdate): Promise<CategoriePersonnel> {
    
//     if (input.prime) {
//       const prime =
//       input.prime?.ID &&
//         (await this.prime.findByOne({ id: input.prime?.ID }));

//       if (!prime) {
//         throw new NotFoundError('prime no exist' || '');
//       }
//       this.prime.update(prime, input.prime);
//     } 
    
//     if (input.retenu) {
//       const retenu =
//       input.retenu?.ID &&
//         (await this.retenu.findByOne({ id: input.retenu?.ID }));

//       if (!retenu) {
//         throw new NotFoundError('retenu no exist' || '');
//       }
//       this.retenu.update(retenu, input.retenu);
//     } 

//     if (input.salaireBase) {
//       const salaire =
//       input.salaireBase?.ID &&
//         (await this.salaireBaseeService.findByOne({ id: input.salaireBase?.ID }));

//       if (!salaire) {
//         throw new NotFoundError('salaire no exist' || '');
//       }
//       this.salaireBaseeService.update(salaire, input.salaireBase);
//     } 

//     wrap(categorie).assign({
//       nom: input.nom || categorie.nom,
//       description: input.description || categorie.description
//     });

//     await this.salaireRepository.persistAndFlush(categorie);

//     return categorie;
//   }

  async deleteUser(){

  }

}