from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Tour
from .serializers import TourSerializer

class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['country', 'price', 'start_date']
    search_fields = ['name', 'description']
    ordering_fields = ['price', 'start_date']
