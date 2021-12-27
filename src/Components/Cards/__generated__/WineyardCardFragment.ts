/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WineyardCardFragment
// ====================================================

export interface WineyardCardFragment_wines {
  __typename: 'Wine';
  id: string;
}

export interface WineyardCardFragment {
  __typename: 'Wineyard';
  id: string;
  name: string;
  wines: WineyardCardFragment_wines[] | null;
}
