from rest_framework import serializers
from .models import EstoqueAlmoxarifado

# Serialização do cadastro de estoque almoxarifado, transformando todos os campos em JSON
class EstoqueAlmoxarifadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstoqueAlmoxarifado
        fields = (
            'id',
            'codigo_sap_produto',
            'nome_produto',
            'quantidade_entregue',
            'valor_unitario',
            'valor_total'
        )