from django import forms

class DiaryForm(forms.Form):
    date = forms.DateTimeField(input_formats=['%Y-%m-%dT%H:%M'])
    activity = forms.CharField(max_length=60)
