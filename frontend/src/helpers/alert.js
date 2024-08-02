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

