from django.db import models

class tipodocumento(models.Model):
    nombre = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=100)
    def __str__ (self):
        return self.nombre
    
class ciudad(models.Model):
    nombre = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=100)
    def __str__ (self):
        return self.nombre
    
class persona(models.Model):
    nombres = models.CharField(max_length=25)
    apellidos = models.CharField(max_length=25)
    tipodocumento = models.ForeignKey(tipodocumento, on_delete=models.CASCADE)
    documento = models.IntegerField()
    lugarresidencia = models.ForeignKey(ciudad, on_delete=models.CASCADE)
    fechanacimiento = models.DateField(null=True, blank=True)
    email = models.CharField(max_length=120)
    telefono = models.IntegerField()
    usuario = models.CharField(max_length=20)
    password =  models.CharField(max_length=20)
    def __str__ (self):
        return 'Nombres y apellidos: ' + self.nombres + ' ' + self.apellidos
    
# Create your models here.
