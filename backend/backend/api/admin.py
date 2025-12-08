from django.contrib import admin
from .models import Tour, Category, Continent

@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'continent', 'price', 'start_date')
    list_filter = ('continent', 'categories', 'price', 'start_date')
    search_fields = ('name', 'description')

admin.site.register(Category)
admin.site.register(Continent)
