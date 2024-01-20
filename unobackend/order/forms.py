from django import forms
from django.forms import BaseInlineFormSet


class OrderItemInlineFormSet(BaseInlineFormSet):
    def clean(self):
        super().clean()
        total_quantity = sum(form.cleaned_data.get('quantity', 0) for form in self.forms)
        if total_quantity < 1:
            raise forms.ValidationError("At least one item is required.")
