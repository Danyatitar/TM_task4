const btn = document.querySelector(".btn");
const nodes = document.querySelector(".nodes");

interface INode {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getNodes<T>(): Promise<T> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json() as Promise<T>;
}

function renderNodes() {
  btn?.addEventListener("click", async () => {
    if (nodes && nodes.innerHTML === "") {
      console.log(3);
      const items = await getNodes<INode[]>();
      items.forEach((item) => {
        nodes.innerHTML += ` <li class="node-item">
            <h3 class="node-title">${item.title}</h3>
            <p class="node-text">UserId: ${item.userId}</p>
            <p class="node-text">ID: ${item.id}</p>
            <p class="node-text">Description: ${item.body}</p>
          </li>`;
      });
    }
  });
}

renderNodes();

console.log("dewfeg");
