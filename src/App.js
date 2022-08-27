import StateReact from "./useStateReact";
import MapleJobList from "./records.json";

function App() {
  return (
    <div className="App">
      <StateReact />

      {MapleJobList &&
        MapleJobList.map((record) => {
          return (
            <div className="box" key={record.id}>
              <strong>{record.title}</strong>
              <br />
              {record.content}
              <br /> <br />
              {record.skill &&
                record.skill.map((data) => {
                  return <div key={record.id}>-- {data.name} --</div>;
                })}
            </div>
          );
        })}
    </div>
  );
}

export default App;
