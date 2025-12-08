from rest_framework import serializers
from .models import Tour, Category, Continent

class TourSerializer(serializers.ModelSerializer):
    categories = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='slug'
    )
    continent = serializers.SlugRelatedField(
        read_only=True,
        slug_field='slug'
    )

    class Meta:
        model = Tour
        fields = '__all__'
