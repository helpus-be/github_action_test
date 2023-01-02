import { PrismaClient } from '@prisma/client';

class PostsRepository {
  prisma: PrismaClient;

  // prisma 스키마를 생성자로 받는다.
  constructor(prisma: any) {
    this.prisma = prisma;
  }

  createPost = async (
    userId: number,
    title: string,
    content: string,
    category: number,
    appointed?: Date,
    updated?: number,
    location1?: string,
    location2?: string,
    imageUrl1?: string,
    imageUrl2?: string,
    imageUrl3?: string,
    tag?: string
    // eslint-disable-next-line consistent-return
  ) => {
    const result = await this.prisma.post.create({
      data: {
        userId,
        title,
        content,
        category,
        appointed,
        updated,
        location1,
        location2,
        imageUrl1,
        imageUrl2,
        imageUrl3,
        tag,
      },
    });
    return result;
  };

  findAllPosts = async (q: number) => {
    // 전체 조회
    const result = await this.prisma.post.findMany({
      // 무한스크롤
      skip: q || 0,
      // FIXME : 2 to 30
      take: 2,
      // 생성순으로 정렬
      orderBy: { createdAt: 'desc' },
      // :FIXME user: {"userName" : "nickname"} --> "userName" : "nickname"
      include: { user: { select: { userName: true } } },
    });
    return result;
  };

  // 카테고리 별로 조회
  public findByCategory = async (q: number, category: number) => {
    const result = await this.prisma.post.findMany({
      where: { category }, // 무한스크롤
      skip: q || 0,
      // FIXME : 2 to 30
      take: 2,
      // 생성순으로 정렬
      orderBy: { createdAt: 'desc' },
      // :FIXME user: {"userName" : "nickname"} --> "userName" : "nickname"
      include: { user: { select: { userName: true } } },
    });
    return result;
  };

  findDetailPost = async (postId: number) => {
    const result = await this.prisma.post.findUnique({
      where: { postId },
      // :FIXME user: {"userName" : "nickname"} --> "userName" : "nickname"

      include: {
        user: {
          select: {
            userName: true,
          },
        },
      },
    });
    return result;
  };

  updatePost = async (
    postId?: number,
    userId?: number,
    title?: string,
    content?: string,
    category?: number,
    appointed?: Date,
    updated?: number,
    isDeadLine?: number,
    location1?: string,
    location2?: string,
    imageUrl1?: string,
    imageUrl2?: string,
    imageUrl3?: string,
    tag?: string
  ) => {
    // params 에 해당하는 게시글을 찾고, 없을 경우 에러를 반환함
    // await this.prisma.post.findUniqueOrThrow({
    //   where: { postId },
    // });
    const result = await this.prisma.post.update({
      where: { postId },
      data: {
        postId,
        userId,
        title,
        content,
        category,
        appointed,
        updated,
        isDeadLine,
        location1,
        location2,
        imageUrl1,
        imageUrl2,
        imageUrl3,
        tag,
      },
      include: {
        user: {
          select: {
            userName: true,
          },
        },
      },
    });
    return result;
  };

  deletePost = async (postId: number) => {
    await this.prisma.post.findUniqueOrThrow({ where: { postId } });
    const result = await this.prisma.post.delete({ where: { postId } });
    return result;
  };
}

export default PostsRepository;
