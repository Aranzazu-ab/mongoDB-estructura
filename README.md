# mongoDB-estructura

# Level 1 - Optica (NoSQL)

## Overview
This project designs a NoSQL (MongoDB) database for an optical store ("Cul d'Ampolla") that needs to manage suppliers, glasses, customers, employees, and sales. The goal is to practice document-based data modeling: deciding what to embed and what to reference.

## Database Structure

| Collection | Purpose | Key fields | Embedded / Referenced |
|---|---|---|---|
| `clientes` | Customers | name, phone, email, fechaRegistro | `direccion` embedded · `referidoPor` referenced (self-reference to another `clientes`) |
| `proveedores` | Suppliers | nombre, telefono, fax, nif | `direccion` embedded |
| `gafas` | Glasses (product) | marca, precio | `marco` and `vidrios` (izquierdo/derecho) embedded · `proveedores` referenced |
| `empleados` | Store employees | nombre | — |
| `ventas` | Sales | fechaVenta | `clientes`, `gafas`, and `empleados` all referenced |

**Key relationships:**
- `direccion` (address), `marco` (frame), and `vidrios` (lenses) are **embedded**, because that data only ever makes sense attached to its parent document — it's never queried or reused on its own.
- `clientes`, `proveedores`, `gafas`, and `empleados` are connected through **references** (`objectId`), because the same customer or the same glasses model can show up in many sales — embedding would duplicate data.
- `ventas` is the collection that ties everything together: one sale links exactly one customer, one pair of glasses, and one employee.
- A customer can refer other customers (self-referencing relationship via `referidoPor`).

## Why Exercise 1 and Exercise 2 use the same diagram
Exercise 1 and Exercise 2 don't need two different data models — they're two different screens looking at the same relationships:
- **Exercise 1** starts from a customer and shows their purchase history (customer → `ventas` → `gafas`).
- **Exercise 2** starts from a pair of glasses and shows who bought it and who supplied it (glasses → `ventas` → `clientes` / `proveedores`).

Since `ventas` stores references instead of copying data, both directions can be answered from the exact same collections, with no change to the schema.

## Data Model
![Data Model](./level1-optica/model-optica.png)

## MongoDB Script
File: [`optica.js`](./level1-optica/optica.js)

Contains `db.createCollection()` statements for all five collections, with `$jsonSchema` validators (required fields and `bsonType` for each property), embedded objects for `direccion`, `marco`, and `vidrios`, and `objectId` references between `clientes`, `proveedores`, `gafas`, `empleados`, and `ventas`.
