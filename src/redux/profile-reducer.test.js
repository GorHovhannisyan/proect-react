import React from "react";
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state ={
  posts: [
    {id: 1, message: "Hi, How are yow?", likesCount: "12"},
    {id: 2, message: "It's my first post", likesCount: "11"},
    {id: 3, message: "Blabla", likesCount: "13"},
    {id: 4, message: "Dada", likesCount: "15"}
  ]
};

test('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("Hello");
 
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
   expect(newState.posts.length).toBe(5);
});

test('messahe of new posts should be correct', () => {
  // 1. test data
  let action = addPostActionCreator("Hello");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
   expect(newState.posts[4].message).toBe("Hello");
});

test('after deletting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
   expect(newState.posts.length).toBe(3);
});

test(`after deletting length of messages shouldn't be decrement if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
   expect(newState.posts.length).toBe(4);
});

