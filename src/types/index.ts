

export interface User {
    id?: string,
    image?:string,
    username?:string,
}

export interface UserComments{
id?: string,
username?:string,
}

export interface CommentsUser {
    id: string,
    comment: string,
    user: UserComments,
}


export interface Post  {
id: string,
video?: string,
createdAt: string,
images?: string,
image?: string,
description?: string,
user: User,
nofComments?: number,
nofLikes?: number,
comments: Array<CommentsUser>,
}


/*
  {
    "id": "1",
    "createdAt": "19 December 2021",
    "images": [
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg",
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg",
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?",
    "user": {
      "id": "u1",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
      "username": "vadimnotjustdev"
    },
    "nofComments": 11,
    "nofLikes": 34,
    "comments": [
      {
        "id": "1",
        "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. H",
        "user": {
          "id": "u1",
          "username": "vadimnotjustdev"
        }
      },
      {
        "id": "2",
        "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. H",
        "user": {
          "id": "u1",
          "username": "vadimnotjustdev"
        }
      }
    ]
  }
*/