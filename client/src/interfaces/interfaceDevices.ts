export interface IType {
  id?: number;
  name: string;
}

export interface IBrand {
  id?: number;
  name: string;
}

export interface IDevices {
  id?: number;
  name?: string;
  price?: number;
  img?: string;
  rating?: number;
  brandId?: string;
  typeId?: string;
  info?: Iinfo[];
}

interface Iinfo {
  id: number;
  title: string;
  description: string;
}
