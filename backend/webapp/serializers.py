# holds serializers for serving JSON to frontend

from rest_framework import serializers
from .models import Account_model, Shipping_model, User_model


class Account_modelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account_model
        fields = ('account', 'type', 'company')


class User_modelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_model
        fields = ('ID', 'name', 'account')

class Shipping_modelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping_model
        fields = ('account', 'ID', 'delivered', 'status')
