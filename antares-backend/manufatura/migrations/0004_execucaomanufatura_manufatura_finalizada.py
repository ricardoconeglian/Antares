# Generated by Django 3.2.8 on 2021-10-26 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manufatura', '0003_auto_20211026_1203'),
    ]

    operations = [
        migrations.AddField(
            model_name='execucaomanufatura',
            name='manufatura_finalizada',
            field=models.BooleanField(default=False),
        ),
    ]
