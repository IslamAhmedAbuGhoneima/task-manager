from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('tasks', views.TodoViewSet)
urlpatterns = [
    path('', views.home, name='home'),
    path('api/', include(router.urls))
]
