// 파일의 확장자, 길이, 크기 검사
class CheckFiles {
    // 파일의 길이 검사
    checkFileLength(obj, length) {
        const files = obj.length;
        if (files > length) {
            alert(`파일의 최대갯수 ${length}개를 넘었습니다. ${length}개 이하로 설정해주세요.`)
            return false;
        } else if (files <= length) {
            return true;
        }
    }
    // 파일의 확장자, 사이즈 검사
    checkFile(obj, length = 1, ext = ['jpg', 'jpeg', 'pdf', 'png']) {
        // console.log("CheckFile 함수 실행");
        // 파일의 갯수 검사
        if (!this.checkFileLength(obj, length)) {
            console.log("D");
            return false;
        }
        // 최대 파일 사이즈
        const maxSize = 5 * 1024 * 1024;
        // 확장자 검사
        let check = true;

        Array.from(obj).forEach((v, i) => {
            // console.log(v);
            // 파일 확장자명
            const fileExt = v.type.substring(v.type.indexOf("/") + 1);
            // 파일의 확장자 검사(true, false 리턴)
            const fileExtResult = ext.some(x => {
                // str의 배열과 fileExt의 확장자명이랑 같으면 true
                return x === fileExt;
            })
            // console.log(fileExtResult);
            // 사이즈 체크
            if (v.size > maxSize) {
                alert(`파일사이즈는 5MB 이하로 해주세요. 파일명: ${v.name}`);
                check = false;
                // 확장자 체크
            } else if (fileExtResult === false) {
                alert(`파일의 확장자를 확인해주세요. 파일명: ${v.name}`);
                check = false;
            }
        });

        return check;
    }

    // 파일 이름 출력
    printFileNames(obj) {
        let fileNames = [];
        Array.from(obj).forEach((v, i) => {
            fileNames.push(v.name);
        });
        console.log(fileNames);
        return fileNames;
    }

}

export default new CheckFiles();

