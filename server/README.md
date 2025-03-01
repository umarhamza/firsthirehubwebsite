# FirstHireHub API Server

This is a simple Express.js server that acts as a proxy for Mailchimp API calls to avoid CORS issues when subscribing users from the frontend.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```

3. Update the `.env` file with your Mailchimp API key and audience ID.

## Development

Run the server in development mode:
```
npm run dev
```

The server will start on port 3001 by default.

## Production

For production, you'll need to:

1. Set up the server on a hosting platform (e.g., Heroku, DigitalOcean, AWS)
2. Set the `NODE_ENV` environment variable to `production`
3. Update the frontend code to point to your production API URL

Run the server in production mode:
```
npm start
```

## API Endpoints

### Health Check
- **URL**: `/api/health`
- **Method**: `GET`
- **Response**: `{ "status": "ok" }`

### Subscribe to Mailchimp
- **URL**: `/api/subscribe`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "name": "John Doe",
    "tags": ["Tag1", "Tag2"]
  }
  ```
- **Success Response**: 
  ```json
  {
    "success": true,
    "data": { ... }
  }
  ```
- **Error Response**: 
  ```json
  {
    "success": false,
    "error": "Error message"
  }
  ```

## CORS Configuration

The server is configured to accept requests only from:
- `https://firsthirehub.com` in production
- `http://localhost:5173` in development

If you need to change these settings, update the CORS configuration in `index.js`. 