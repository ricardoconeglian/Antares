# Generated by Django 3.2.8 on 2021-10-26 14:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('insumo', '0002_auto_20211026_1143'),
        ('produto', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cadastroprodutos',
            options={'verbose_name': 'Cadastro Produto', 'verbose_name_plural': 'Cadastro Produtos'},
        ),
        migrations.RenameField(
            model_name='cadastroprodutos',
            old_name='codigo_sap',
            new_name='codigo_sap_produto',
        ),
        migrations.RemoveField(
            model_name='cadastroprodutos',
            name='tipo_manufatura',
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
