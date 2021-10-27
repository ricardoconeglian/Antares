from django.db import models
from produto.models import CadastroProdutos
from insumo.models import CadastroInsumo

#classe base para registrar modificações no registro de dados
class Base(models.Model):
    criacao = models.DateTimeField(auto_now_add=True)
    atualizacao = models.DateTimeField(auto_now=True)
    ativo = models.BooleanField(default=True)

    class Meta:
        abstract = True

# Tabela para acrescentar o estoque de produtos no almoxarifado
class EstoqueAlmoxarifado(Base):
    codigo_sap_produto = models.ForeignKey(CadastroProdutos, related_name='estoqueproduto', on_delete=models.CASCADE)
    nome_produto = models.ForeignKey(CadastroProdutos, related_name='estoquenome', on_delete=models.CASCADE, null=True)
    quantidade_entregue = models.DecimalField(max_digits=8, decimal_places=2, null=True)
    valor_unitario = models.ForeignKey(CadastroInsumo, related_name='valorinsumo', on_delete=models.CASCADE, null=True)
    valor_total = models.DecimalField(max_digits=8, decimal_places=2, null=True)

    
    class Meta:
        verbose_name = 'Estoque Almoxarifado'
        verbose_name_plural = 'Estoques Insumos'
        

    def __str__(self):
        return self.nome_produto