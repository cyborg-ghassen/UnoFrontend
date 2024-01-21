from django.core.checks import translation
from django.shortcuts import render
from django.utils.translation import activate


# Create your views here.
def reformat_number(number):
    return f"{number}"


def set_language(request, lang_code):
    activate(lang_code)
    request.session[translation.LANGUAGE_SESSION_KEY] = lang_code
