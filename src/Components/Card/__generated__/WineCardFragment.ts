/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WineCardFragment
// ====================================================

export interface WineCardFragment_grapes {
  __typename: 'Grape';
  id: string;
  variety: string;
}

export interface WineCardFragment_picture {
  __typename: 'File';
  id: string;
  url: string;
  key: string;
}

export interface WineCardFragment_wineyard {
  __typename: 'Wineyard';
  id: string;
  name: string;
}

export interface WineCardFragment {
  __typename: 'Wine';
  id: string;
  description: string;
  grapes: WineCardFragment_grapes[];
  millenisme: number;
  name: string;
  picture: WineCardFragment_picture | null;
  wineyard: WineCardFragment_wineyard;
}
