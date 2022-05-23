import "./App.scss";
import News from "../Components/News/News";
import Advertisement from "../Components/Advertisement/Advertisement";
import Search from "../Components/Search/Search";
import Visited from "../Components/Visited/Visited";
import Block from "../Components/Block/Block";
import Channel from "../Components/Channel/Channel";

const visitedData = [
  { id: 1, title: "Недвижимость", text: "о сталинках" },
  { id: 2, title: "Маркет", text: "люстры и светильники" },
  { id: 3, title: "Авто.ру", text: "привод 4х4" },
];

const tvData = [
  { id: 2, time: "02:00", tvProgramm: "The best", channel: "ТНТ" },
  { id: 3, time: "03:00", tvProgramm: "Rock", channel: "OPT" },
  { id: 4, time: "04:00", tvProgramm: "News", channel: "CTC" },
];

const onLiveData = [
  { id: 2, tvProgramm: "Show", channel: "ТНТ" },
  { id: 3, tvProgramm: "JAzz", channel: "OPT" },
  { id: 4, tvProgramm: "Nasa", channel: "CTC" },
];

function App() {
  return (
    <div className="app">
      <div className="top">
        <News />
        <Advertisement url={"https://yandex.ru/"} />
      </div>
      <Search />
      <Advertisement url={"https://www.google.ru/"} />
      <div className="bottom">
        <Block title="Погода" selector="weather">
          <div className="temp">
            <img src="#" alt="Иконка погоды" />
            <span className="temp-now">+17°</span>
            <div className="temp-other">
              <span className="temp-morning">+17,</span>
              <span className="temp-day">+20</span>
            </div>
          </div>
        </Block>
        <Block title="Посещаемое" selector="visited">
          {visitedData.map((el) => {
            return <Visited key={el.id} data={el} />;
          })}
        </Block>
        <Block title="Карта Германии" selector="map">
          <span>Расписания</span>
        </Block>
        <Block title="Телепрограмма" selector="broadcast">
          <button type="button">Эфир</button>
          {tvData.map((el) => {
            return <Channel key={el.id} data={el} />;
          })}
        </Block>
        <Block title="Эфир" selector="on-live">
          {onLiveData.map((el) => {
            return <Channel key={el.id} data={el} />;
          })}
        </Block>
      </div>
    </div>
  );
}

export default App;
