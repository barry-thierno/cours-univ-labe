import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    required: true,
    type: 'string',
    name: 'label',
    description: 'product label',
  })
  label: string;

  @ApiProperty({
    required: true,
    type: 'number',
    name: 'price',
    description: 'product price',
  })
  price: number;

  @ApiProperty({
    required: true,
    type: 'string',
    name: 'devise',
    description: 'product currency',
  })
  devise: string;

  @ApiProperty({
    required: true,
    type: 'string',
    name: 'unitOfMeasure',
    description: 'product unit of measure',
  })
  unitOfMeasure: string;

  @ApiProperty({
    required: true,
    type: 'string',
    name: 'category',
    description: 'product category',
  })
  category: string;
}
