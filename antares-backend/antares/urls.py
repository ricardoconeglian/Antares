"""antares URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from produto.urls import router_produto
from manufatura.urls import router_manufatura
from insumo.urls import router_insumo
from almox.urls import router_almox

urlpatterns = [
    path('admin/', admin.site.urls),
    path('produto/', include(router_produto.urls)),
    path('manufatura/', include(router_manufatura.urls)),
    path('insumo/', include(router_insumo.urls)),
    path('almox/', include(router_almox.urls))
]
