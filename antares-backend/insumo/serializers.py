from rest_framework import serializers

from .models import CadastroInsumo, UnidadeEngenharia, EstoqueInsumo

# Serialização do cadastro de insumos, transformando todos os campos em JSON
class CadastroInsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CadastroInsumo
        fields = (
            'id',
            'codigo_sap_insumo', 
            'descricao_insumo'
                 
        )


# Serialização do cadastro de unidade de engenharia, transformando todos os campos em JSON
class UnidadeEngenhariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnidadeEngenharia
        fields = (
            'id',
            'descricao', 
            'unidade',                
        )


# Serialização do cadastro de estoque de insumo, transformando todos os campos em JSON
class EstoqueInsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstoqueInsumo
        fields = (
            'id',             
            'descricao_insumo',
            'unidade',
            'quantidade',
            'valor_unitario',
            'valor_total',
            'estoque_minimo'
        )
