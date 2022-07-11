import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '.';

@Entity('company')
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @ManyToMany(() => UserEntity, (user) => user.companies)
  public users!: UserEntity[];

  public countUsers!: number;
}
