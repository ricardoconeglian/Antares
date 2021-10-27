from django.contrib import admin
from .models import CadastroProdutos, ListaTecnica

# Register your models here.
#usuario: admin
#senha: admin

# Mostra campos no Django Admin de cadastros
@admin.register(CadastroProdutos)
class CadastroProdutosAdmin(admin.ModelAdmin):
    list_display = ('codigo_sap_produto', 'nome_produto')

# Mostra campos no Django Admin de cadastros
@admin.register(ListaTecnica)
class ListaTecnicaAdmin(admin.ModelAdmin):
    list_display = ('codigo_sap_produto', 'nome_produto', 'quantidade_produzida')

