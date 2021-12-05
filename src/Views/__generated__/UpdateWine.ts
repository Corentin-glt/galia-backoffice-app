/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateWineInput } from './../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: UpdateWine
// ====================================================

export interface UpdateWine_updateWine_grapes {
  __typename: 'Grape';
  id: string;
  variety: string;
}

export interface UpdateWine_updateWine_picture {
  __typename: 'File';
  id: string;
  signedUrl: string | null;
  key: string;
}

export interface UpdateWine_updateWine_wineyard {
  __typename: 'Wineyard';
  id: string;
  name: string;
}

export interface UpdateWine_updateWine {
  __typename: 'Wine';
  id: string;
  description: string;
  grapes: UpdateWine_updateWine_grapes[];
  millenisme: number;
  name: string;
  picture: UpdateWine_updateWine_picture | null;
  wineyard: UpdateWine_updateWine_wineyard;
}

export interface UpdateWine {
  updateWine: UpdateWine_updateWine;
}

export interface UpdateWineVariables {
  input: UpdateWineInput;
}
