from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import TipoManufaturaViewSet, ModoManufaturaViewSet, ExecucaoManufaturaViewSet

# Rotas padrão para a aplicação
router_manufatura= SimpleRouter()
router_manufatura.register('cadastro-tipo-manufatura', TipoManufaturaViewSet)
router_manufatura.register('cadastro-modo-manufatura', ModoManufaturaViewSet)
router_manufatura.register('execucao-manufatura', ExecucaoManufaturaViewSet)

