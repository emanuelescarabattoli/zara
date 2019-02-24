from django.contrib import admin

from .models import Counter, CounterRow, Total, TotalRow, TotalRowTotal

admin.site.register(Counter)
admin.site.register(CounterRow)
admin.site.register(Total)
admin.site.register(TotalRow)
admin.site.register(TotalRowTotal)
