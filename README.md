# Number Classification API

This API classifies a number and provides interesting mathematical properties along with a fun fact.

## Features

- Classifies numbers as prime, perfect, and Armstrong.
- Returns the sum of the digits.
- Provides a fun fact about the number.

## API Endpoint

### BASE URL = https://numbers-production.up.railway.app

#### GET /api/classify-number?number={number}

#### Query Parameters

- `number`: The number to classify (must be a valid integer).

#### Response Format

**200 OK**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

**400 Error**

```json
{
  "number": "alphabet",
  "error": true
}
```
