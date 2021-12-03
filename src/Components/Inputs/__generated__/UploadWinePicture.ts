/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadWinePicture
// ====================================================

export interface UploadWinePicture_uploadWinePicture {
  __typename: 'Wine';
  id: string;
}

export interface UploadWinePicture {
  uploadWinePicture: UploadWinePicture_uploadWinePicture;
}

export interface UploadWinePictureVariables {
  file: GraphQLUpload;
  uploadWinePictureId: string;
}
