var Mock=  require('mockjs')


export default class Mocks {
    // function personInfo() {
    //     var data = Mock.mock({
    //         "list|10":[
    //             {
    //                 "id|+1":1
    //             }
    //         ]
    //     })
    //     return data
    // }

    static personInfo(){
        var data = Mock.mock({
                    data:{
                        "list|20":[
                            {   "key|+1":0,
                                "id|+1":1,
                                name:"@cname",
                                "sex|1-2":1,
                                "state|1-5":1,
                                "insterest|0-4":0,
                                birthDay:'2020-01-01',
                                address:'广州市天河区天河公园',
                                start:'09:00'
                            }
                        ],
                        pageNum:1,
                        pageSize:4,
                        total:20,
                    }
                   
                })
            return data
    }
}
