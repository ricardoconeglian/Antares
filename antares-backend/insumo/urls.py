from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import CadastroInsumoViewSet, UnidadeEngenhariaViewSet, EstoqueInsumoViewSet

# Rotas padrão para a aplicação
router_insumo = SimpleRouter()
router_insumo.register('cadastro-insumo', CadastroInsumoViewSet)
router_insumo.register('cadastro-unidade-engenharia', UnidadeEngenhariaViewSet)
router_insumo.register('estoque-insumo', EstoqueInsumoViewSet)
#router_insumo.register('lista-estoque-insumo', ListaEstoqueInsumoViewSet)
