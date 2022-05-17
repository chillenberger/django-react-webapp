# holds serializers for serving JSON to frontend

from rest_framework import serializers
from .models import Account_model, Shipping_model, User_model


class Account_modelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account_model
        fields = ('account', 'type', 'company')
