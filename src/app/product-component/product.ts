export class Product {
  productCode: number;
  productDescription: string;
  unitPrice: number;
  quantity: number;
  category: string;
  manufacturer: string;

  constructor(
    productCode: number,
    productDescription: string,
    unitPrice: number,
    quantity: number,
    category: string,
    manufacturer: string
  ) {
    this.productCode = productCode;
    this.productDescription = productDescription;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.category = category;
    this.manufacturer = manufacturer;
  }
}
