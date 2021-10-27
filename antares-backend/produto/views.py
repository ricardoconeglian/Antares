
from rest_framework import viewsets

from .models import CadastroProdutos, ListaTecnica
from .serializers import CadastroProdutosSerializer, ListaTecnicaSerializer

# View CRUD cadastro de produtos
class CadastroProdutosViewSet(viewsets.ModelViewSet):
    queryset = CadastroProdutos.objects.all()
    serializer_class = CadastroProdutosSerializer

# View CRUD cadastro de lista tecnica
class ListaTecnicaViewSet(viewsets.ModelViewSet):
    queryset = ListaTecnica.objects.all()
    serializer_class = ListaTecnicaSerializer