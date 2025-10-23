from django.db import models

# Create your models here.

class Tour(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    description = models.TextField()
    photo = models.URLField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    duration = models.IntegerField(help_text="Duration of the tour")

    def __str__(self):
        return f"{self.title} - {self.country}"
