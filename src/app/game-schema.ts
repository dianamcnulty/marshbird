export interface GameSchema {
  id: string;
  name: string;
  bannerImgPath: string | undefined;
  instructions: Inscructions;
  history: History;
  purchase: PurchaseDetails;

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
  historyImg: string;
}
export interface PurchaseDetails {
  productDescription: string;
  etsyURL: string | undefined;
  price: string | undefined;
  imgPaths: Array<string> | undefined;
}