'use strict';

class UserStorage{
  static #users = {
    id : ["login1", "login2", "login3"],
    psword : ["1234", "5678", "9101"],
    name : ["윤준후1", "윤준후2", "윤준후3"],
  }

  static getUsers(...fields){
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id){
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUsers, info) => {
      newUsers[info] = users[info][idx];
      return newUsers;
    }, {});
    return userInfo;
  }

  static save(userInfo){
    const users = this.#users;
    if(users.id.includes(userInfo.id)){
      return false;
    }
    users.id.push(userInfo.id);
    users.psword.push(userInfo.psword);
    users.name.push(userInfo.name);
    console.log(users);
    return {success : true, msg : "회원가입을 완료했습니다."}
  }
}

module.exports = UserStorage;