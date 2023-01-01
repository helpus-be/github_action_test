import { Request, Response, NextFunction } from 'express';
import PostsService from '../services/posts.service';
import { postInputPattern, postIdPattern } from '../validations/posts.validation';

class PostsController {
  postsService: PostsService;

  constructor() {
    this.postsService = new PostsService();
  }

  // eslint-disable-next-line class-methods-use-this
  createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //  userId = res.locals
      const userId = 1;
      const { title, content, updated, location1, location2, tag } =
        await postInputPattern.validateAsync(req.body);

      // const fileData: Express.MulterS3;

      const filesArr = req.files! as Array<Express.MulterS3.File>;
      const imageUrl = filesArr.map((file) => file.location);
      const imageUrl1 = imageUrl[0];
      const imageUrl2 = imageUrl[1];
      const imageUrl3 = imageUrl[2];
      const tagArr = tag?.split(',');
      const result = await this.postsService.createPost(
        userId,
        title,
        content,
        updated,
        location1,
        location2,
        imageUrl1,
        imageUrl2,
        imageUrl3,
        tag
      );
      return res.status(201).json({ result, tag: tagArr });
    } catch (error) {
      return next(error);
    }
  };

  findAllPosts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const q = Number(req.query.q);
      const result = await this.postsService.findAllPosts(q);
      return res.status(200).json({ result });
    } catch (error) {
      return next(error);
    }
  };

  findDetailPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = Number(req.params.postId);
      const result = await this.postsService.findDetailPost(postId);
      return res.status(200).json({ result });
    } catch (error) {
      return next(error);
    }
  };
}

export default PostsController;
