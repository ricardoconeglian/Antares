from rest_framework import serializers
from .models import TipoManufatura, ModoManufatura, ExecucaoManufatura

# Serialização do cadastro de tipos manufatura, transformando todos os campos em JSON
class TipoManufaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoManufatura
        fields = (
            'id',
            'tipo_manufatura',           
        )

# Serialização do cadastro de modos manufatura, transformando todos os campos em JSON
class ModoManufaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModoManufatura
        fields = (
            'id',
            'tipo_manufatura', 
            'modo_manufatura'          
        )

# Serialização do cadastro de execução manufatura, transformando todos os campos em JSON
class ExecucaoManufaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExecucaoManufatura
        fields = (
            'id',
            'codigo_sap_produto', 
            'nome_produto',
            'numero_serie',
            'tipo_manufatura',
            'quantidade_produto',
            'inicio_manufatura',
            'fim_manufatura',
            'executante_inicio',
            'executante_final',
            'modo_manufatura',
            'manufatura_finalizada'
        )