"user strict"

class UserStorage {
    //데이터는 은닉화시키고 getter로 접근할 수 있게 만듦
    //home.ctrl에서 부를 수 있게 getUsers로 static으로
    static #users = {     //#로 private 선언
        id : ["wayo7813", "pjkwon","doctor","ceoKwon","dragonKwon"],
        password : ["1234","1111","2345","3456","4567"],
        name : ["Steve", "Angela","Elice","Scarlet","Daniel"]
    }

    static getUsers(...fields){  
        //클래스자체에서도 메서드에 접근하기 위해 static.
        // console.log('필드 : ',fields);
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            // console.log(newUsers, field)
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        // console.log(newUsers);
        return newUsers;
    }
}
//static붙여 정적 변수로 만들어주면 클래스자체에서 정적변수에 접근할 수 있다
//routes/home/home.ctrl.js에서 호출할때 require()후에 따로 new로 생성해주지 않아도 바로 변수인 users에 접근할 수 있다.


module.exports = UserStorage;