
export default{
  namespaced:true,
  state:{
    count:2,
    fullScreen:true, //全屏 小屏切换
    list:[] 
  },
  getters:{
    currentSong(state){
      // 当前正在播放的歌相关信息
      console.log(state.list,state.currentIndex,'getters')
      return state.list[state.currentIndex]||{}
    }
  },
  mutations:{
    setCurrentIndex(state,index){
      state.currentIndex=index
    },
    changeCurrentIndex(state,params){
      switch (params) {
        case 'next':
          //   最后一曲的边界条件  下标和长度差1
            if(state.currentIndex<state.list.length-1){
              state.currentIndex++
            }else{
              state.currentIndex=0
            }
          break;
          case 'prev':
            //   最后一曲的边界条件  下标和长度差1
            if(state.currentIndex==0){
                state.currentIndex=state.list.length-1
            }else{
                state.currentIndex--
            }
            break;
        default:
          break;
      }
    }
  },
  actions:{}
}