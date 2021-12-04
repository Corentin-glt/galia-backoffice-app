/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWineyardsFromSelect
// ====================================================

export interface GetWineyardsFromSelect_wineyardsConnection_items {
  __typename: 'Wineyard';
  id: string;
  name: string;
}

export interface GetWineyardsFromSelect_wineyardsConnection {
  __typename: 'WineyardsConnection';
  items: GetWineyardsFromSelect_wineyardsConnection_items[];
}

export interface GetWineyardsFromSelect {
  wineyardsConnection: GetWineyardsFromSelect_wineyardsConnection;
}
