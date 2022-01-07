import "./App.css";
import Hello from "./Components/Hello";
import Time from "./Components/Time";

function App() {
  return (
    <div>
      <Hello name="개리"/>
      <Time />
			<Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
    </div>
  );
}

function Resume(props) {
  return (
    <div style={{border:"solid 1px black", width:"400px"}}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미: {props.hobby}</h2>
      <h2>좋아하는 음식: {props.food}</h2>
      <h2>좋아하는 색 : <span style={{color:props.color}}>{props.color}</span></h2>
    </div>
  )
}
export default App;
