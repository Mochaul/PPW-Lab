from django.shortcuts import render


# Create your views here.
def index(request):
    response = {}
    return render(request, 'lab_6/lab_6.html', response)
