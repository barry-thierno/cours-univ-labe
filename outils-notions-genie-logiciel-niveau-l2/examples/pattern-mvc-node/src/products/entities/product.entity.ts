import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @ApiProperty({ example: 1, description: 'The unique id of the product' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Farine', description: 'The name of the product' })
  @Column()
  label: string;

  @ApiProperty({ example: 1500, description: 'The price of the product' })
  @Column()
  price: number;

  @ApiProperty({
    example: 'Kg',
    description: 'The measure unit of the product',
  })
  @Column()
  unitOfMeasure: string;

  @ApiProperty({
    example: 'Denrée',
    description: 'The category of the Product',
  })
  @Column()
  category: string;
}
