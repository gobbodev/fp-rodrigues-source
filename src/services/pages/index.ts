import { api } from "codiedigital/dist/cjs/services/api";
import { IPageInformations } from "src/interfaces/generics";

export async function getPageData(url: string | string[] | undefined) {
  const response = await api
    .get<IPageInformations>(`pages/${url}`)
    .then((r) => r.data);

  return response;
}
