const clock = document.getElementById('clock')

setInterval(function(){

    let date = new date()
    clock.innerHTML = date.toLocaleTimestring()}, 1000)


// use case of setinterval it runs again and again till the page is open