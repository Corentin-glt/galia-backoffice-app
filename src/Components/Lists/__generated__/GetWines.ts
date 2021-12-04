/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindWinesInput } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetWines
// ====================================================

export interface GetWines_winesConnection_items_grapes {
  __typename: 'Grape';
  id: string;
  variety: string;
}

export interface GetWines_winesConnection_items_picture {
  __typename: 'File';
  id: string;
  signedUrl: string | null;
  key: string;
}

export interface GetWines_winesConnection_items_wineyard {
  __typename: 'Wineyard';
  id: string;
  name: string;
}

export interface GetWines_winesConnection_items {
  __typename: 'Wine';
  id: string;
  description: string;
  grapes: GetWines_winesConnection_items_grapes[];
  millenisme: number;
  name: string;
  picture: GetWines_winesConnection_items_picture | null;
  wineyard: GetWines_winesConnection_items_wineyard;
}

export interface GetWines_winesConnection {
  __typename: 'WinesConnection';
  count: number;
  items: GetWines_winesConnection_items[];
}

export interface GetWines {
  winesConnection: GetWines_winesConnection;
}

export interface GetWinesVariables {
  findWinesInput: FindWinesInput;
}
