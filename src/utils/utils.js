export default {
    formateDate(data) {
        if (!data) return ''
        let date = new Date(data)
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    pagination(data,callback){
        console.log(data)
        return {
            onChange:(current)=> {
                callback(current)
            },
            current:data.data.pageNum,
            pageSize:data.data.pageSize,
            total:data.data.total,
            showTotal:()=>{
                return `共${data.data.total}条`
            },
            showQuickJumper:true
        }
    }
}