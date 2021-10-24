import Swal from "sweetalert2";

export function sweetAlert(title: string, content: string, icon: any) {
  return Swal.fire(title, content, icon);
}
