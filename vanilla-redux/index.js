import { legacy_createStore as createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수
const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});
const increase = (difference) => ({
  type: INCREASE,
  difference,
});
const decrease = () => ({
  type: DECREASE,
});

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state, // 불변성
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state, // 불변성
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);

// Render 함수 만들기
const render = () => {
  const state = store.getState(); // 현재 상태 부르기
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();
store.subscribe(render);

// 구독하기
const listener = () => {
  console.log("update requested");
};

const unsubscribe = store.subscribe(listener);
// 추후에는 subscribe 함수 대신 react-redux 라이브러리를 사용할 예정

// unsubscribe(); // 추후 구독을 비활성화 할 때 함수를 호출

// 액션 발생시키기
divToggle.onclick = () => {
  console.log("divToggle click");
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  console.log("btnIncrease click");
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  console.log("btnDecrease click");
  store.dispatch(decrease());
};

//state가 undefined일 때는 initalState를 기본값으로 사용
function reducer(state = initialState, action) {
  //action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지를 해 주어야 합니다
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
