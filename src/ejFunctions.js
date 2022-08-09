import  b64Auth  from './config/config';
const host = 'localhost';


class ejabberdApi{
    constructor(){
        this.b64Auth = b64Auth;
        this.api = 'http://localhost:5281/api';
        this.headers = {
            'Content-Type':'application/json',
            // 'Authorization':`Basic ${this.b64Auth}`, 
        }
    }

     getOnlineRooms(mucHost){
        return new Promise(resolve =>{
            fetch(`${this.api}/muc_online_rooms`,{
                method: 'post',
                headers: this.headers,
                body: JSON.stringify({
                    "service":mucHost
                })
            }).then(res => res.json())
            .then(result =>{
                resolve(result);
            })
        })
    }

    createRoom(roomName,mucHost,host){
        return new Promise(resolve => {
            fetch(`${this.api}/create_room`,{
                method: 'post',
                headers: this.headers,
                body:JSON.stringify({
                    name:'roomName',
                    service: 'muc.localhost',
                    host: host
                })
            }).then(res => res.json())
            .then(result => {
                resolve(result);
            });
        });
    }

    deleteRoom(name, mucHost){
        return new Promise(resolve => {
            fetch(`${this.api}/destroy_room`,{
                method: 'post',
                headers: this.headers,
                body:JSON.stringify({
                    name:name,
                    service: 'muc.localhost'
                })
            }).then(res => res.json())
            .then(result => {
                resolve(result);
            });
        });
    }

    async getConnectedUsers(){
        return new Promise(resolve => {
            fetch(`${this.api}/connected_users`,{
                method: 'post',
                headers: this.headers,
                body:JSON.stringify({})
            }).then(res => res.json())
            .then(result => {
                resolve(result);
            });
        });
    }

    async getRegisteredUsers(host){
        return new Promise(resolve => {
            fetch(`${this.api}/registered_users`,{
                method: 'post',
                headers: this.headers,
                body:JSON.stringify({
                    'host':'localhost'
                })
            }).then(res => res.json())
            .then(result => {
                resolve(result);
            });
        });
    }
    
    async deleteUser(user, host){
        return new Promise(resolve => {
            fetch(`${this.api}/unregister`,{
                method: 'post',
                headers: this.headers,
                body:JSON.stringify({
                    user: user,
                    host: host,
                })
            }).then(res => res.json())
            .then(result => {
                resolve(result);
            });
        });
    }

    async changeUserPassword(user, host,newpass){
        return new Promise(resolve => {
            fetch(`${this.api}/change_password`,{
                method: 'post',
                headers: this.headers,
                body:JSON.stringify({
                    user: user,
                    host: host,
                    newpass:newpass
                })
            }).then(res => res.json())
            .then(result => {
                resolve(result);
            });
        });
    }
    async getNumberOfOfllineMessages(user, host){
        return new Promise(resolve => {
            fetch(`${this.api}/get_offline_count`,{
                method: 'post',
                headers: this.headers,
                body:JSON.stringify({
                    user: user,
                    server: host,
                })
            }).then(res => res.json())
            .then(result => {
                resolve(result);
            });
        });
    }
    async getLastSeen(user, host){
        return new Promise(resolve => {
            fetch(`${this.api}/get_last`,{
                method: 'post',
                headers: this.headers,
                body:JSON.stringify({
                    user: user,
                    host: host,
                })
            }).then(res => res.json())
            .then(result => {
                resolve(result);
            });
        });
    }

    async createUser(user, password, host){
        return new Promise(resolve => {
            fetch(`${this.api}/register`,{
                method: 'post',
                headers: this.headers,
                body:JSON.stringify({
                    user: user,
                    host: host,
                    password: password
                })
            }).then(res => res.json())
            .then(result => {
                console.log(result);
                resolve(result);
            });
        });
    }

}

export default ejabberdApi;