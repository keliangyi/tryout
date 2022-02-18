

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    console.log(xhr, 'dd');
}

xhr.open('get', 'https://randomuser.me/api', true)
xhr.send(null)