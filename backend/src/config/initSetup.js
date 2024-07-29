"use strict";
// Importa el modelo de datos 'Role'
import Role from "../models/role.model.js";
// Importa el modelo de datos 'User'
import User from "../models/user.model.js";

/**
 * Crea los roles por defecto en la base de datos.
 * @async
 * @function createRoles
 * @returns {Promise<void>}
 */
export async function createRoles() {
  try {
    // Busca todos los roles en la base de datos
    const count = await Role.estimatedDocumentCount();
    // Si no hay roles en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Role({ name: "asistente" }).save(),
      new Role({ name: "emprendedor" }).save(),
      new Role({ name: "administrador" }).save(),
    ]);
    console.log("* => Roles creados exitosamente");
  } catch (error) {
    console.log("Error en initSetup.js -> createRoles(): ", error);
  }
}

/**
 * Crea los usuarios por defecto en la base de datos.
 * @async
 * @function createUsers
 * @returns {Promise<void>}
 */
export async function createAdmin() {
  try {
    // Busca todos los usuarios en la base de datos
    const count = await User.estimatedDocumentCount();
    // Si no hay usuarios en la base de datos los crea
    if (count > 0) return;

    const adminRole = await Role.findOne({ name: "administrador" });

    if (!adminRole) {
      console.log("Error: El rol con el ID proporcionado no se encuentra en la base de datos.");
      return;
    }

    await Promise.all([
      new User({
        username: "DDE",
        email: "ddeconcepcion@ubiobio.cl",
        rut: "12345678-0",
        password: await User.encryptPassword("ddeconcepcion"),
        roles: adminRole._id,
      }).save(),
    ]);
    console.log("* => Administrador creado exitosamente");
  } catch (error) {
    console.log("Error en initSetup.js -> createAdmin(): ", error);
  }
}