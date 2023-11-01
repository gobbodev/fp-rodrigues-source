interface IHead {
  pageTitle: string;
  metaDescription: string;
  imageOpenGraph: string;
  headScripts: string;
}

interface IBody {
  bodyScripts: string;
}

interface IObjeto {
  subCategoriaId: number;
  titulo: string;
  descricao: string;
  imagem: string;
  url: string;
  id: number;
  ativo: boolean;
  dataCriacao: Date;
  dataEdicao: Date;
}

interface IProduto {
  titulo: string;
  imagem: string;
  url: string;
  id: number;
}

interface IServico {
  categoriaId: number;
  titulo: string;
  descricao: string;
  id: number;
}

interface IDepoimento {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  id: number;
  ativo: boolean;
  dataCriacao: Date;
  dataEdicao: Date;
}

interface IMarca {
  fileData: string;
  slug: string;
  placeReceived: string;
  id: number;
}

interface IPageInformations {
  head: IHead;
  body: IBody;
  descricao: string;
  imagem: string;
  objetos: IObjeto[];
  nossosProdutosDesc: string;
  produtos: IProduto[];
  servicosDesc: string;
  servicos: IServico[];
  depoimentosDesc: string;
  depoimentos: IDepoimento[];
  marcas: IMarca[];
}

export type {
  IHead,
  IBody,
  IObjeto,
  IProduto,
  IServico,
  IDepoimento,
  IMarca,
  IPageInformations,
};
