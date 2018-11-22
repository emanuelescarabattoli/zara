# Generated by Django 2.1.3 on 2018-11-22 20:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Counter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='CounterRow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('description', models.TextField()),
                ('period', models.CharField(max_length=256)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=12)),
                ('counter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Counter')),
            ],
        ),
        migrations.CreateModel(
            name='Total',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='TotalRow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('counter', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='app.Counter')),
                ('total', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Total')),
            ],
        ),
    ]
