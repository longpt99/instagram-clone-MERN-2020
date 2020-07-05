// export const LOGIN_API = 'auth/login';
// export const REGISTER_API = 'auth/register';
// export const ADMIN_API = 'users/admin';
// export const USER_API = 'users/user';
// export const ADMIN_UPLOAD_IMAGE_API = 'users/admin/image';
// export const USER_PROFILE_API = 'users/user/profile';
// export const SUGGESTED_USERS = 'users/suggested';
// export const SEND_FOLLOW_USER = 'users/user/send-request';
// export const FOLLOWING_POSTS = 'users/admin/following/posts';
// export const POST_COMMENT = 'users/user/post/comment';
// export const COMMENT_POST = 'users/user/post/comment';
// export const POST_API = 'posts';

export const LOGIN_API = '/auth/login';
export const REGISTER_API = '/auth/register';

export const ACCOUNTS_API = '/accounts'
export const ADMIN_ACCOUNT = '/accounts/admin'
export const FOLLOWING_POSTS = '/accounts/admin/following/posts';
export const SUGGESTED_USERS = '/accounts/admin/following/suggestion';
export const SEND_FOLLOWER_REQUEST = '/accounts/admin/followers/request';

export const USER_PROFILE = '/accounts/:nickname';
export const SEARCH_USER = '/accounts/search';

export const POST_API = '/posts';
export const POST_CONTENT = '/posts/:id'
export const COMMENT_POST = '/posts/:id/comment';
export const LIKE_POST = '/posts/:id/reaction';
export const UPLOAD_IMG = '/posts/image/upload';