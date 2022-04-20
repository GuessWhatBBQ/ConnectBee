import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get(`/posts/fetchall`);
export const fetchUserPosts = (userId) => API.get(`/posts/${userId}`);
export const fetchUserSearch = (searchStr) => API.get(`/api/search/user`, { params: { searchStr } });
export const fetchUserRequests = () => API.get(`/api/users/friend/request/fetchall`);
export const acceptFriendRequest = (friendId) => API.post('/users/friend/add', { friendId });
export const sendFriendRequest = (receiverId) => API.post('/api/users/friend/request/send', { receiverId });
export const createPosts = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const getConversationList = (userId, setConversationList, handleConversationChange) => {
  API.get('/conversations/conversationlist/' + userId).then(({ data }) => {
    setConversationList(data.conversation);
    handleConversationChange(data.conversation[0]._id);
  });
};

export const getConversation = (newConversationID, setConversationHistory, setParticipents) => {
  API.get('/conversations/' + newConversationID).then(({ data }) => {
    setConversationHistory(data.conversation);
    setParticipents((participents) => ({
      ...participents,
      conversationID: newConversationID,
    }));
  });
}
