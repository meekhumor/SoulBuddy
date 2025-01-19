from django.urls import path
from . import views

urlpatterns = [
    path('api/langflow/', views.langflow_request, name='langflow_request'),
    path('handle-langflow-request/', views.handle_langflow_request, name='handle_langflow_request'),
    path('api/proxy/', views.proxy_api_request, name='proxy_api_request'),
]
