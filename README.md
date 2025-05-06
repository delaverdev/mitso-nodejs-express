# Tours Booking Service

## Features
- Added full validation for UUID parameters and request bodies.
- Implemented centralized error handling to prevent crashes on invalid input.
- Created CRUD endpoints for Users, Tours, Schedules, and Prices.
- Enabled cascade deletion: deleting Tours removes related Schedules and Prices.
- Structured project using ES modules and organized by resource.

## Installation
```bash
npm install
```

## Running
```bash
npm run start   # development mode with nodemon
npm run lint    # automatically fix lint errors
```

## API Endpoints
Base URL: `http://localhost:4000/api`

### Users
- `GET /users`
- `POST /users`
- `GET /users/:id`
- `PUT /users/:id`
- `DELETE /users/:id`

### Tours
- `GET /tours`
- `POST /tours`
- `GET /tours/:id`
- `PUT /tours/:id`
- `DELETE /tours/:id`
- `GET /tours/:id/schedules`

### Schedules
- `GET /schedules`
- `POST /schedules`
- `GET /schedules/:id`
- `PUT /schedules/:id`
- `DELETE /schedules/:id`
- `GET /schedules/:id/prices`

### Prices
- `GET /prices`
- `POST /prices`
- `GET /prices/:id`
- `PUT /prices/:id`
- `DELETE /prices/:id`

## Validation and Error Handling
- Returns **400 Bad Request** for invalid UUID or missing required fields.
- Returns **404 Not Found** when the resource does not exist.
- Returns **204 No Content** for successful deletions.
- All errors are returned in JSON format: `{ "error": "Description" }`.
