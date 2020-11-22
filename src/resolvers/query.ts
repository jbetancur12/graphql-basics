import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
  Query: {
    hola(): string {
      return 'Hola Mundo!';
    },
    holaConNombre(__: void, { nombre }): string {
      return `Hola Mundo ${nombre}`;
    },
    holaAlCursoGraphQL(): string {
      return 'Hola Mundo al curso de graphQL';
    },
  },
};

export default query;
