from django.db import models
from produto.models import CadastroProdutos


#classe base para registrar modificações no registro de dados
class Base(models.Model):
    criacao = models.DateTimeField(auto_now_add=True)
    atualizacao = models.DateTimeField(auto_now=True)
    ativo = models.BooleanField(default=True)

    class Meta:
        abstract = True

# Tabela para o tipo de manufatura utilizada (manufatura aditiva, usinagem, placa eletronica)
class TipoManufatura(Base):
    tipo_manufatura = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name = 'Tipo Manufatura'
        verbose_name_plural = 'Tipos de Manufatura'
        

    def __str__(self):
        return self.tipo_manufatura

# Tabela para o modo manufatura. Especifica se é 3D, CNC ou placa eletronica
class ModoManufatura(Base):
    modo_manufatura = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name = 'Modo de Manufatura'
        verbose_name_plural = 'Modos Manufatura'
        

    def __str__(self):
        return self.modo_manufatura
    

# Tabela para execução da manufatura
class ExecucaoManufatura(Base):
    codigo_sap_produto = models.ForeignKey(CadastroProdutos, related_name='execucaocodigoproduto', on_delete=models.CASCADE)
    nome_produto = models.ForeignKey(CadastroProdutos, related_name='execucaonomeproduto', on_delete=models.CASCADE)
    numero_serie = models.IntegerField(unique=True)
    tipo_manufatura = models.ForeignKey(TipoManufatura, related_name='execucaotipomanufatura', on_delete=models.CASCADE)
    quantidade_produto = models.DecimalField(max_digits=8, decimal_places=2)
    inicio_manufatura = models.DateTimeField(auto_now_add=True)
    fim_manufatura = models.DateTimeField(auto_now_add=True)
    executante_inicio = models.CharField(max_length=100)
    executante_final = models.CharField(max_length=100)
    modo_manufatura = models.ForeignKey(ModoManufatura, related_name='execucaomanufaturamodo', on_delete=models.CASCADE)
    manufatura_finalizada = models.BooleanField(default=False)
  
    
    class Meta:
        verbose_name = 'Execução Manufatura'
        verbose_name_plural = 'Execuções Manufatura'
        

    def __str__(self):
        return self.nome_produto