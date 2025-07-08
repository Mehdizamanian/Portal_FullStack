"""
Api app Urls 
that recives all views from accounts.views app 
"""

from django.urls import path,include
from accounts import views as UserViews

urlpatterns = [
    path('register/', UserViews.RegisterView.as_view())
    
]
