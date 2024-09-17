class Api {
  constructor(url, authorization, makeRequest) {
    this.url = url;
    this.authorization = authorization;
    this.makeRequest = makeRequest;
  }
  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: this.authorization,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
      })
      .catch((error) => console.error("Error", error));
  }
  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.authorization,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  patchUserInfo(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  postNewCard(name, link) {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.authorization,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.authorization,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  putLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this.authorization,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.authorization,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  patchUserAvatar(avatarLink) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatarLink,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const api = new Api(
  "https://around.nomoreparties.co/v1/web_es_10",
  "541d0e53-114b-4fb1-9af0-b09c04c191b9",
  ""
);

export default api;
