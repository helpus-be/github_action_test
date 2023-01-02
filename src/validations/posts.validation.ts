import * as joi from 'joi';

export const postInputPattern = joi.object().keys({
  title: joi.string().required().description('제목'),
  content: joi.string().required().description('내용'),
  updated: joi.boolean().description('수정여부'),
  imageUrl: joi.string().description('이미지URL이 undefind 문자열일 때'),
  location1: joi.string().description('시, 도'),
  location2: joi.string().description('시, 군, 구'),
});

export const postIdPattern = joi.number().integer().required().description('게시글번호');
