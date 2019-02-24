from django.db import models
from django.contrib.auth.models import User


class Counter(models.Model):
    """
    a counter with a title and rows as children
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)

    def __str__(self):
        return self.title


class CounterRow(models.Model):
    """
    a row of a counter
    """

    counter = models.ForeignKey(Counter, on_delete=models.CASCADE)
    date = models.DateField()
    description = models.TextField()
    period = models.CharField(max_length=256)
    amount = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self):
        return self.description


class Total(models.Model):
    """
    a sum of counters
    """

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)

    def __str__(self):
        return self.title


class TotalRow(models.Model):
    """
    a row of total
    """

    total = models.ForeignKey(Total, on_delete=models.CASCADE)
    counter = models.ForeignKey(Counter, on_delete=models.DO_NOTHING)


class TotalRowTotal(models.Model):
    """
    a row of total
    """

    total = models.ForeignKey(Total, on_delete=models.CASCADE, related_name="total")
    total_row = models.ForeignKey(Total, on_delete=models.CASCADE, related_name="total_row")
