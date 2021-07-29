'use strict';
function redirect() {
  var username = document.querySelector('.username');
  var password = document.querySelector('.password');
  //   console.log(username.value);

  checkToRedirect(username.value, password.value);
}

function loadPage() {
  var user = loadFromStorage('user');
  var elName = document.querySelector('span');

  if (user.isAdmin) {
    elName.innerText = 'Admin';
    document.querySelector('.admin').style.visibility = 'visible';
  } else elName.innerText = user.username;
}

function adminPageLoad() {
  var users = getUsersForDisplay();

  var strHTML = '';
  strHTML = `<tr><th>Username</th><th>Password</th><th>Last Login Time</th><th>Is Admin</th></tr>`; //hard code header

  users.map(function (user, i) {
    strHTML += `<tr>
     <td>${users[i].username}</td>
     <td>${users[i].password}</td>
      <td>${users[i].lastLoginTime}</td>
      <td>${users[i].isAdmin}</td>
     </tr>`;
  });
  document.querySelector('tbody').innerHTML = strHTML;
}

function onSetFilter(filterBy) {
  console.log('Filtering by:', filterBy);
  setFilterBy(filterBy);
  adminPageLoad();
}
