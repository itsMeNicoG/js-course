const xhrRequest = () => {
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");
  const $fragment = document.createDocumentFragment();
  xhr.open("GET", "http://jsonplaceholder.typicode.com/users");
  xhr.send();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 400) {
      const jsonResponse = JSON.parse(xhr.responseText);
      jsonResponse.forEach((user) => {
        const $li = document.createElement("li");
        $li.innerText = `${user.name} can be found at ${user.phone} or ${user.email}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      console.log("Error:", xhr);
    }
  });
};

const fetchRequest = () => {
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      json.forEach((user) => {
        const $li = document.createElement("li");
        $li.innerText = `${user.name} can be found at ${user.phone} or ${user.email}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((error) => console.log("Error:", error));
};

const fetchAsyncRequest = async () => {
  const $fetch = document.getElementById("fetch-async");
  const $fragment = document.createDocumentFragment();
  try {
    const res = await fetch("http://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();
    json.forEach((user) => {
      const $li = document.createElement("li");
      $li.innerText = `${user.name} can be found at ${user.phone} or ${user.email}`;
      $fragment.appendChild($li);
    });
    $fetch.appendChild($fragment);
  } catch (e) {
    console.log("Error:", e);
  }
};

const axiosRequest = () => {
  const $axios = document.getElementById("axios");
  const $fragment = document.createDocumentFragment();
  axios("http://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const json = res.data;
      json.forEach((user) => {
        const $li = document.createElement("li");
        $li.innerText = `${user.name} can be found at ${user.phone} or ${user.email}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => console.log("Error:", err));
};

const axiosAsyncRequest = async () => {
  const $axios = document.getElementById("axios-async");
  const $fragment = document.createDocumentFragment();
  try {
    const res = await axios("http://jsonplaceholder.typicode.com/users");
    const json = res.data;
    json.forEach((user) => {
      const $li = document.createElement("li");
      $li.innerText = `${user.name} can be found at ${user.phone} or ${user.email}`;
      $fragment.appendChild($li);
    });
    $axios.appendChild($fragment);
  } catch (e) {
    console.log("Error:", e);
  }
};

export {
  fetchRequest,
  fetchAsyncRequest,
  xhrRequest,
  axiosRequest,
  axiosAsyncRequest,
};
