/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationInput } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetWineyards
// ====================================================

export interface GetWineyards_wineyardsConnection_items_wines {
  __typename: 'Wine';
  id: string;
}

export interface GetWineyards_wineyardsConnection_items {
  __typename: 'Wineyard';
  id: string;
  name: string;
  wines: GetWineyards_wineyardsConnection_items_wines[] | null;
}

export interface GetWineyards_wineyardsConnection {
  __typename: 'WineyardsConnection';
  count: number;
  items: GetWineyards_wineyardsConnection_items[];
}

export interface GetWineyards {
  wineyardsConnection: GetWineyards_wineyardsConnection;
}

export interface GetWineyardsVariables {
  pagination: PaginationInput;
}
