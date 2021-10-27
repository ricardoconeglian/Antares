from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import CadastroProdutosViewSet, ListaTecnicaViewSet

# Rotas padrão para a aplicação
router_produto = SimpleRouter()
router_produto.register('cadastroprodutos', CadastroProdutosViewSet)
router_produto.register('listatecnica', ListaTecnicaViewSet)

