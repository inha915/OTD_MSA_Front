import { defineStore } from 'pinia';

const AUTHORS = ['고은 정우', '이한결', '민서', '레나', '이찬'];
const LABEL = {
  free: '자유수다',
  diet: '다이어트',
  work: '운동',
  love: '연애',
};

function makeDummy(category) {
  return Array.from({ length: 15 }, (_, i) => {
    const idx = i + 1;
    return {
      id: `${category}-${idx}`,
      category,
      author: AUTHORS[idx % AUTHORS.length],
      time: idx <= 5 ? `${idx}시간 전` : idx <= 10 ? '어제' : '2일 전',
      title: `${LABEL[category]} 주제 더미 게시물 ${idx}`,
      preview:
        '이곳은 게시물 내용 미리보기입니다. 모바일 카드 레이아웃을 확인하세요.',
      content:
        '임의 텍스트 본문입니다. 길이가 길어질 때 줄바꿈과 가독성을 확인하기 위한 더미 텍스트입니다.',
      likes: Math.floor(Math.random() * 50),
      comments: Math.floor(Math.random() * 12),
      createdAt: Date.now() - idx * 3600_000,
    };
  });
}

export const useCommunityStore = defineStore('community', {
  state: () => ({
    postsByCategory: {
      free: makeDummy('free'),
      diet: makeDummy('diet'),
      work: makeDummy('work'),
      love: makeDummy('love'),
    },
  }),
  getters: {
    list: (s) => (category) =>
      (s.postsByCategory[category] ?? [])
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt),
    getById: (s) => (id) => {
      for (const key of Object.keys(s.postsByCategory)) {
        const found = s.postsByCategory[key].find(
          (p) => String(p.id) === String(id)
        );
        if (found) return found;
      }
      return null;
    },
  },
  actions: {
    addPost(category, { title, content, author = '익명', preview = '' }) {
      const id = `${category}-${Date.now()}`;
      const post = {
        id,
        category,
        author,
        time: '방금 전',
        title,
        preview: preview || content.slice(0, 60),
        content,
        likes: 0,
        comments: 0,
        createdAt: Date.now(),
      };
      this.postsByCategory[category].unshift(post);
      return post;
    },
  },
});
