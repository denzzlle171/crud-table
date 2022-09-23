const baseUrl = 'https://62705c5fe1c7aec428f2cda5.mockapi.io/api/v1/user';

export const getUserList = () =>
  fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Internal Server Error. Can't display users");
  });
  
//


export const createUser = (UserData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(UserData),
  });



//

  export const deleteUser = (userId) => {
    return fetch(`${baseUrl}/${userId}`, {
      method: 'DELETE',
    });
  };
//

export const updateUser = (userId, changedData) =>
  fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(changedData),
  });



