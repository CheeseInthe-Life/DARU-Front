// 알럿창 helper
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../scss/alert.scss";

const MySwal = withReactContent(Swal);

function SwalAlert() {
    MySwal.fire({
        title: "로그인이 완료되었습니다.",
        icon: "success",
        confirmButtonText: "확인"
    });
};



export { SwalAlert };