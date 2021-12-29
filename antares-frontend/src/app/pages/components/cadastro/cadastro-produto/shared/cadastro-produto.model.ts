import {BaseResourceModel} from '../../../../../shared/models/base-resource.model'

export class CadastroProduto extends BaseResourceModel {
  static CadastroProduto: CadastroProduto;

  constructor(
    public id?: number,
    public codigo_sap_produto?: number,
    public nome_produto?: string,
    public descricao_produto?: string,
    public utilizacao?: string
  ){
    super()
  }

  static fromJson(jsonData: any): CadastroProduto {
    return Object.assign(new CadastroProduto(), jsonData)
  }
}
