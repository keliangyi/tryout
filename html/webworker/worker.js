onmessage = function (e) {
    console.log('Worker: Message received from main script', e.data);
    const result = Number(e.data)
    if (isNaN(result)) {
        postMessage('Please write a numbers');
    } else {
        const calc = (result + 10) / 5
        setTimeout(() => {
            postMessage(calc);
        }, 1500)
    }
}