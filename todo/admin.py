from django.contrib import admin
from .models import Todo
# Register your models here.


class TodoAdmin(admin.ModelAdmin):
    list_display = ['title', 'task', 'completed']
    list_filter = ['title', 'task']
    search_fields = ['title', 'task']


admin.site.register(Todo, TodoAdmin)
