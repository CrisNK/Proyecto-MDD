"use strict";

// Se importa el módulo de 'mongoose'
import mongoose from "mongoose";
// Se importa bcryptjs para utilizar su método de encriptación y
import bcrypt from "bcryptjs";

// Crear la colección de usuarios
const userSchema = new mongoose.Schema(
  {
    rut: {
      type:String,
    },
    nombre: {
      type: String,
    },
    emprendimiento: {
      type: String,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    numeroContacto: {
      type: Number,
    },
    rol: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  }, { versionKey: false });

// Contraseña del usuario encriptada
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Comparación entre contraseña encriptada y recibida
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

// Modelo de datos de usuario
const User = mongoose.model("User", userSchema, "Usuarios");

export default User;