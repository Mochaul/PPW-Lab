from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse

# Create your views here.
response = {}
def index(request):
	response['author'] = "Mochaul"
	html = 'lab_8/lab_8.html'
	return render(request, html, response)
