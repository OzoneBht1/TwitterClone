import React, { useEffect } from "react";
import Tweet from "./Tweet";

const TWEETS = [
  {
    id: 1,
    username: "John Doe",
    handle: "johndoe",
    views: 100,

    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc.",
    image: "https://i.pravatar.cc/100",
    date: "2021-03-01T00:00:00.000Z",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    id: 2,
    username: "Jane Doe",
    handle: "janedoe",
    views: 250,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc.",
    image: "https://i.pravatar.cc/300",
    date: "2021-03-01T00:00:00.000Z",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    id: 3,
    username: "Jonny Doe",
    handle: "johnnydoe",
    views: 500,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc.",
    image: "https://i.pravatar.cc/400",
    date: "2021-03-01T00:00:00.000Z",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    id: 3,
    username: "Jonny Doe",
    handle: "johnnydoe",
    views: 500,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc.",
    image: "https://i.pravatar.cc/400",
    date: "2021-03-01T00:00:00.000Z",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    id: 4,
    username: "Jonny Doe",
    handle: "johnnydoe",
    views: 500,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc.",
    image: "https://i.pravatar.cc/400",
    date: "2021-03-01T00:00:00.000Z",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    id: 5,
    username: "Jonny Doe",
    handle: "johnnydoe",
    views: 500,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc.",
    image: "https://i.pravatar.cc/400",
    date: "2021-03-01T00:00:00.000Z",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
  {
    id: 6,
    username: "Jonny Doe",
    handle: "johnnydoe",
    views: 500,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies nisl nunc vel nunc.",
    image: "https://i.pravatar.cc/400",
    date: "2021-03-01T00:00:00.000Z",
    comments: 12,
    retweets: 2,
    likes: 5,
  },
];

const Feed = () => {
  return (
    <>
      {TWEETS.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </>
  );
};

export default Feed;
