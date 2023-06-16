# INIKILO API Documentation

## Endpoints

List of available endpoints:

- `GET /products`
- `POST /products`
- `GET /products/:id`
- `DELETE /products/:id`
- `PUT /products/:id`
- `PATCH /products/:id`

- `GET /categories`
- `POST /categories`
- `PUT /categories:id`
- `DELETE /categories:id`

- `POST /users/register`
- `POST /users/login`
- `POST /users/loginGoogle`

- `GET /histories`

- `POST /pub/register`
- `POST /pub/login`
- `POST /pub/loginGoogle`

- `GET /pub/products`
- `GET /pub/products/:id`
- `GET /pub/customer/favorites`
- `POST /pub/products/:id/favorite`

&nbsp;

## 1. GET /products

Description:

- Get all products with user data

Request:

- Headers

```json
    {
        "access_token": String
    }
```

_Response (200 - OK)_
Body:

```json

[
        {
            "id": 1,
            "name": "Bedford Incident, The",
            "description": "Nondisp segmental fracture of shaft of right tibia, sequela",
            "price": 363439,
            "stock": 5,
            "imgUrl": "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "categoryId": 1,
            "authorId": 1,
            "createdAt": "2023-04-10T13:05:09.627Z",
            "updatedAt": "2023-04-10T13:05:09.627Z",
            "User": {
                "id": 1,
                "username": "Don",
                "email": "dgripton0@amazon.de",
                "role": "User",
                "phoneNumber": "+57 281 133 8744",
                "address": "70022 Shopko Terrace",
                "createdAt": "2023-04-10T13:02:23.776Z",
                "updatedAt": "2023-04-10T13:02:23.776Z"
            }
        },
        .....,
]

```

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

&nbsp;

## 2. POST /products/

&nbsp;
Description:

- Create product

Request:

- headers

```json
    {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    {
        "access_token": String
    }
```

- body:

```json
{
  "name": "string",
  "description": "string",
  "price": "integer",
  "stock": "integer",
  "imgUrl": "string",
  "categoryId": "integer",
  "authorId": "integer"
}
```

&nbsp;

_Response (201 - Created)_

```json
{
  "statusCode": 201,
  "message": "Product created successfully",
  "data": {
    "id": 22,
    "name": "Sirwal Chinos",
    "description": "Sirwal Chinos is the most popular product",
    "price": 500000,
    "stock": 1,
    "imgUrl": "-sirwalphotos-",
    "categoryId": 1,
    "authorId": 1,
    "updatedAt": "2023-04-10T14:47:32.043Z",
    "createdAt": "2023-04-10T14:47:32.043Z"
  }
}
```

&nbsp;

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "errors": [
    "name is required!",
    "description is required!",
    "minimum price is 100.000"
  ]
}
```

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

&nbsp;

## 3. GET /products/:id

Description:
Get data product by id

Request:

- Headers

```json
    {
        "access_token": String
    }
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": {
    "id": 1,
    "name": "Bedford Incident, The",
    "description": "Nondisp segmental fracture of shaft of right tibia, sequela",
    "price": 363439,
    "stock": 5,
    "imgUrl": "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "categoryId": 1,
    "authorId": 1,
    "createdAt": "2023-04-10T13:05:09.627Z",
    "updatedAt": "2023-04-10T13:05:09.627Z"
  }
}
```

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "message": "Product not found!"
}
```

## 4. DELETE /products/delete/:id

Description:
Delete product by id

Request:

- Headers

```json
    {
        "access_token": String
    }
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "message": "Product Sirwal Chinos (product name) deleted successfully"
}
```

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

_Response (403 - Forbidden)_

```json

{
    "statusCode": 403,
    "message": "Forbidden!
}

```

_Response (404 - Not Found)_

```json
{
  "message": "Product not found"
}
```

&nbsp;

## 5. GET /categories

Description:

- Get all categories

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": 1,
      "name": "Kemeja",
      "createdAt": "2023-04-10T13:02:23.757Z",
      "updatedAt": "2023-04-10T13:02:23.757Z"
    },
    {
      "id": 2,
      "name": "Cardigan",
      "createdAt": "2023-04-10T13:02:23.757Z",
      "updatedAt": "2023-04-10T13:02:23.757Z"
    },
    {
      "id": 3,
      "name": "Sweater",
      "createdAt": "2023-04-10T13:02:23.757Z",
      "updatedAt": "2023-04-10T13:02:23.757Z"
    },
    {
      "id": 4,
      "name": "Jaket",
      "createdAt": "2023-04-10T13:02:23.757Z",
      "updatedAt": "2023-04-10T13:02:23.757Z"
    },
    {
      "id": 5,
      "name": "Jeans",
      "createdAt": "2023-04-10T13:02:23.757Z",
      "updatedAt": "2023-04-10T13:02:23.757Z"
    }
  ]
}
```

&nbsp;

## 6. POST /categories

&nbsp;
Description:

- Create category

- body:

```json
{
  "name": "string"
}
```

&nbsp;

_Response (201 - Created)_

```json
{
  "statusCode": 201,
  "message": "Category created successfully",
  "data": {
    "id": 22,
    "name": "Sirwal Chinos",
    "updatedAt": "2023-04-10T14:47:32.043Z",
    "createdAt": "2023-04-10T14:47:32.043Z"
  }
}
```

&nbsp;

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "errors": ["name is required!"]
}
```

## 7. PUT /categories/:id

&nbsp;
Description:

- Replace data product

Request:

- headers

```json
    {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    {
        "access_token": String
    }
```

- body:

```json
{
  "name": "string"
}
```

&nbsp;

_Response (200 - Success)_

```json
{
  "statusCode": 200,
  "message": "Product with id 22 updated",
  "data": {
    "id": 22,
    "name": "coaa"
}
```

&nbsp;

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "errors": ["name is required!"]
}
```

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

&nbsp;

## 8. DELETE /categories/:id

Description:
Delete category by id

Request:

- Headers

```json
    {
        "access_token": String
    }
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "message": "Kemeja (category name) deleted successfully"
}
```

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

_Response (403 - Forbidden)_

```json

{
    "statusCode": 403,
    "message": "Forbidden!
}

```

_Response (404 - Not Found)_

```json
{
  "message": "Category not found"
}
```

## 9 POST /users/register

&nbsp;
Description:

- Create user

Request:

- headers

```json
    {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    {
        "access_token": String
    }
```

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

&nbsp;

_Response (201 - Created)_

```json
{
  "statusCode": 201,
  "message": "Product created successfully",
  "data": {
    "username": "khoirul",
    "email": "khoi@mail.com",
    "password": "123456",
    "phoneNumber": "",
    "address": ""
  }
}
```

&nbsp;

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "errors": [
    "email is required!",
    "password is required!",
    "minimum length password is 5!"
  ]
}
```

## 10. POST /users/login

&nbsp;
Description:

- Login Admin

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

&nbsp;

_Response (200 - success)_

```json
{
  "statusCode": 200,
  "message": "Login success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJza2FobjFAZGFpbHltb3Rpb24uY29tIiwiaWF0IjoxNjgxNzQ0NTk5fQ.57xruHx6qeND4WFpCkk20yH5GI31E-I8LKJSlYJOgwA",
    "email": "skahn1@dailymotion.com",
    "role": "Admin"
  }
}
```

&nbsp;

_Response (401 - Invalid username or password)_

```json
{
  "statusCode": 401,
  "message": "Invalid username or password"
}
```

&nbsp;

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "message": "Not found!"
}
```

## 11. POST /users/loginGoogle

&nbsp;
Description:

- Login user

_Response (200 - success)_

```json
{
  "statusCode": 200,
  "message": "Login success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJza2FobjFAZGFpbHltb3Rpb24uY29tIiwiaWF0IjoxNjgxNzQ0NTk5fQ.57xruHx6qeND4WFpCkk20yH5GI31E-I8LKJSlYJOgwA",
    "email": "khoirulariffin@gmail.com",
    "role": "Staff"
  }
}
```

## 12. PUT /products/:id

&nbsp;
Description:

- Replace data product

Request:

- headers

```json
    {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    {
        "access_token": String
    }
```

- body:

```json
{
  "name": "string",
  "description": "string",
  "price": "integer",
  "stock": "integer",
  "imgUrl": "string",
  "categoryId": "integer",
  "authorId": "integer"
}
```

&nbsp;

_Response (200 - Success)_

```json
{
  "statusCode": 200,
  "message": "Product with id 22 updated",
  "data": {
    "id": 22,
    "name": "coaa",
    "description": "baruuu",
    "price": 500000,
    "stock": 1,
    "imgUrl": null,
    "categoryId": 1,
    "authorId": 2,
    "status": "Active",
    "createdAt": "2023-04-17T15:14:13.068Z",
    "updatedAt": "2023-04-17T15:21:26.645Z"
  }
}
```

&nbsp;

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "errors": [
    "name is required!",
    "description is required!",
    "minimum price is 100.000"
  ]
}
```

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

&nbsp;

## 13. PATCH /products/:id

&nbsp;
Description:

- Modify status product

Request:

- headers

```json
    {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    {
        "access_token": String
    }
```

- body:

```json
{
  "status": "string"
}
```

&nbsp;

_Response (200 - Success)_

```json
{
  "statusCode": 200,
  "message": "Product with id 22 status has been updated from Archived to Active",
  "data": {
    "id": 22,
    "name": "coaa",
    "description": "baruuu",
    "price": 500000,
    "stock": 1,
    "imgUrl": null,
    "categoryId": 1,
    "authorId": 2,
    "status": "Active",
    "createdAt": "2023-04-17T15:14:13.068Z",
    "updatedAt": "2023-04-17T15:31:01.358Z"
  }
}
```

&nbsp;

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

&nbsp;

## 14. GET /histories

Description:

- Get all histories

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": 1,
      "name": "Kemeja",
      "description": "Product ID 1 has been updated from status Active to Inactivw",
      "updatedBy": "skipper@dailymotion.com"
      "createdAt": "2023-04-10T13:02:23.757Z",
      "updatedAt": "2023-04-10T13:02:23.757Z"
    }
  ]
}
```

&nbsp;

## 15. POST /pub/register

&nbsp;
Description:

- Create customer

Request:

- headers

```json
    {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    {
        "access_token": String
    }
```

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

&nbsp;

_Response (201 - Created)_

```json
{
  "statusCode": 201,
  "message": "User Created",
  "user": {
    "id": 4,
    "email": "aiko@mail.comm",
    "role": "customer"
  }
}
```

&nbsp;

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "message": "Email is required!"
}
```

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "message": "Password is required!"
}
```

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "message": "email must be unique"
}
```

## 16. POST /pub/login

&nbsp;
Description:

- Login customer

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

&nbsp;

_Response (200 - success)_

```json
{
  "statusCode": 200,
  "message": "Login Success",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhaWtvQG1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjgzMjEyNzQyfQ.sO-1zipr-yxL44MzeFxiROCMGo4h_cm-O8PAmdSBSP0"
}
```

&nbsp;

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "message": "Email/password is required"
}
```

&nbsp;
_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "message": "Invalid username or password"
}
```

&nbsp;

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "message": "Not found!"
}
```

## 17. POST /pub/loginGoogle

&nbsp;
Description:

- Login user

_Response (200 - success)_

```json
{
  "statusCode": 200,
  "message": "Login success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJza2FobjFAZGFpbHltb3Rpb24uY29tIiwiaWF0IjoxNjgxNzQ0NTk5fQ.57xruHx6qeND4WFpCkk20yH5GI31E-I8LKJSlYJOgwA",
    "email": "aiko@mail.com",
    "role": "customer"
  }
}
```

## 18. GET /pub/products/

&nbsp;
Description:

- Create product

Request:

- params (optional)

```json
{
  "count": "integer (limit data per page)",
  "page": "integer (page position)",
  "order": "string",
  "sort": "string",
  "search": "string",
  "value": "string"
}
```

- body:

```json
{
  "name": "string",
  "description": "string",
  "price": "integer",
  "stock": "integer",
  "imgUrl": "string",
  "categoryId": "integer",
  "authorId": "integer"
}
```

&nbsp;

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": {
    "totalProducts": 1,
    "maxPage": 0,
    "page": "1",
    "limit": "5",
    "products": [
      {
        "id": 11,
        "name": "Lilian's Story",
        "description": "Toxic effect of ethanol, accidental (unintentional), init",
        "price": 811613,
        "stock": 5,
        "imgUrl": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
        "categoryId": 3,
        "authorId": 1,
        "status": "Active",
        "createdAt": "2023-05-04T15:05:38.983Z",
        "updatedAt": "2023-05-04T15:05:38.983Z",
        "Category": {
          "id": 3,
          "name": "Sweater",
          "createdAt": "2023-05-04T15:05:38.513Z",
          "updatedAt": "2023-05-04T15:05:38.513Z"
        }
      }
    ]
  }
}
```

&nbsp;

## 19. GET /pub/products/:id

Description:
Get data product by id

Request:

_Response (200 - OK)_

```json
{
  "statusCode": 200,
  "data": {
    "id": 1,
    "name": "Bedford Incident, The",
    "description": "Nondisp segmental fracture of shaft of right tibia, sequela",
    "price": 363439,
    "stock": 5,
    "imgUrl": "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "categoryId": 1,
    "status": "Active",
    "Category": {
      "id": 1,
      "name": "Kemeja"
    }
  },
  "qrCode": "<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\">\n\t\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"100\" height=\"100\" viewBox=\"0 0 2000 2000\" x=\"0\" y=\"0\" shape-rendering=\"crispEdges\"><defs/><rect x=\"0\" y=\"0\" width=\"2000\" height=\"2000\" fill=\"#ffffff\"/><rect x=\"517\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"471\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"517\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"563\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"609\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"655\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"701\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"747\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"793\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"839\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"885\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"931\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"977\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1023\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1069\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1115\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1161\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1207\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1253\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1299\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"471\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1345\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1391\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1437\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1483\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"517\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"977\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"563\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1115\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"701\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"793\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"885\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1345\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"655\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"747\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"931\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1161\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1207\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1483\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"609\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"839\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1023\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1069\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1253\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1299\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1391\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1437\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"149\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"425\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"149\" y=\"425\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"241\" width=\"138\" height=\"138\" fill=\"#000000\"/><rect x=\"241\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"149\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"1805\" y=\"195\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"1529\" y=\"425\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"149\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"195\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"379\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1529\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1575\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1759\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1805\" y=\"425\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"241\" width=\"138\" height=\"138\" fill=\"#000000\"/><rect x=\"1621\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"241\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"287\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1621\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1667\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"1713\" y=\"333\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1529\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1575\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"425\" y=\"1575\" width=\"46\" height=\"230\" fill=\"#000000\"/><rect x=\"149\" y=\"1805\" width=\"322\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1529\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1575\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1759\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"149\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"195\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"379\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"425\" y=\"1805\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1621\" width=\"138\" height=\"138\" fill=\"#000000\"/><rect x=\"241\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1621\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1667\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"241\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"287\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><rect x=\"333\" y=\"1713\" width=\"46\" height=\"46\" fill=\"#000000\"/><svg version=\"1.0\" id=\"Layer_1\" x=\"632\" y=\"632\" viewBox=\"0 0 700 700\" enable-background=\"new 0 0 700 700\" xml:space=\"preserve\" width=\"736\" height=\"736\" shape-rendering=\"auto\">\n<g>\n\t<g>\n\t\t<polygon fill=\"#000000\" points=\"115.7,584.3 115.7,414.3 87.5,414.3 87.5,584.3 87.5,612.5 115.7,612.5 285.7,612.5 285.7,584.3       \"/>\n\t\t<polygon fill=\"#000000\" points=\"115.7,115.7 285.7,115.7 285.7,87.5 115.7,87.5 87.5,87.5 87.5,115.7 87.5,285.7 115.7,285.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,115.7 584.3,285.7 612.5,285.7 612.5,115.7 612.5,87.5 584.3,87.5 414.3,87.5 414.3,115.7       \"/>\n\t\t<polygon fill=\"#000000\" points=\"584.3,584.3 414.3,584.3 414.3,612.5 584.3,612.5 612.5,612.5 612.5,584.3 612.5,414.3     584.3,414.3   \"/>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M246.1,274c0-3.3-1.2-6-3.6-8.1c-2.4-2-6.5-3.9-12.5-5.7c-10.4-3-18.2-6.5-23.5-10.6     c-5.3-4.1-7.9-9.7-7.9-16.8s3-13,9.1-17.5c6.1-4.5,13.8-6.8,23.3-6.8c9.6,0,17.3,2.5,23.4,7.6c6,5.1,8.9,11.3,8.7,18.8l-0.1,0.4     h-16.9c0-4-1.3-7.3-4-9.8c-2.7-2.5-6.5-3.7-11.3-3.7c-4.7,0-8.3,1-10.8,3.1s-3.8,4.7-3.8,7.9c0,2.9,1.4,5.4,4.1,7.3     c2.7,1.9,7.4,3.9,14.1,6c9.6,2.7,16.9,6.2,21.8,10.6c4.9,4.4,7.4,10.1,7.4,17.3c0,7.4-2.9,13.3-8.8,17.6     c-5.9,4.3-13.6,6.5-23.3,6.5c-9.5,0-17.7-2.4-24.8-7.3c-7.1-4.9-10.5-11.7-10.3-20.5l0.1-0.4h17c0,5.2,1.6,9,4.7,11.4     c3.2,2.4,7.6,3.6,13.2,3.6c4.7,0,8.4-1,10.9-2.9C244.9,279.9,246.1,277.3,246.1,274z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M342.4,267.1l0.1,0.4c0.2,9.4-2.7,16.8-8.6,22.3c-5.9,5.5-14,8.2-24.5,8.2c-10.5,0-19-3.4-25.5-10.1     s-9.8-15.4-9.8-26v-17.3c0-10.6,3.2-19.2,9.6-26c6.4-6.8,14.7-10.2,24.9-10.2c10.8,0,19.2,2.8,25.2,8.3c6.1,5.5,9,13,8.8,22.6     l-0.1,0.4h-17c0-5.7-1.4-10.1-4.1-13.2c-2.7-3.1-7-4.6-12.8-4.6c-5.2,0-9.4,2.1-12.4,6.4c-3.1,4.2-4.6,9.6-4.6,16.2v17.4     c0,6.6,1.6,12.1,4.8,16.3c3.2,4.2,7.6,6.4,13.1,6.4c5.5,0,9.5-1.5,12.1-4.4c2.6-2.9,3.9-7.3,3.9-13.1H342.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M401.6,278h-30.5l-5.9,18.8h-17.6l29.9-87h17.9l29.8,87h-17.6L401.6,278z M375.4,264.3h21.9l-10.8-34.2     h-0.4L375.4,264.3z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M503.6,296.7h-17.4l-35.1-59.4l-0.4,0.1v59.4h-17.4v-87h17.4l35.1,59.4l0.4-0.1v-59.3h17.4V296.7z\"/>\n\t\t</g>\n\t\t<g>\n\t\t\t<path fill=\"#000000\" d=\"M224.4,329.3l51.6,131.6h0.7l51.6-131.6h28v162h-21.9v-64.1l2.2-65.9l-0.6-0.1l-52.5,130.1h-14.6     l-52.3-129.8l-0.6,0.1l2.1,65.5v64.1h-21.9v-162H224.4z\"/>\n\t\t\t<path fill=\"#000000\" d=\"M492.7,416.2h-74.2v57.9h85.6v17.2H396.6v-162h106.3v17.2h-84.4V399h74.2V416.2z\"/>\n\t\t</g>\n\t</g>\n</g>\n</svg></svg>\n\n</svg>\n"
}
```

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "message": "Product not found!"
}
```

## 20. GET /pub/customer/favorites

Description:

- Get customer favorite

Request:

- Headers

```json
    {
        "access_token": String
    }
```

_Response (200 - OK)_
Body:

```json
{
  "id": 1,
  "email": "aiko@mail.com",
  "totalFavorites": 8,
  "favorites": [
    {
      "id": 1,
      "IdCustomer": 1,
      "IdProduct": 1
    },
    {
      "id": 2,
      "IdCustomer": 1,
      "IdProduct": 2
    },
    {
      "id": 3,
      "IdCustomer": 1,
      "IdProduct": 5
    },
    {
      "id": 5,
      "IdCustomer": 1,
      "IdProduct": 6
    },
    {
      "id": 6,
      "IdCustomer": 1,
      "IdProduct": 6
    },
    {
      "id": 7,
      "IdCustomer": 1,
      "IdProduct": 7
    },
    {
      "id": 8,
      "IdCustomer": 1,
      "IdProduct": 8
    },
    {
      "id": 9,
      "IdCustomer": 1,
      "IdProduct": 9
    }
  ]
}
```

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

&nbsp;

## 21. POST /pub/products/:id/favorite

&nbsp;
Description:

- Add favorite product

Request:

- headers

```json
    {
        "access_token": String
    }
```

&nbsp;

_Response (201 - Created)_

```json
{
  "statusCode": 201,
  "message": "Favorite has been added",
  "data": {
    "id": 10,
    "IdCustomer": 1,
    "IdProduct": 19,
    "updatedAt": "2023-05-06T04:05:23.920Z",
    "createdAt": "2023-05-06T04:05:23.920Z"
  }
}
```

&nbsp;

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "message": "Data Exist"
}
```

_Response (401 - InvalidToken)_

```json

{
    "statusCode": 401,
    "message": "Please Login First!
}

```

&nbsp;
