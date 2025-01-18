# langflow/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/langflow/', views.langflow_request, name='langflow_request'),
]
