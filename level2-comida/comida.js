db.createCollection("clientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "clientes",
      required: ["nombre", "apellidos", "telefono", "codigoPostal", "localidad", "provincia"],
      properties: {
        nombre: {
          bsonType: "string"
        },
        apellidos: {
          bsonType: "string"
        },
        telefono: {
          bsonType: "string"
        },
        direccion: {
          bsonType: "object",
          title: "object",
          properties: {
            calle: {
              bsonType: "string"
            },
            numero: {
              bsonType: "string"
            },
            piso: {
              bsonType: "string"
            }
          }
        },
        codigoPostal: {
          bsonType: "string"
        },
        localidad: {
          bsonType: "string"
        },
        provincia: {
          bsonType: "string"
        }
      }
    }
  }
});

db.createCollection("sucursales", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sucursales",
      required: ["direccion", "codigoPostal", "localidad", "provincia"],
      properties: {
        direccion: {
          bsonType: "object",
          title: "object",
          required: ["calle", "numero", "piso"],
          properties: {
            calle: {
              bsonType: "string"
            },
            numero: {
              bsonType: "string"
            },
            piso: {
              bsonType: "string"
            }
          }
        },
        codigoPostal: {
          bsonType: "string"
        },
        localidad: {
          bsonType: "string"
        },
        provincia: {
          bsonType: "string"
        }
      }
    }
  }
});

db.createCollection("empleados", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "empleados",
      required: ["nombre", "apellidos", "nif", "puesto", "sucursal"],
      properties: {
        nombre: {
          bsonType: "string"
        },
        apellidos: {
          bsonType: "string"
        },
        nif: {
          bsonType: "string"
        },
        telefono: {
          bsonType: "string"
        },
        puesto: {
          enum: ["cocinero", "repartidor"]
        },
        sucursal: {
          bsonType: "objectId"
        }
      }
    }
  }
});

db.createCollection("categoriasPizzas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "categoriasPizzas",
      required: ["nombre"],
      properties: {
        nombre: {
          bsonType: "string"
        }
      }
    }
  }
});

db.createCollection("productos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "productos",
      required: ["tipoProducto", "nombre", "precio"],
      properties: {
        tipoProducto: {
          enum: ["pizza", "hamburguesa", "bebida"]
        },
        nombre: {
          bsonType: "string"
        },
        descripcion: {
          bsonType: "string"
        },
        imagen: {
          bsonType: "string"
        },
        precio: {
          bsonType: "double"
        },
        categoriasPizzas: {
          bsonType: "objectId"
        }
      }
    }
  }
});

db.createCollection("pedidos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "pedidos",
      required: ["clientes", "fecha_hora", "precioTotal", "cantProductos", "tipoPedido", "sucursales"],
      properties: {
        clientes: {
          bsonType: "objectId"
        },
        fecha_hora: {
          bsonType: "date"
        },
        precioTotal: {
          bsonType: "double"
        },
        cantProductos: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["idProductos", "cantidad", "precioUnitario"],
            properties: {
              idProductos: {
                bsonType: "objectId"
              },
              cantidad: {
                bsonType: "int"
              },
              precioUnitario: {
                bsonType: "double"
              }
            }
          }
        },
        tipoPedido: {
          enum: ["domicilio", "recogida"]
        },
        nota: {
          bsonType: "string"
        },
        repartidor: {
          bsonType: "objectId"
        },
        hora_reparto: {
          bsonType: "date"
        },
        sucursales: {
          bsonType: "objectId"
        }
      }
    }
  }
});
