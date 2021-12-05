/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGrapesFromSelect
// ====================================================

export interface GetGrapesFromSelect_grapesConnection_items {
  __typename: 'Grape';
  id: string;
  variety: string;
}

export interface GetGrapesFromSelect_grapesConnection {
  __typename: 'GrapesConnection';
  items: GetGrapesFromSelect_grapesConnection_items[];
}

export interface GetGrapesFromSelect {
  grapesConnection: GetGrapesFromSelect_grapesConnection;
}
