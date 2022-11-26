import { SET_TODO_LIST } from "@/store/mutation-types";

const state = {
  todoList: [
    {
      "title" :"Selecte a Person",
      "details":[
          {"profilePic":'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk=','name':"wade Cooper" ,"permission":"No access","email":"wadeCooper@gmail.com","isInvite":false},
          {"profilePic":'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg','name':"Arlin Mccoy","permission":"No access","email":"ArlinMccoy@gmail.com","isInvite":false}
      ]
      },
       {
      "title" :"Selecte a Group",
      "details":[
          {"profilePic":'https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1','name':"product","permission":"No access","email":"product@gmail.com","isInvite":false},
          {"profilePic":'https://media.istockphoto.com/id/1352825038/photo/professional-male-automotive-engineer-wearing-hard-hat-walking-using-laptop-monitoring.jpg?b=1&s=170667a&w=0&k=20&c=tT2OqQMFqqNGFqqvXnR_s1GosM54uMSBFB6lUyo6q8Y=','name':"engineer","permission":"No access","email":"engineer@gmail.com","isInvite":false}
      ]
      }
  ],
};

const getters = {
  getToDoList: (state) => state.todoList,
};

const mutations = {
  [SET_TODO_LIST](state, payload) {
    state.todoList = payload;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
