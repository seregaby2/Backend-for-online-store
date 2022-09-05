export interface IPostRequest {
  id?: number;
  dataAuth: ISignInForm;
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