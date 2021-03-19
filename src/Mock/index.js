import Mock from 'mockjs';


Mock.mock('/api/table/list', {
    "code": 0,
    "message": "",
    "result": {
        "list|10": [{
            "id|+1": 1,
            "key|+1": 1,
            "username": "@cname",
            "gender|1-2": 1,
            "status|1-5": 1,
            "interest|1-8": 1,
            "birthday": "25-06-1990",
            "address": "Mel",
            "time": "09:00:00"
        }]
    }
})