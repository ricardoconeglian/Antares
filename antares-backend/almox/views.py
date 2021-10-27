from rest_framework import viewsets

from .models import EstoqueAlmoxarifado
from .serializers import EstoqueAlmoxarifadoSerializer

# View CRUD cadastro de estoque almoxarifado
class EstoqueAlmoxarifadoViewSet(viewsets.ModelViewSet):
    queryset = EstoqueAlmoxarifado.objects.all()
    serializer_class = EstoqueAlmoxarifadoSerializer