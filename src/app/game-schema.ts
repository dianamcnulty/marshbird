export interface GameSchema {
  id: string;
  name: string;
  bannerImgPath: string | undefined;
  tileImgPath: string | undefined;
  instructions: Inscructions;
  history: History;
  purchase: PurchaseDetails;
  available: boolean;
  categories: Array<string>;
  description: string;
};
export interface Inscructions {
  description: string,
  players: number;
  setup: string;
  objective: string;
  rules: string;
  setupImgFile: string | undefined;
  playImgFile: string | undefined;
}
export interface History {
  story: string;
  historyImg: imgObj;
}
export interface PurchaseDetails {
  productDescription: string;
  etsyURL: string | undefined;
  price: string | undefined;
  imageList: Array<imgObj> | undefined;
}
export interface imgObj {
  path: string, //starting from assets/images/
  alt: string
}