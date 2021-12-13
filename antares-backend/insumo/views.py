from rest_framework import viewsets

from .models import CadastroInsumo, UnidadeEngenharia, EstoqueInsumo
from .serializers import CadastroInsumoSerializer, UnidadeEngenhariaSerializer, EstoqueInsumoSerializer

# View CRUD cadastro de insumos
class CadastroInsumoViewSet(viewsets.ModelViewSet):
    queryset = CadastroInsumo.objects.all()
    serializer_class = CadastroInsumoSerializer 

# View CRUD cadastro de unidade de engenharia
class UnidadeEngenhariaViewSet(viewsets.ModelViewSet):
    queryset = UnidadeEngenharia.objects.all()
    serializer_class = UnidadeEngenhariaSerializer 

# View CRUD cadastro de estoque insumo
class EstoqueInsumoViewSet(viewsets.ModelViewSet):
    queryset = EstoqueInsumo.objects.all()
    serializer_class = EstoqueInsumoSerializer

    #def quantidadeEstoque(self, queryset):
     #   estoque = queryset.valor_unitario
      #  total = queryset.valor_total
       # balanco = estoque * total