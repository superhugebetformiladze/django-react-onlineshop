from django.db import models
from django.urls import reverse

class Category(models.Model):
    name = models.CharField(max_length=100)
    image_path = models.ImageField(upload_to='category_images/')

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    image_path = models.ImageField(upload_to='product_images/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    composition = models.TextField()
    additives = models.TextField()
    nutritional_value = models.TextField()
    information = models.TextField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    sizes = models.ManyToManyField('ProductSize')

    def __str__(self):
        return self.name

class ProductSize(models.Model):
    size = models.IntegerField()

    def __str__(self):
        return str(self.size)

class Order(models.Model):
    customer_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    shipping_address = models.TextField()
    order_date = models.DateTimeField(auto_now_add=True)
    products = models.ManyToManyField('Product', through='OrderProduct')

    def __str__(self):
        return f'Order #{self.id} - {self.customer_name}'

class OrderProduct(models.Model):
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
