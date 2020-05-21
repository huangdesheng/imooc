import JsonP from 'jsonp'
export default class Axios {
    static jsonp(option) {
        return new Promise((resolve, reject) => {
            JsonP(option.url, {
                param: 'callback'
            }, function (err, res) {
                console.log(res, err)
                if (res.status === '1') {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    }
}