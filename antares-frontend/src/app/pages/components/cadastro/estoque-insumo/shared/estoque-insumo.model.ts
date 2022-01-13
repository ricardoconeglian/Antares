import {BaseResourceModel} from '../../../../../shared/models/base-resource.model'
import { CadastroInsumo } from '../../cadastro-insumo/shared/cadastro-insumo.model';
import { UnidadeEngenharia } from '../../unidade-engenharia/shared/unidade-engenharia.model';

export class EstoqueInsumo {
  id: number;
  descricao_insumo: CadastroInsumo;
  unidade: number;
  quantidade?: number;
  estoque_minimo?: number;
  valor_unitario?: number;
  valor_total?: number;
}

export class ListaEstoqueInsumo {
  id: number;
  descricao_insumo: CadastroInsumo;
  unidade: UnidadeEngenharia;
  quantidade?: number;
  estoque_minimo?: number;
  valor_unitario?: number;
  valor_total?: number;
}
