from django.contrib import admin
from .models import TipoManufatura, ModoManufatura, ExecucaoManufatura


# Mostra campos no Django Admin de tipo manufatura
@admin.register(TipoManufatura)
class TipoManufaturaAdmin(admin.ModelAdmin):
    list_display = ('tipo_manufatura', )


# Mostra campos no Django Admin de modo manufatura
@admin.register(ModoManufatura)
class ModoManufaturaAdmin(admin.ModelAdmin):
    list_display = ('tipo_manufatura', 'modo_manufatura')

# Mostra campos no Django Admin de execução manufatura
@admin.register(ExecucaoManufatura)
class ExecucaoManufaturaAdmin(admin.ModelAdmin):
    list_display = ('codigo_sap_produto', 'nome_produto', 'manufatura_finalizada')