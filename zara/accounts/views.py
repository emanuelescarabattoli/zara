from django.contrib.auth import logout
from django.shortcuts import redirect
from django.views import View


class LogoutView(View):
    """
    A view to manage user's logout
    """

    def get(self, request, *args, **kwargs):
        logout(request)

        # after logout user is redirected to login with an information message
        response = redirect("login")
        response["location"] += "?logout=1"

        return response
