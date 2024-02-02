from django.urls import path
from .views import CategoryList, CategoryDetail, ProductList, ProductDetail, OrderList, OrderDetail

urlpatterns = [
    path('api/categories/', CategoryList.as_view(), name='category-list'),
    path('api/categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('api/products/', ProductList.as_view(), name='product-list'),
    path('api/products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('api/orders/', OrderList.as_view(), name='order-list'),
    path('api/orders/<int:pk>/', OrderDetail.as_view(), name='order-detail'),
]
