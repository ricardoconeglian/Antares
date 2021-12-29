import {BaseResourceModel} from '../../../../../shared/models/base-resource.model'

export class TipoManufatura extends BaseResourceModel {
  static TipoManufatura: TipoManufatura;

  constructor(
    public id?: number,
    public  tipo_manufatura?: string,
  ){
    super()
  }

  static fromJson(jsonData: any): TipoManufatura {
    return Object.assign(new TipoManufatura(), jsonData)
  }
}
