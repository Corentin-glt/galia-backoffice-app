/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateWineInput } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: createWine
// ====================================================

export interface createWine_createWine_grapes {
  __typename: 'Grape';
  id: string;
  variety: string;
}

export interface createWine_createWine_picture {
  __typename: 'File';
  id: string;
  signedUrl: string | null;
  key: string;
}

export interface createWine_createWine_wineyard {
  __typename: 'Wineyard';
  id: string;
  name: string;
}

export interface createWine_createWine {
  __typename: 'Wine';
  id: string;
  description: string;
  grapes: createWine_createWine_grapes[];
  millenisme: number;
  name: string;
  picture: createWine_createWine_picture | null;
  wineyard: createWine_createWine_wineyard;
}

export interface createWine {
  createWine: createWine_createWine;
}

export interface createWineVariables {
  createWineInput: CreateWineInput;
}
