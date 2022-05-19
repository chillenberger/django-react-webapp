from django.shortcuts import render
from rest_framework import viewsets
from .serializers import Account_modelSerializer, User_modelSerializer, Shipping_modelSerializer
from .models import Account_model, User_model, Shipping_model

# Created Views.

class Account_modelView(viewsets.ModelViewSet):
    serializer_class = Account_modelSerializer
    queryset = Account_model.objects.all()

class User_modelView(viewsets.ModelViewSet):
    serializer_class = User_modelSerializer
    queryset = User_model.objects.all()

class Shipping_modelView(viewsets.ModelViewSet):
    serializer_class = Shipping_modelSerializer
    queryset = Shipping_model.objects.all()
