from django.contrib import admin
from django.urls import path, include, re_path

from . import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("app/", include("app.urls")),
    path("accounts/", include("accounts.urls")),
    re_path(r"", views.frontend),
]
