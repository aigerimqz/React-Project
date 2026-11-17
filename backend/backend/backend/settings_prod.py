from .settings import *  # noqa
import os

# Production overrides for Render (SQLite, no external DB)
SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY", SECRET_KEY)

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "prod.sqlite3",
    }
}

CORS_ALLOWED_ORIGINS = CORS_ALLOWED_ORIGINS + [
    "https://react-project-orpin-seven.vercel.app",
]
