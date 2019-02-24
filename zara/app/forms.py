from django import forms

from .models import Counter, CounterRow, Total, TotalRow, TotalRowTotal


class CounterForm(forms.ModelForm):
    """
    a form for counter model
    """

    class Meta:
        model = Counter
        fields = ("title",)


class CounterRowForm(forms.ModelForm):
    """
    a form for counter model
    """

    class Meta:
        model = CounterRow
        fields = ("counter", "date", "description", "period", "amount")


class TotalForm(forms.ModelForm):
    """
    a form for counter model
    """

    class Meta:
        model = Total
        fields = ("title",)


class TotalRowForm(forms.ModelForm):
    """
    a form for counter model
    """

    class Meta:
        model = TotalRow
        fields = ("total", "counter")


class TotalRowTotalForm(forms.ModelForm):
    """
    a form for counter model
    """

    class Meta:
        model = TotalRowTotal
        fields = ("total", "total_row")
