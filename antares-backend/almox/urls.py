from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import EstoqueAlmoxarifadoViewSet

# Rotas padrão para a aplicação
router_almox= SimpleRouter()
router_almox.register('estoquealmox', EstoqueAlmoxarifadoViewSet)
