# API Documentation

## Base URL

http://EC2_PUBLIC_IP:3001

---

## Health Check

### Endpoint

GET /health

### Response

{
"status": "OK",
"message": "StockAlert API Running"
}

---

## Get Stocks

### Endpoint

GET /api/stocks

### Response

[
{
"id": 1,
"stock_name": "Reliance",
"stock_price": 1450
},
{
"id": 2,
"stock_name": "TCS",
"stock_price": 3800
},
{
"id": 3,
"stock_name": "Infosys",
"stock_price": 1600
}
]

---

## Root Endpoint

### Endpoint

GET /

### Response

StockAlert Backend Running
