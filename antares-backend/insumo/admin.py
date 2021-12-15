from django.contrib import admin
from .models import CadastroInsumo, UnidadeEngenharia, EstoqueInsumo


# Mostra campos no Django Admin de unidade de engenharia
@admin.register(CadastroInsumo)
class CadastroInsumoAdmin(admin.ModelAdmin):
    list_display = ('codigo_sap_insumo', 'descricao_insumo')

# Mostra campos no Django Admin de unidade de engenharia
@admin.register(UnidadeEngenharia)
class UnidadeEngenhariaAdmin(admin.ModelAdmin):
    list_display = ('descricao', 'unidade')

# Mostra campos no Django Admin de estoque de insumos
@admin.register(EstoqueInsumo)
class EstoqueInsumoAdmin(admin.ModelAdmin):
    list_display = ('descricao_insumo', 'quantidade', 'valor_unitario')