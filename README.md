Authentication Service
src/controllers: Contains controller functions for handling authentication and authorization logic.
src/models: Defines data models for users, tokens, etc.
src/routes: Defines API routes for user authentication and authorization.
package.json: Manages dependencies and scripts for the authentication service.

Product Service
src/controllers: Contains controller functions for handling CRUD operations on products.
src/models: Defines data models for products.
src/routes: Defines API routes for product management.
package.json: Manages dependencies and scripts for the product service.

Order Service
src/controllers: Contains controller functions for handling order processing.
src/models: Defines data models for orders.
src/routes: Defines API routes for order management.
package.json: Manages dependencies and scripts for the order service.

Common
config: Contains configuration files for database connection, environment variables, etc.
middleware: Contains custom middleware functions for authentication, error handling, etc.
utils: Contains utility functions used across microservices.

Docker Compose
docker-compose.yml: Defines the services, networks, and volumes for running the microservices and the database container.