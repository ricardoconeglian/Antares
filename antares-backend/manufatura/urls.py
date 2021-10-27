from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import TipoManufaturaViewSet, ModoManufaturaViewSet, ExecucaoManufaturaViewSet

# Rotas padrão para a aplicação
router_manufatura= SimpleRouter()
router_manufatura.register('tipomanufatura', TipoManufaturaViewSet)
router_manufatura.register('modomanufatura', ModoManufaturaViewSet)
router_manufatura.register('execucaomanufatura', ExecucaoManufaturaViewSet)

