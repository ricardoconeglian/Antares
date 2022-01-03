import {BaseResourceModel} from '../../../../../shared/models/base-resource.model'
import { CadastroInsumo } from '../../cadastro-insumo/shared/cadastro-insumo.model';
import { UnidadeEngenharia } from '../../unidade-engenharia/shared/unidade-engenharia.model';

export class EstoqueInsumo extends BaseResourceModel {
  static EstoqueInsumo: EstoqueInsumo;

  constructor(
    public id?: number,
    public descricao_insumo?: CadastroInsumo,
    public unidade?: UnidadeEngenharia,
    public quantidade?: number,
    public estoque_minimo?: number,
    public valor_unitario?: number,
    public valor_total?: number,

  ){
    super()
  }

  static fromJson(jsonData: any): EstoqueInsumo {
    return Object.assign(new EstoqueInsumo(), jsonData)
  }
}
