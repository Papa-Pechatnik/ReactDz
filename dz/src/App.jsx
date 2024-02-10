import './App.css';
import Character from './components/Character';

const App = () => {
  const character =
        [{
            "id": 1,
            "name": "Гомер Джей Сімпсон",
            "shortname":"",
            "age": 36,
            "gender":"чоловіча",
            "status": "голова сім'ї",
            "foto": "https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png",
            },
            {
            "id": 2,
            "name": "Марджері Сімпсон",
            "shortname": "Мардж",
            "age": 34,
            "gender":"жіноча",
            "status": "дружина Гомера",
            "foto": "https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png",
            },
            {
            "id": 3,
            "name": "Бартоломью Джо-Джо Сімпсон",
            "shortname": "Барт",
            "age": 10,
            "gender":"чоловіча",
            "status": "син",
            "foto": "https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png",
            },
            {
            "id": 4,
            "name": "Елизабет Мері Сімпсон",
            "shortname": "Ліза",
            "age": 8,
            "gender":"жіноча",
            "status": "дочка",
            "foto": "https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png",
            },
            {
            "id": 5,
            "name": "Маргарет Сімпсон",
            "shortname": "Меґґі",
            "age": 1,
            "gender":"жіноча",
            "status": "дочка",
            "foto": "https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png"
            },
            ]
  return (
    <div>
    {/* {character.map(character => <Character character={character} key={character.id}/>)} */}
    {character.map(character => <Character {...character} key={character.id}  />)}

</div>
  );
};

export default App;
