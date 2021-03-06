# Generated by Django 3.2.8 on 2021-12-23 14:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('insumo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CadastroProdutos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criacao', models.DateTimeField(auto_now_add=True)),
                ('atualizacao', models.DateTimeField(auto_now=True)),
                ('codigo_sap_produto', models.IntegerField(unique=True)),
                ('nome_produto', models.CharField(max_length=149)),
                ('descricao_produto', models.TextField(max_length=300)),
                ('utilizacao', models.CharField(max_length=100)),
                ('ativo', models.BooleanField(default=True)),
            ],
            options={
                'verbose_name': 'Cadastro de Produto',
                'verbose_name_plural': 'Cadastro de Produtos',
            },
        ),
        migrations.CreateModel(
            name='ListaTecnica',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criacao', models.DateTimeField(auto_now_add=True)),
                ('atualizacao', models.DateTimeField(auto_now=True)),
                ('ativo', models.BooleanField(default=True)),
                ('quantidade_insumo', models.DecimalField(decimal_places=2, max_digits=8)),
                ('valor_total', models.DecimalField(decimal_places=2, max_digits=8)),
                ('quantidade_produzida', models.DecimalField(decimal_places=2, max_digits=8)),
                ('codigo_sap_insumo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='listainsumosap', to='insumo.cadastroinsumo')),
                ('codigo_sap_produto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='listacodsap', to='produto.cadastroprodutos')),
                ('descricao_insumo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='listainsumodescricao', to='insumo.cadastroinsumo')),
                ('nome_produto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='listanomeproduto', to='produto.cadastroprodutos')),
                ('unidade', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='listaunidade', to='insumo.unidadeengenharia')),
                ('valor_unitario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='listavalorunitario', to='insumo.cadastroinsumo')),
            ],
            options={
                'verbose_name': 'Lista Tecnica',
                'verbose_name_plural': 'Listas Tecnica',
            },
        ),
    ]
