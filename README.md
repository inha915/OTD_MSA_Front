# 🌿 OTD_MSA_Front

**OneToday (OTD)** 프론트엔드 레포지토리입니다.  
이 프로젝트는 MSA(Microservice Architecture) 기반의 헬스케어 라이프스타일 플랫폼으로
사용자의 **운동 · 식단 · 커뮤니티 활동**을 기록하고 관리할 수 있도록 설계되었습니다.

---

## ⚙️ 개발 환경

| 항목 | 버전 |
|------|------|
| Node.js | 18+ |
| Vue.js | 3.x |
| Vite | 5.x |
| Pinia | 2.x |
| Vuetify | 3.x |
| Axios | 최신 버전 |

---

## 🚀 실행 방법

### 1️⃣ 의존성 설치

npm install

### 2️⃣ 개발 서버 실행

npm run dev
 - 기본 주소: http://localhost:5173

### 3️⃣ 빌드

npm run build

---

## 🌐 백엔드 연동

이 프론트엔드는 MSA 구조의 백엔드 API와 연동됩니다.

| 서비스 | 레포지토리 | 역할 |
|--------|-------------|------|
| **Gateway** | [OTD_MSA_Back_Gateway](https://github.com/inha915/OTD_MSA_Back_Gateway) | API 게이트웨이 |
| **User** | [OTD_MSA_Back_User](https://github.com/inha915/OTD_MSA_Back_User) | 유저 · 인증 도메인 |
| **Life** | [OTD_MSA_Back_Life](https://github.com/inha915/OTD_MSA_Back_Life) | 커뮤니티 · 운동 · 식단 도메인 |

---

💡 주요 기능

🔐 로그인 / 회원가입 — JWT 기반 인증 및 세션 관리
🏋️‍♀️ 운동 기록 — 사용자 운동 데이터 시각화
🍱 식단 관리 — 음식 기록 및 칼로리 계산
💬 커뮤니티 기능 — 게시글, 댓글, 좋아요, 이미지 업로드
🎯 챌린지 / 포인트 시스템 (추후 연동 예정)

---

🧑‍💻 개발자 정보
이름	             역할	                설명
박인하     	프론트엔드 메인 개발     	커뮤니티 UI/UX 설계, Pinia 상태관리 구조 구축, 게시글·댓글·좋아요 기능 및 백엔드 연동 구현

---

🏗️ 시스템 아키텍처
plaintext
코드 복사
[Vue3 + Vite + Pinia + Vuetify]
        ↓
     API Gateway
        ↓
 ┌───────────────┬────────────────┬────────────────┐
 │ User Service  │  Life Service  │   DB/Storage   │
 └───────────────┴────────────────┴────────────────┘
📄 라이선스
이 프로젝트는 MIT License를 따릅니다.

---

💬 Tip
이 파일을 추가한 뒤 아래 명령으로 커밋하세요:

git add README.md
git commit -m "docs: add README.md for OTD_MSA_Front"
git push origin main

---






