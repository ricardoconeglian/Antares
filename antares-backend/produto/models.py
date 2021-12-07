from django.db import models
from insumo.models import CadastroInsumo, UnidadeEngenharia



#classe base para registrar modificações no registro de dados
class Base(models.Model):
    criacao = models.DateTimeField(auto_now_add=True)
    atualizacao = models.DateTimeField(auto_now=True)
    ativo = models.BooleanField(default=True)

    class Meta:
        abstract = True

# Tabela para cadastrar os produtos
class CadastroProdutos(Base):
    codigo_sap_produto = models.IntegerField(unique=True)
    nome_produto = models.CharField(max_length= 150)
    descricao_produto = models.TextField(max_length=300)
    utilizacao = models.CharField(max_length=100)
    projeto = models.FileField(upload_to='projeto/', blank=True, null=True)
    foto = models.ImageField(upload_to='foto/', blank=True, null=True)

    class Meta:
        verbose_name = 'Cadastro Produto'
        verbose_name_plural = 'Cadastro Produtos'
        

    def __str__(self):
        return self.nome_produto
   

# Tabela para especificar a lista tecnica dos produtos (quais insumos que fazem parte dele)
class ListaTecnica(Base):
    codigo_sap_produto = models.ForeignKey(CadastroProdutos, related_name='listacodsap', on_delete=models.CASCADE)
    nome_produto = models.ForeignKey(CadastroProdutos, related_name='listanomeproduto', on_delete=models.CASCADE)
    codigo_sap_insumo = models.ForeignKey(CadastroInsumo, related_name='listainsumosap', on_delete=models.CASCADE)
    descricao_insumo = models.ForeignKey(CadastroInsumo, related_name= 'listainsumodescricao', on_delete=models.CASCADE)
    quantidade_insumo = models.DecimalField(max_digits=8, decimal_places=2)
    unidade = models.ForeignKey(UnidadeEngenharia, related_name='listaunidade', on_delete=models.CASCADE)
    valor_unitario = models.ForeignKey(CadastroInsumo, related_name='listavalorunitario', on_delete=models.CASCADE )
    valor_total = models.DecimalField(max_digits=8, decimal_places=2)
    quantidade_produzida = models.DecimalField(max_digits=8, decimal_places=2)
      
    class Meta:
        verbose_name = 'Lista Tecnica'
        verbose_name_plural = 'Listas Tecnica'
        

    def __str__(self):
        return self.nome_produto