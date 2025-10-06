# rothem-song
firebase use rothem-song
로뎀 찬양단 발표곡 암기 프로그램

# 데이터 업로드
node upload_data.js

# 에뮬레이터 실행
firebase emulators:start

# 배포
firebase deploy --only hosting

# 익명 설정
1. Firebase Authentication 활성화

Firebase 콘솔로 이동하여 rothem-song 프로젝트를 선택합니다.
왼쪽 메뉴에서 Authentication을 클릭합니다.
만약 "시작하기(Get started)" 버튼이 보인다면, 인증 서비스가 아직 활성화되지 않은 것입니다. "시작하기" 버튼을 눌러 서비스를 활성화해주세요.
2. 익명 로그인 방식 활성화

Authentication 섹션에서 Sign-in method 탭으로 이동합니다.
로그인 제공업체 목록에서 **익명(Anonymous)**을 찾아서 클릭합니다.
활성화 스위치가 꺼져 있다면, 켜서 활성화하고 저장 버튼을 누릅니다.
현재 앱 코드가 signInAnonymously() (익명 로그인)를 사용하고 있으므로, 이 방식이 프로젝트에서 허용되어야만 정상적으로 작동합니다.