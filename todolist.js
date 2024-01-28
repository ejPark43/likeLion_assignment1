import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // 원래 시스템은 form 안에 버튼이 하나 있으면 해당 버튼 눌렀을 때 submit 되는 디폴트 설정이 되어있음. 그걸 막는 것.
    // console.log(toDo); // todo 잘 입력되고 출력되는지 확인.
    if (toDo === "") {
      // 만약 toDo가 비어있다면,
      return; //그냥 리턴  == kill the function
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // currentArray(==현재 toDos 배열) 가져와서 새로운 array를 리턴해주고 싶음. ==> [넣고싶은원소, ...배열이름]로 적으면, 해당 배열 내용과 새로 넣은 원소를 포함하는 새로운 배열이 추가된다!!!
    //setToDo(""); // toDo 내용이 안 비어있다면 "" 로 빈 내용으로 만들어줌.
  };

  //todos = "내용"; // State는 직접 변경이 불가능함, 배열에 넣어주고싶어도 이렇게 직접 넣을 수 없음.
  console.log(toDos);
  return (
    <div>
      <h1>My To-Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your To-Do.."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map(
          (
            item,
            index // maps에서 생성하는 함수의 첫 번재 argument는 각 아이템을 말하고, 두번째 argument는 순서==index이다.
          ) => (
            <li key={index}>{item}</li> // list의 각 child는 모두 고유한 key 속성을 갖고 있어야 하기 때문에, 위에서 알게 된 index 번호를 써서 키를 만든다.
          )
        )}

        {/* !! .map()은 () 안에 함수 넣어줄 수 있는데, 아이템..여기서는 해당 함수가 모든 toDos 배열의 아이템에 적용된다. !!
      {toDos.map(() => ":D")} 이렇게 쓰면, toDos 안에 있는 모든 원소들이 ":D"로 대체된다. 아니면 toDos.map((item) => item.toUpperCase())로 하게되면 모든 내용이 대문자가 된다!
      => 즉, .map()은 안에 들어있는 모든 내용에 어떤 함수를 적용시킬 수 있음.(순서대로 하나씩 적용된 뒤 결과를 리턴함)
      
      여기서 <li>{item}</li>를 써줬기 때문에, 모든 아이템 내용에(배열 원소 내용이> 리스트가 된다.
      */}
      </ul>
    </div>
  );
}

export default App;
