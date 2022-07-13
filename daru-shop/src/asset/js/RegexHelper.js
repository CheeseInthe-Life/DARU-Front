// 유효성 검사 클래스
class RegexHelper {
  // constructor() {
  // }

  // alert 함수, 나중에 알럿 라이브러리 쓸때 생각해보기
  alertToClient(msg) {
    return alert(msg);
  }

  // 문자열 중간에 띄어쓰기를 없애주는 함수
  removeSpace(content) {
    console.log("RegexHelper removeSpace 함수 실행");
    const value = content;
    const reg = / /gi;
    console.log(value.replace(reg, ""));
    return value.replace(reg, "");
  }

  // 1. 타입을 확인하는 함수()
  checkType(type, content, selector, minLength, maxLength) {
    console.log(
      `RegexHelper checkType 함수 실행, type값 = ${type} content값 = ${content} selector값 = ${selector} minLength = ${minLength} maxLength = ${maxLength}`,
    );
    console.log(selector);
    if (!(typeof content === `${type}`)) {// eslint-disable-line
      ;
      selector.current.value = "";// eslint-disable-line
      selector.current.focus();
      this.alertToClient("값을 입력해주세요");
      return false;
    }
    // 타입검사가 완료되면 자동으로 타입에 따라서 string, number의 띄어쓰기와 빈값이 있는지 검사
    switch (type) {
      case "string":
        console.log("checkType switch string");
        this.checkStringValue(content, selector, minLength, maxLength);
        break;
      default:
    }
    return true;
  }

  // 2. value 값이 있는지 없는지 글자 길이를 미만, 초과하지 않았는지 확인하는 함수
  checkStringValue(content, selector, minLength = 0, maxLength = 100) {
    // string 값이라면 앞뒤 띄어쓰기 없애주고
    const value = content.trim();
    console.log(
      `RegexHelper checkingValue 함수 실행, content 길이 = ${value.length}, selector = ${selector}, minLength = ${minLength} , maxLength = ${maxLength}`,
    );
    // 만약 띄어쓰기만 되있을 경우를 검사
    if (value.length === 0) {
      console.log(selector.current.value);
      selector.current.value = "";// eslint-disable-line
      selector.current.focus();
      return false;
    } if (value.length < parseInt(minLength, 10)) {
      alert("설정한 길이보다 작습니다.");
      selector.current.focus();
      console.log(false);
      return false;
      // 길이가 정한 길이의 초과일 경우
    } if (value.length > parseInt(maxLength, 10)) {
      alert("설정한 길이를 초과했습니다.");
      selector.current.focus();
      console.log(false);
      return false;
    }
    console.log(`값이 있고, 설정한 길이를 초과하지 않았습니다. ${true}`);
    return true;
  }

  // 이메일 형식 체크
  checkEmail(type, content, selector, minLength = 5, maxLength = 100) {
    console.log(
      `RegexHelper checkEmail 함수 실행, type = ${type} content = ${content}, selector = ${selector}, minLength = ${minLength} , maxLength = ${maxLength}`,
    );
    // type 검사와 빈 값 및 길이 검사
    if (!(this.checkType(type, content, selector, minLength, maxLength))) {
      return false;
    }
    const value = content.trim();
    const email = this.removeSpace(value);
    const reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;//eslint-disable-line

    return this.testingToRegex(email, reg, selector, "이메일 형식이 올바르지 않습니다.");
  }

  // 비밀번호 형식 체크
  checkPassword(type, content, selector, minLength = 8, maxLength = 21) {
    console.log(
      `RegexHelper checkPw 함수 실행, type = ${type}content = ${content}, selector = ${selector}, minLength = ${minLength} , maxLength = ${maxLength}`,
    );
    if (!(this.checkType(type, content, selector, minLength, maxLength))) {
      return false;
    }
    const value = content.trim();
    const password = this.removeSpace(value);
    //  최소 8자리 이상 영문, 숫자, 특수문자가 각각 1개 이상 (패스워드 체크시 활용)
    const reg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/i;// eslint-disable-line라

    return this.testingToRegex(password, reg, selector, "비밀번호 형식이 올바르지 않습니다. 다시 확인해주세요. (최소 8자리 이상 영문, 숫자, 특수문자가 각각 1개 이상)");
  }

  // 인증번호 형식체크
  checkAuthNum(type, content, selector, minLength = 6, maxLength = 7) {
    console.log(
      `RegexHelper checkAuthNum(type, content, selector, minLength = 5, maxLength = 7) {
 함수 실행, type = ${type}content = ${content}, selector = ${selector}, minLength = ${minLength} , maxLength = ${maxLength}`,
    );
    if (!(this.checkType(type, content, selector, minLength, maxLength))) {
      return false;
    }
    console.log(selector);
    const value = content.trim();
    const authenticationNumber = this.removeSpace(value);
    const reg = /^[0-9]+$/;

    return this.testingToRegex(authenticationNumber, reg, selector, "인증번호 형식이 올바르지 않습니다. 숫자 6자리로 입력해주세요.");
  }

  // 핸드폰 4자리 유효성 검사
  checkPhoneNum(type, content, selector, minLength = 3, maxLength = 4) {
    console.log("CheckPhoneNum 함수 실행");
    if (!(this.checkType(type, content, selector, minLength, maxLength))) {
      console.log("false");
      return false;
    }
    console.log(selector);
    const value = content.trim();
    const phoneNumber = this.removeSpace(value);
    const reg = /[0-9]/;
    console.log(phoneNumber);

    return this.testingToRegex(phoneNumber, reg, selector, "휴대폰 번호를 확인해주세요.");
  }

  // 생년월일 유효성검사 (6자리)
  checkBirthDay(type, content, selector, minLength = 6, maxLength = 7) {
    console.log("CheckPhoneNum 함수 실행");
    if (!(this.checkType(type, content, selector, minLength, maxLength))) {
      console.log("false");
      return false;
    }
    console.log(selector);
    const value = content.trim();
    const birthday = this.removeSpace(value);
    const reg = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/g;// eslint-disable-line라
    console.log(birthday);

    return this.testingToRegex(birthday, reg, selector, "생년월일을 확인해 주세요.(6자리로 입력해주세요 ex)000000)");
  }

  // reg 유효성 검사 및 focus
  testingToRegex(value, reg, selector, msg) {
    console.log(value, reg, selector, msg);
    let result = reg.test(value);
    
    console.log(result);
    if (result === false) {
      console.log("false");
      alert(msg);
      selector.current.focus();
      result = false;
    } else if (result === true) {
      console.log("true");
      result = true;
    }
    console.log(result);
    return result;
  }
}

export default new RegexHelper();
