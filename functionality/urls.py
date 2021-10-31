from django.urls import path
from . import views

app_name = 'functionality'
urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('<int:year>/<int:month>/<int:day>/<slug:post>', views.post_detail,
         name='post_detail'),
    path('/about_me', views.get_about_me, name = 'about me')
]
