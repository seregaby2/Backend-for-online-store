export interface IPostRequest {
  id?: number;
  dataAuth: IUser;
  isLoading: boolean;
  isTokenActive: boolean;
  isAdmin: string;
  decodeToken: IUser;
}

export interface ISignInForm {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  exp?: number;
  iat?: number;
  id?: number;
  role: string;
}
