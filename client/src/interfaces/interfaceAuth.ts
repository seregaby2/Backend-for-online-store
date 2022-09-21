export interface IPostRequest {
  id?: number;
  dataAuth: IUser;
  isLoading: boolean;
  errorAuth: string;
  errorLogin: string;
  errorGetUser: string;
  errorDeleteUser: string;
  isTokenActive: boolean;
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
