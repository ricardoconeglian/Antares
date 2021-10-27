from django.contrib import admin
from .models import EstoqueAlmoxarifado


# Mostra campos no Django Admin de tipo manufatura
@admin.register(EstoqueAlmoxarifado)
class EstoqueAlmoxarifadoAdmin(admin.ModelAdmin):
    list_display = ('codigo_sap_produto', 'nome_produto', 'quantidade_entregue')