# Generated by Django 3.2.8 on 2021-12-14 16:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('insumo', '0004_alter_cadastroinsumo_codigo_sap_insumo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cadastroinsumo',
            name='valor_unitario',
        ),
    ]
