import {BaseResourceModel} from '../../../../../shared/models/base-resource.model'

export class ModoManufatura extends BaseResourceModel {
  static ModoManufatura: ModoManufatura;

  constructor(
    public id?: number,
    public  modo_manufatura?: string,
  ){
    super()
  }

  static fromJson(jsonData: any): ModoManufatura {
    return Object.assign(new ModoManufatura(), jsonData)
  }
}
