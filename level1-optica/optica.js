db.createCollection("clientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "clientes",
      required: ["name", "phone", "fechaRegistro"],
      properties: {
        name: {
          bsonType: "string"
        },
        phone: {
          bsonType: "string"
        },
        email: {
          bsonType: "string"
        },
        fechaRegistro: {
          bsonType: "date"
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
            },
            puerta: {
              bsonType: "string"
            },
            ciudad: {
              bsonType: "string"
            },
            codigoPostal: {
              bsonType: "string"
            },
            pais: {
              bsonType: "string"
            }
          }
        },
        referidoPor: {
          bsonType: "objectId"
        }
      }
    }
  }
});

db.createCollection("proveedores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "proveedores",
      required: ["nombre", "telefono", "nif"],
      properties: {
        nombre: {
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
            },
            puerta: {
              bsonType: "string"
            },
            ciudad: {
              bsonType: "string"
            },
            codigoPostal: {
              bsonType: "string"
            },
            pais: {
              bsonType: "string"
            }
          }
        },
        telefono: {
          bsonType: "string"
        },
        fax: {
          bsonType: "string"
        },
        nif: {
          bsonType: "string"
        }
      }
    }
  }
});

db.createCollection("gafas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "gafas",
      required: ["marca", "vidrios", "precio", "proveedores"],
      properties: {
        marca: {
          bsonType: "string"
        },
        marco: {
          bsonType: "object",
          title: "object",
          properties: {
            tipo: {
              enum: ["flotante", "pasta", "metalico"]
            },
            color: {
              bsonType: "string"
            }
          }
        },
        vidrios: {
          bsonType: "object",
          title: "object",
          properties: {
            izquierdo: {
              bsonType: "object",
              title: "object",
              required: ["graduacion"],
              properties: {
                graduacion: {
                  bsonType: "double"
                },
                color: {
                  bsonType: "string"
                }
              }
            },
            derecho: {
              bsonType: "object",
              title: "object",
              required: ["graduacion"],
              properties: {
                graduacion: {
                  bsonType: "double"
                },
                color: {
                  bsonType: "string"
                }
              }
            }
          }
        },
        precio: {
          bsonType: "double"
        },
        proveedores: {
          bsonType: "objectId"
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
      required: ["nombre"],
      properties: {
        nombre: {
          bsonType: "string"
        }
      }
    }
  }
});

db.createCollection("ventas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "ventas",
      required: ["fechaVenta", "clientes", "gafas", "empleados"],
      properties: {
        fechaVenta: {
          bsonType: "date"
        },
        clientes: {
          bsonType: "objectId"
        },
        gafas: {
          bsonType: "objectId"
        },
        empleados: {
          bsonType: "objectId"
        }
      }
    }
  }
});
