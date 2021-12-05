/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWine
// ====================================================

export interface GetWine_wine_grapes {
  __typename: 'Grape';
  id: string;
  variety: string;
}

export interface GetWine_wine_picture {
  __typename: 'File';
  id: string;
  signedUrl: string | null;
  key: string;
}

export interface GetWine_wine_wineyard {
  __typename: 'Wineyard';
  id: string;
  name: string;
}

export interface GetWine_wine {
  __typename: 'Wine';
  id: string;
  description: string;
  grapes: GetWine_wine_grapes[];
  millenisme: number;
  name: string;
  picture: GetWine_wine_picture | null;
  wineyard: GetWine_wine_wineyard;
}

export interface GetWine {
  wine: GetWine_wine;
}

export interface GetWineVariables {
  id: string;
}
