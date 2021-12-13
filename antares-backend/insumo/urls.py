from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import CadastroInsumoViewSet, UnidadeEngenhariaViewSet, EstoqueInsumoViewSet

# Rotas padrão para a aplicação
router_insumo = SimpleRouter()
router_insumo.register('cadastroinsumo', CadastroInsumoViewSet)
router_insumo.register('cadastro-unidade-engenharia', UnidadeEngenhariaViewSet)
router_insumo.register('estoqueinsumo', EstoqueInsumoViewSet)
