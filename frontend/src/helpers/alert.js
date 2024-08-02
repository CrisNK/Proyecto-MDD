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