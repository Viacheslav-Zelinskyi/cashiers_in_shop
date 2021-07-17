export interface Cashiers {
  id: Number
  name: String
  age: Number
  sex: Sex
  yearsofexperience: Number
  shopId: Number
  previouswork: Shops
}

export interface Shop {
  id: Number
  shop: Shops
  city: Cities
  address: String
}

export interface CashRegister {
  id: Number
  shopid: Number
  isworking: Boolean
  cashnumber: Number
}

enum Sex {
  'male',
  'female',
}
enum Shops {
  'ATB',
  'Silpo',
  'Arsen',
  'Auchan',
}
enum Cities {
  'Львів',
  'Вінниця',
  'Київ',
  'Житомир',
  'Дніпро',
}
