export interface  UserRequest{
  firstName: string;
  lastName: string;
  email: string;
}


export interface User extends UserRequest{
  id: string | number;
}
