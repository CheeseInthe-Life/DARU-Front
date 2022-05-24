// 유효성 검사 클래스
class RegexHelper {
    // constructor() {
    // }

    //1. 타입을 확인하는 함수
    checkingType(type, content) {
        if (!(typeof content === `${type}`)) {
            this.alertToClient("값을 입력해주세요");
            return false;
        } else {
            return true;
        }
    }

    removeSpace(content) {
        console.log("removeSpace");
        const value = content
        const reg = / /gi;
        console.log(value.replace(reg, ''));
        return value.replace(reg, '');
    }

    // alert 함수
    alertToClient(msg) {
        return alert(msg);
    }

    //2. value 값이 있는지 없는지 확인하는 함수
    checkingStringValue(content) {
        // content 값 검사 string 값이 아니라면 return
        if (!(this.checkingType("string", content))) {
            return console.log("");
        };
        // string 값이라면 앞뒤 띄어쓰기 없애주고
        const value = content.trim();

        console.log(
            `RegexHelper checkingValue 함수 실행, content 값 = ${value}`);
        // 만약 띄어쓰기만 되있을 경우를 검사
        if (value.length === 0) {
            console.log("띄어쓰기만 되어 있을 경우");
            return false;
        } else {
            console.log(true);
            return true;
        }
    }

    // 이메일 형식 체크
    checkEmail(content) {
        const value = content.trim();
        const email = this.removeSpace(value);
        const reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if (reg.test(email) === false) {
            alert("이메일 형식이 올바르지 않습니다.");
            return false;
        } else if (reg.test(email) === true) {
            return true;
        }
    }

    // 비밀번호 형식 체크
    checkPw(content) {
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

