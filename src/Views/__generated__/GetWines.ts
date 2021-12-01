/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindWinesInput } from './../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetWines
// ====================================================

export interface GetWines_winesConnection_items {
  __typename: 'Wine';
  id: string;
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
