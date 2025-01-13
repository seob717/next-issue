const buildTitle = (title: string) => {
  if (REG_EXP_VALID_TITLE.test(title)) return title;

  return title
    .replace(/['’]/g, '') // Apostrophe(')를 제거하고 앞 단어와 붙이기 위한 치환식입니다.
    .replace(REG_EXP_ALLOWED_CHARACTERS_IN_TITLE, '') // 한글, 콤마, 공백를 제외한 모든 특수문자를 제거합니다.
    .split(/[, ]/)
    .filter((word) => word && !EXCLUSION_WORDS.includes(word))
    .reduce((prev, cur) => {
      const nextTitle = prev ? `${prev}-${cur}` : cur;
      if (nextTitle.length > MAX_CLIP_TITLE_NUMBER) return prev;
      return nextTitle;
    }, '');
};

export { buildTitle };

const REG_EXP_VALID_TITLE = /^[가-힣a-z\-]+$/;

const REG_EXP_ALLOWED_CHARACTERS_IN_TITLE = /[^가-힣, ]/g;

const EXCLUSION_WORDS = [
  '그리고',
  '그래도',
  '그래서',
  '그러므로',
  '그러나',
  '하지만',
  '또는',
  '그렇지만',
];

const MAX_CLIP_TITLE_NUMBER = 50;
