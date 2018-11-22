from django.db import models


class Counter(models.Model):
    """
    a counter with a title and rows as children
    """

    title = models.CharField(max_length=256)


class CounterRow(models.Model):
    """
    a row of a counter
    """

    counter = models.ForeignKey(Counter, on_delete=models.CASCADE)
    date = models.DateField()
    description = models.TextField()
    period = models.CharField(max_length=256)
    amount = models.DecimalField(max_digits=12, decimal_places=2)


class Total(models.Model):
    """
    a sum of counters
    """

    title = models.CharField(max_length=256)


class TotalRow(models.Model):
    """
    a row of total
    """

    total = models.ForeignKey(Total, on_delete=models.CASCADE)
    counter = models.ForeignKey(Counter, on_delete=models.DO_NOTHING)
