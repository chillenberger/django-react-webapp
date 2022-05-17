from django.db import models

# Shipping and account information models.

# model for a shipment, a shipment will be associated with an account.
# many to one relationship with Account_model
class Shipping_model(models.Model):

    status_choices = [('P', 'Ready For Pickup'), ('S','Sorting'),
                      ('IT','In Transit'), ('OD','Out For Delivery'),
                      ('D','Delivered')]

    account = models.ForeignKey(Account_model, on_delete=models.CASCADE)
    ID = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Tracking Number')
    delivered = models.BooleanField(default=False)
    status = models.CharField(choices=status_choices, default='Ready For Pickup')

# model for account, one account can have multiple users.
# many to many realationship with users.
class Account_model(models.Model):
    type_choices = [('B','Business'), ('P','Personal')]
    account = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for account')
    type = models.CharField(choices=type_choices, default='Personal')


# model for user, each user will be associated with an account
# many to many relationship with account
class User_model(models.Model):
    ID = models.UUIDField(primary_key=True, default=uuid.uuid4, help_text='Unique ID for user account')
    name = models.CharField(max_length=20)
    account = models.ManyToManyField(Account_model)
