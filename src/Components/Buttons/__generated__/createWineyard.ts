/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateWineyardInput } from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: createWineyard
// ====================================================

export interface createWineyard_createWineyard_wines {
  __typename: 'Wine';
  id: string;
}

export interface createWineyard_createWineyard {
  __typename: 'Wineyard';
  id: string;
  name: string;
  wines: createWineyard_createWineyard_wines[] | null;
}

export interface createWineyard {
  createWineyard: createWineyard_createWineyard;
}

export interface createWineyardVariables {
  createWineyardInput: CreateWineyardInput;
}
