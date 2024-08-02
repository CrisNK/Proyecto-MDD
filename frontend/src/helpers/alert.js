import Swal from "sweetalert2";

export const showSuccessAlert = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Inscripción enviada!",
        showConfirmButton: false,
        timer: 3500,
      });
}

export const showErrorAlert = () => {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error al enviar la inscripción!",
        showConfirmButton: false,
        timer: 3500,
      });
}

export const noEncontrado = () => {
  Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Evento no encontrado!",
      showConfirmButton: false,
      timer: 3500,
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

export const showConfirmModEventAlert = (onConfirm, onDeny) => {
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
    showConfirmButton: true,
    timer: 1600
  });
};

export const showInfoModEventAlert = () => {
  return Swal.fire({
    icon: "info",
    title: "Los cambios no fueron guardados",
    showConfirmButton: true,
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