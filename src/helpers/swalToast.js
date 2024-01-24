import Swal from "sweetalert2";

export const swalToast = (title, text, icon = "success", timer = 4000) => {
    Swal.fire({
        position: 'center',
        icon,
        title,
        text,
        showConfirmButton: false,
        timer,
    })
}