from django.contrib import admin
from .models import Account_model, Shipping_model, User_model

# Registed models.
admin.site.register([Account_model, Shipping_model, User_model])
