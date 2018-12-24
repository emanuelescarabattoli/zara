from django.contrib import admin
from django.urls import path, include, re_path

from . import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("app/", include("zara.app.urls")),
    path("accounts/", include("zara.accounts.urls")),
    re_path(r"", views.frontend),
]
