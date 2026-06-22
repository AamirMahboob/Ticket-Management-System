export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "customer" | "agent" | "admin";
}
