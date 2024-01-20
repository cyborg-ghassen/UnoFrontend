from django.db.models.signals import pre_save, pre_delete, post_save, post_delete
from django.dispatch import receiver
from .models import OrderItem, Order


@receiver(pre_save, sender=Order)
def pre_save_order(sender, instance, **kwargs):
    try:
        instance._pre_save_instance = Order.objects.get(id=instance.id)
    except Order.DoesNotExist:
        instance._pre_save_instance = instance


@receiver(pre_delete, sender=Order)
def pre_delete_order(sender, instance, **kwargs):
    try:
        instance._pre_delete_instance = Order.objects.get(id=instance.id)
    except Order.DoesNotExist:
        instance._pre_delete_instance = instance


@receiver(post_save, sender=Order)
def post_save_order(sender, instance, created, **kwargs):
    old_instance = getattr(instance, '_pre_save_instance', None)
    if old_instance and old_instance.status != instance.status and instance.status == "approved":
        items = instance.orderitem_set.all()
        for item in items:
            product = item.product
            product.stock -= int(item.quantity) if product.stock and instance.status == "approved" else 0
            product.save()
            if product.stock < 0:
                instance.notes = "out of stock"

        instance.save()


@receiver(post_delete, sender=Order)
def post_delete_order(sender, instance, **kwargs):
    old_instance = getattr(instance, '_pre_delete_instance', None)
    if old_instance and old_instance.status != instance.status and instance.status == "approved":
        items = instance.orderitem_set.all()
        for item in items:
            product = item.product
            product.stock += int(item.quantity) if product.stock and instance.status == "approved" else 0
            product.save()
            if product.stock < 0:
                instance.notes = "out of stock"

        instance.save()


@receiver(pre_save, sender=OrderItem)
def pre_save_order_item(sender, instance, **kwargs):
    try:
        instance._pre_save_instance = OrderItem.objects.get(id=instance.id)
    except OrderItem.DoesNotExist:
        instance._pre_save_instance = instance


@receiver(post_save, sender=OrderItem)
def post_save_order_item(sender, instance, created, **kwargs):
    old_instance = getattr(instance, '_pre_save_instance', None)
    if created:
        if instance.order.status == "approved":
            product = instance.product
            product.stock -= int(instance.quantity) if product.stock else 0
            product.save()
            if product.stock < 0:
                instance.order.notes = "out of stock"
                instance.order.save()
    else:
        if old_instance and old_instance.order.status != instance.order.status and instance.order.status == "approved":
            product = instance.product
            quantity_diff = int(instance.quantity) - int(old_instance.quantity)
            product.stock -= quantity_diff if product.stock else 0
            product.save()
            if product.stock < 0:
                instance.order.notes = "out of stock"
                instance.order.save()


@receiver(post_delete, sender=OrderItem)
def post_delete_order_item(sender, instance, **kwargs):
    if instance.order.status == "approved":
        product = instance.product
        product.stock += int(instance.quantity) if product.stock else 0
        product.save()
        if product.stock < 0:
            instance.order.notes = "out of stock"
            instance.order.save()
