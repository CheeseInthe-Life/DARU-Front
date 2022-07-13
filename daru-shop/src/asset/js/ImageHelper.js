class ImageHelper {
  // 파일 이미지 경로 추출
  static getFileImageUrl = (fileBlob, state) => {
    console.log(fileBlob);
    if (!fileBlob) {
      return false;
    }
    // state 변수 []형태
    console.log(state);
    // state
    state(null); // state 초기화(중요!!!)

    let fileReading; // promise 객체
    let result;
    const blob = []; // read 파일

    // 파일 갯수 반복문
    Array.from(fileBlob).forEach((v) => {
      const reader = new FileReader();
      reader.readAsDataURL(v);

      fileReading = new Promise((resolve, reject) => {
        // onload는 비동기 함수이기 때문에 promise
        reader.onload = () => {
          if (!reader.result) {
            return reject(new Error("blob데이터가 없습니다."));
          }
          // console.log(reader.result);
          // onload가 완료되면 blob 배열에 push
          blob.push(reader.result);
          // resolve로 전달할 blob 배열
          // console.log(blob);
          return resolve(blob);
        };
      });
    });
    fileReading.then((res) => {
      if (res.length < 1) {
        throw new Error("blob데이터가 없습니다.");
      } else if (state) {
        state(res);
        result = res;
      } else {
        console.log("state를 넣어주세요");
      }
    }).catch((err) => {
      console.log(err);
      return err;
    });
    return result;
  };

  // 다중 이미지 파일 개별삭제
  static deleteFileImages(selector, index) {
    console.log(`file이미지의 ref ::: ${selector}`);
    console.log(`file이미지의 배열 index ::: ${index}`);
    // 배열 FileList를 변환할 데이터 트렌스퍼
    const dataTransfer = new DataTransfer();
    // 메뉴판 파일 배열들
    const newFileList = Array.from(selector.current.files);
    // 이벤트 발생 시 배열 i번째부터 하나를 자름
    newFileList.splice(index, 1);
    // 배열로 원소를 보내고 dataTransfer로 fileList형식으로 바꿈
    newFileList.forEach((file) => { dataTransfer.items.add(file); });

    // 메뉴판 파일 배열을 바꿔서 새 배열로 할당
    selector.current.files = dataTransfer.files;// eslint-disable-line no-param-reassign
    console.log(selector.current.files);
  }

  // imageUrl 삭제 메서드
  static deleteImageUrl(state, setState, index) {
    const arr = state.splice(index, 1);
    setState(arr);
    return true;
  }
}

export default new ImageHelper();
