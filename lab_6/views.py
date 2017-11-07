from django.shortcuts import render

author = 'MAAP'

# Create your views here.
def index(request):
    response = {'author': author}
    return render(request, 'lab_6/lab_6.html', response)
