"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const btn = document.querySelector(".btn");
const nodes = document.querySelector(".nodes");
function getNodes() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json();
    });
}
function renderNodes() {
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        if (nodes && nodes.innerHTML === "") {
            console.log(3);
            const items = yield getNodes();
            items.forEach((item) => {
                nodes.innerHTML += ` <li class="node-item">
            <h3 class="node-title">${item.title}</h3>
            <p class="node-text">UserId: ${item.userId}</p>
            <p class="node-text">ID: ${item.id}</p>
            <p class="node-text">Description: ${item.body}</p>
          </li>`;
            });
        }
    }));
}
renderNodes();
console.log("dewfeg");
