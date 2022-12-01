import axios from "axios";
import useSWR, { SWRConfig, unstable_serialize, useSWRConfig } from "swr";

const api = "http://localhost:4080/cards";

const reserved = [{ name: "Test", id: 10, active: false }];

export async function getStaticProps() {
  const response = await axios.get(`${api}`);
  return response;
}

const updateTodo = async (todo) => {
  const response = await axios.put(`${api}/${todo.id}`, todo);
  return response;
};

const RenderList = ({ data, mutateList }) => {
  console.log("dataList", data);

  const handleClick = async (item) => {
    item = { ...item, active: !item.active };

    const array = data.map((el) => {
      if (el.id === item.id) {
        return item;
      }
      return el;
    });
    const options = { optimisticData: array, rollbackOnError: true };

    await mutateList(array, updateTodo(item), options);
  };

  if (data) {
    return data.map((el) => {
      return (
        <li
          className={`element ${el.active && "active"}`}
          key={el.id}
          onClick={() => {
            handleClick(el);
          }}
        >
          {el.name}
        </li>
      );
    });
  } else {
    return <h1 style={{ color: "#ffffff" }}>Loading...</h1>;
  }
};

const App = () => {
  const { data: items, mutate: mutateList } = useSWR(api, getStaticProps);

  // const { data: item } = useSWR(`${api}`, getStaticProps);
  // const { mutate: mutateConfig } = useSWRConfig();

  return (
    <ul className="list">
      <RenderList data={items?.data} mutateList={mutateList} />
    </ul>
  );
};

export default App;
