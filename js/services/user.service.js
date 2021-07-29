'use strict';
var gFilterBy = 'name';

var gUsers = [
  {
    id: 'u101',
    username: 'puki',
    password: 'secret',
    lastLoginTime: 1601891998864,
    isAdmin: true,
  },
  {
    id: 'u102',
    username: 'kuki',
    password: 'secret',
    lastLoginTime: 166341998861,
    isAdmin: false,
  },
  {
    id: 'u103',
    username: 'tuki',
    password: 'secret',
    lastLoginTime: 1601891324844,
    isAdmin: false,
  },
];

function getUsersForDisplay() {
  if (gFilterBy === 'name') {
    return gUsers.sort(function (a, b) {
      if (a.username < b.username) {
        return -1; //filter by text
      }
      if (a.username > b.username) {
        return 1;
      }
      return 0;
    });
  }

  if (gFilterBy === 'login') {
    return gUsers.sort(function (a, b) {
      return b.lastLoginTime - a.lastLoginTime;
    });
  }
}
function checkToRedirect(username, password) {
  var idx = gUsers.findIndex(function (user) {
    return username === user.username && password === user.password;
  });

  if (idx !== -1) {
    window.location.href = 'secret.html';
    saveToStorage('user', gUsers[idx]);
  }
}

function userLogOut() {
  window.location.href = 'index.html';
  localStorage.removeItem('user');
}

function setFilterBy(filterBy) {
  gFilterBy = filterBy;
}

function getUsers() {
  return gUsers;
}
