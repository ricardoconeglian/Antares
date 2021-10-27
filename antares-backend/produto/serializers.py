
from rest_framework import serializers
from .models import CadastroProdutos, ListaTecnica

# Serialização do cadastro de produtos, transformando todos os campos em JSON
class CadastroProdutosSerializer(serializers.ModelSerializer):
    class Meta:
        model = CadastroProdutos
        fields = (
            'id',
            'codigo_sap_produto',
            'nome_produto',
            'descricao_produto',
            'utilizacao',
            'projeto',
            'foto'
        )

# Serialização do cadastro de lista tecnica, transformando todos os campos em JSON
class ListaTecnicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListaTecnica
        fields = (
            'id',
            'codigo_sap_produto',
            'nome_produto',
            'codigo_sap_insumo',
            'descricao_insumo',
            'quantidade_insumo',
            'unidade',
            'valor_unitario',
            'valor_total',
            'quantidade_produzida'
        )