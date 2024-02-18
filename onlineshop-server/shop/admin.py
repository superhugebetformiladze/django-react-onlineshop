from django.contrib import admin
from .models import Category, Product, ProductSize, Order

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ProductSize)
admin.site.register(Order)
