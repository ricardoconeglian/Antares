import {BaseResourceModel} from '../../../../../shared/models/base-resource.model'

export class UnidadeEngenharia extends BaseResourceModel {
  static UnidadeEngenharia: UnidadeEngenharia;

  constructor(
    public id?: number,
    public descricao?: string,
    public unidade?: string
  ){
    super()
  }

  static fromJson(jsonData: any): UnidadeEngenharia {
    return Object.assign(new UnidadeEngenharia(), jsonData)
  }
}
