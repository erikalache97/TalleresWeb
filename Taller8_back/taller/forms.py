from django import forms
from taller.models import persona, tipodocumento, ciudad

class PersonaForm(forms.ModelForm):
    class Meta:
        model = persona
        fields = ( 'nombres', 'apellidos', 'documento', 'fechanacimiento', 'email', 'telefono', 'usuario', 'password', 'tipodocumento', 'lugarresidencia')
        
        widgets = {
            'nombres' : forms.widgets.TextInput(attrs={'maxlength' : 25, 'type' : 'text'}),
            'apellidos' : forms.widgets.TextInput(attrs={'maxlength' : 25, 'type' : 'text'}),
            'documento' : forms.widgets.TextInput(attrs={'maxlength' : 10, 'type' : 'number'}),
            'fechanacimiento' : forms.widgets.DateInput(attrs={'type':'date'}),
            'email' : forms.widgets.TextInput(attrs={'maxlength' : 30, 'type' : 'text'}),
            'telefono' : forms.widgets.TextInput(attrs={'maxlength' : 10, 'type' : 'number'}),
            'usuario' : forms.widgets.TextInput(attrs={'maxlength' : 30, 'type' : 'text'}),
            'password' : forms.widgets.TextInput(attrs={'maxlength' : 20, 'type' : 'text'}), 
        }

        labels ={
            'nombres' : 'Ingrese su nombre:',
            'apellidos' : 'Ingrese sus apellidos:',
            'documento' : 'Numero de documento:',
            'fechanacimiento' : 'Fecha de nacimiento:',
            'tipodocumento' : 'Tipo de documento:',
            'lugarresidencia' : 'Lugar de residencia:',
            'email' : 'Email' ,
            'telefono' : 'Teléfono' ,
            'usuario' : 'Usuario' ,
            'password' : 'Contraseña' 
        }
