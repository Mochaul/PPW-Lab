from django.shortcuts import render
from datetime import date

# Enter your name here
mhs_name = "Mochamad Aulia Akbar Praditomo"

# Create your views here.
def index(request):
    response = {'name': mhs_name}
    return render(request, 'index.html', response)

# TODO Implement this to complete last checklist
def calculate_age(birth_year):
    today = date.today()
    return today.year - born.year
