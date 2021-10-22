from django.shortcuts import render, redirect
from taller.models import persona, tipodocumento, ciudad
from taller.forms import PersonaForm


# Create your views here.
def index(request):
    personas_db = persona.objects.all()

    form = PersonaForm()

    context_dict = {'personas': personas_db, 'form': form}

    if request.method == 'POST':
        form = PersonaForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return render(request, 'index.html', context_dict)
        else:
            print(form.errors)    

    return render(request, 'index.html', context_dict)
