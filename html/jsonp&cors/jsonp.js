


const onSuccess = (data) => {
    console.log('通过JSONP获取的数据：', data);
}

const script = document.createElement('script')
script.src = 'https://randomuser.me/api?jsoncallback=onSuccess'
document.body.append(script)
