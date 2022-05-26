// 유효성 검사 클래스
class RegexHelper {
    // constructor() {
    // }

    // alert 함수
    alertToClient(msg) {
        return alert(msg);
    }

    //1. 타입을 확인하는 함수
    checkingType(type, content, selector, length) {
        console.log(
            `RegexHelper checkingValue 함수 실행, type값 ${type} content값 ${content}`);
        if (!(typeof content === `${type}`)) {
            selector.current.value = "";
            selector.current.focus();
            return this.alertToClient("값을 입력해주세요");
        } else {
            // value 값이 있는지 없는지 길이를 초과하지 않았는지 확인하는 함수
            return this.checkingStringValue(content, selector, length);
        }
    }

    //문자열 중간에 띄어쓰기를 없애주는 함수
    removeSpace(content) {
        console.log("removeSpace");
        const value = content
        const reg = / /gi;
        console.log(value.replace(reg, ''));
        return value.replace(reg, '');
    }


    //2. value 값이 있는지 없는지 길이를 초과하지 않았는지 확인하는 함수
    checkingStringValue(content, selector, length) {
        // string 값이라면 앞뒤 띄어쓰기 없애주고
        const value = content.trim();
        console.log(
            `RegexHelper checkingValue 함수 실행, content 값 = ${value.length}`);
        // 만약 띄어쓰기만 되있을 경우를 검사
        if (value.length === 0) {
            selector.current.value = "";
            selector.current.focus();
            return false;
            // 길이가 정한 길이의 초과일 경우
        } else if (value.length > parseInt(length)) {
            alert("설정한 길이를 초과했습니다.");
            selector.current.focus();
            console.log(false);
            return false;
        } else {
            console.log("true 리턴 " + true);
            return true;
        }
    }

    // 이메일 형식 체크
    checkEmail(content, selector) {
        const value = content.trim();
        const email = this.removeSpace(value);
        const reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (reg.test(email) === false) {
            alert("이메일 형식이 올바르지 않습니다.");
            selector.current.value = "";
            selector.current.focus();
            return false;
        } else if (reg.test(email) === true) {
            return true;
        }
    }

    // 비밀번호 형식 체크
    checkPw(content, selector) {
        const value = content.trim();
        const password = this.removeSpace(value);
        //  최소 8자리 이상 영문 대소문자, 숫자, 특수문자가 각각 1개 이상 (패스워드 체크시 활용)
        const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        if (reg.test(password) === false) {
            alert("이메일 형식이 올바르지 않습니다.");
            return false;
        } else if (reg.test(password) === true) {
            return true;
        }

    }


}


module.exports = new RegexHelper();

