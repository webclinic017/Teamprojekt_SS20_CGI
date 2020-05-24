from django.urls import path
from .views import (
    StockRudView,
    StockAllView,
    StockCreateView,
    PriceListView,
    MostRecentPriceView,
)

app_name = "stocks"

urlpatterns = [
    path(
        "<symbol>/prices/most-recent/",
        MostRecentPriceView.as_view(),
        name="most-recent-price-for-stock",
    ),
    path("<symbol>/prices/", PriceListView.as_view(), name="prices-for-stock"),
    path("list/", StockAllView.as_view(), name="all-stocks"),
    path("", StockAllView.as_view(), name="all-stocks"),
    path("<symbol>", StockRudView.as_view(), name="stock-rud"),
    path("new/", StockCreateView.as_view(), name="create-new-stock"),
]
