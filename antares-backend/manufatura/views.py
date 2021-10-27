from rest_framework import viewsets

from .models import TipoManufatura, ModoManufatura, ExecucaoManufatura
from .serializers import TipoManufaturaSerializer, ModoManufaturaSerializer, ExecucaoManufaturaSerializer

# View CRUD cadastro de tipo de manufatura
class TipoManufaturaViewSet(viewsets.ModelViewSet):
    queryset = TipoManufatura.objects.all()
    serializer_class = TipoManufaturaSerializer


# View CRUD cadastro de modo de manufatura
class ModoManufaturaViewSet(viewsets.ModelViewSet):
    queryset = ModoManufatura.objects.all()
    serializer_class = ModoManufaturaSerializer

# View CRUD cadastro de execução de manufatura
class ExecucaoManufaturaViewSet(viewsets.ModelViewSet):
    queryset = ExecucaoManufatura.objects.all()
    serializer_class = ExecucaoManufaturaSerializer