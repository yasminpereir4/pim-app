import { ProductByIdParams } from "../pages/Home/ProductById";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Login: undefined;
      Profile: undefined;
      Contact: undefined;
      Purpose: undefined;
      Register: undefined;
      TermsOfUse: undefined;
      AllProducts: undefined;
      ProductById: ProductByIdParams;
    }
  }
}
