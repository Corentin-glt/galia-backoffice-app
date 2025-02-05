/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateWineInput {
  description: string;
  grapeIds: string[];
  millenisme: number;
  name: string;
  wineyardId: string;
}

export interface PaginationInput {
  limit?: number | null;
  offset?: number | null;
}

export interface UpdateWineInput {
  description?: string | null;
  grapeIds?: string[] | null;
  id: string;
  millenisme?: number | null;
  name?: string | null;
  wineyardId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
