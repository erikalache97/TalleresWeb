from django.contrib import admin

from .models import ciudad, tipodocumento, persona

admin.site.register(ciudad)
admin.site.register(tipodocumento)
admin.site.register(persona)

# Register your models here.
