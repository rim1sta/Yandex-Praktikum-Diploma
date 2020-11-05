export default class GithubApi {
    constructor(options){
        this.options = options;
        console.log(this.options)
    }
    getCommits = () => {
return fetch(this.options, {
    method: 'GET'
}).then(res => {
    return this._getResponseData(res)
})
    }
    _getResponseData(res){
        if(!res.ok){
            return Promise.reject(`Error: ${res.status}`)
        }
        return res.json();
    }
}