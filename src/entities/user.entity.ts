import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyEntity } from '.';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @ManyToMany(() => CompanyEntity, (company) => company.users)
  @JoinTable({
    name: 'user_company',
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'companyId',
      referencedColumnName: 'id',
    },
  })
  public companies!: CompanyEntity[];

  @Column()
  public lastActivity!: Date;
}
