import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  price: number;

  @Column()
  unitOfMeasure: string;

  @Column()
  category: string;
}
