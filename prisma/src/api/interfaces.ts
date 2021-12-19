export interface User {
  name: string;
  email: string;
  dni: number;
  apellido: string;
  password: string;
}

export interface Product {
  title: string;
  description: string;
  precio: number;
  activo: boolean;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
}

export interface Role {
  name: string
}
