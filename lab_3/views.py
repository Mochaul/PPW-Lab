from django.shortcuts import render, redirect, render_to_response
from django.contrib import messages
from .models import Diary
from .forms import DiaryForm
from datetime import datetime
import pytz
import json

diary_dict = {}

def index(request):
    diary_dict = Diary.objects.all().values()
    return render(request, 'to_do_list.html', {'diary_dict' : convert_queryset_into_json(diary_dict)})

def add_activity(request):
    if request.method == 'POST':
        form = DiaryForm({'date':request.POST['date'],'activity':request.POST['activity']})
        if form.is_valid():
            Diary.objects.create(date=form.cleaned_data['date'],activity=form.cleaned_data['activity'])
            return redirect('/lab-3/')
        else:
            return render(request, 'to_do_list.html',{'form':form})
    return redirect('/lab-3/')

def convert_queryset_into_json(queryset):
    ret_val = []
    for data in queryset:
        ret_val.append(data)
    return ret_val
