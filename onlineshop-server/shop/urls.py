from django.conf import settings
from django.urls import path
from .views import CategoryList, CategoryDetail, ProductList, ProductDetail, OrderList, OrderDetail
from django.conf.urls.static import static

urlpatterns = [
    path('api/categories/', CategoryList.as_view(), name='category-list'),
    path('api/category/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('api/products/', ProductList.as_view(), name='product-list'),
    path('api/product/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('api/orders/', OrderList.as_view(), name='order-list'),
    path('api/order/<int:pk>/', OrderDetail.as_view(), name='order-detail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)