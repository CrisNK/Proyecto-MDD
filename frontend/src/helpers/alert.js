import Swal from "sweetalert2";

export const showSuccessAlert = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Inscripción enviada!",
        showConfirmButton: false,
        timer: 1500,
      });
}

export const showErrorAlert = () => {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Error al enviar la inscripción!",
        showConfirmButton: false,
        timer: 1500,
      });
}

export const noEncontrado = () => {
  Swal.fire({
      position: "center",
      icon: "error",
      title: "Evento no encontrado!",
      showConfirmButton: false,
      timer: 1500,
    });
}

export const ShowCreateEventAlert = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Evento Creado Exitosamente",
    showConfirmButton: false,
    timer: 1500
  });
}
export const showErrorCreateEventAlert = () => {
  Swal.fire({
      position: "center",
      icon: "error",
      title: "Error al Crear Evento",
      showConfirmButton: false,
      timer: 1500,
    });
}

export const showSuccessAlertProduct = () => {
  Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto creado exitosamente!",
      showConfirmButton: false,
      timer: 3500,
    });
}

export const showErrorAlertProduct = () => {
  Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Error al crear producto!",
      showConfirmButton: false,
      timer: 3500,
    });
}export const showConfirmModEventAlert = (onConfirm, onDeny) => {
  Swal.fire({
    icon: "warning",
    position: "center",
    title: "¿Estás seguro de que quieres guardar estos cambios?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: "No guardar"
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
    } else if (result.isDenied) {
      onDeny();
    }
  });
};

export const showSuccessModEventAlert = () => {
  return Swal.fire({
    icon: "success",
    title: "Cambios Guardados!",
    showConfirmButton: false,
    timer: 1600
  });
};

export const showInfoModEventAlert = () => {
  return Swal.fire({
    icon: "info",
    title: "Los cambios no fueron guardados",
    showConfirmButton: false,
    timer: 1600
  });
};

export const showErrorModEventAlert = (message) => {
  return Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
    showConfirmButton: true
  });
};

export const showDeletedEventAlert = () => {
  return Swal.fire({
    title: "¿Estás seguro que deseas eliminar el evento?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar!"
  });
};

export const showSuccessDeletedAlert = () => {
  return Swal.fire({
    title: "¡Eliminado!",
    text: "El evento ha sido eliminado.",
    icon: "success",
    showConfirmButton: false,
    timer: 1600
  });
};

export const showInfoDeletedAlert = () => {
  return Swal.fire({
    icon: "info",
    title: "La eliminación fue cancelada",
    showConfirmButton: false,
    timer: 1600
  });
};