from django.db import models
#from django.db.models.deletion import CASCADE

#classe base para registrar modificações no registro de dados
class Base(models.Model):
    criacao = models.DateTimeField(auto_now_add=True)
    atualizacao = models.DateTimeField(auto_now=True)
    ativo = models.BooleanField(default=True)

    class Meta:
        abstract = True

#Tabela para cadastro de insumos da celula
class CadastroInsumo(Base):
    codigo_sap_insumo = models.IntegerField(unique=True)
    descricao_insumo = models.CharField(max_length=100)
    

    class Meta:
        verbose_name = 'Cadastro Insumo'
        verbose_name_plural = 'Cadastro Insumos'
        

    def __str__(self):
        return self.descricao_insumo

#Tabela para cadastro de unidades de engenharia
class UnidadeEngenharia(Base):
    descricao = models.CharField(max_length=100)
    unidade = models.CharField(max_length=6, unique=True)

    class Meta:
        verbose_name = 'Unidade Engenharia'
        verbose_name_plural = 'Unidades Engenharia'
        

    def __str__(self):
        return self.descricao

#Tabela para controlar o estoque de insumos
class EstoqueInsumo(Base):
    descricao_insumo = models.ForeignKey(CadastroInsumo, related_name= 'insumodescricao', on_delete=models.CASCADE)
    unidade = models.ForeignKey(UnidadeEngenharia, related_name='insumounidade', on_delete=models.CASCADE)
    quantidade = models.DecimalField(max_digits=8, decimal_places=2)
    estoque_minimo = models.DecimalField(max_digits=8, decimal_places=2)
    valor_unitario = models.DecimalField(max_digits=8, decimal_places=2)
    valor_total = models.DecimalField(max_digits=8, decimal_places=2)
    

    class Meta:
        verbose_name = 'Estoque Insumo'
        verbose_name_plural = 'Estoque Insumos'
        

    def __str__(self):
        return self.descricao_insumo


