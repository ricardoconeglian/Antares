import {BaseResourceModel} from '../../../../../shared/models/base-resource.model'

export class CadastroInsumo extends BaseResourceModel {
  static CadastroInsumo: CadastroInsumo;

  constructor(
    public id?: number,
    public codigo_sap_insumo?: number,
    public descricao_insumo?: string,
  ){
    super()
  }

  static fromJson(jsonData: any): CadastroInsumo {
    return Object.assign(new CadastroInsumo(), jsonData)
  }
}
