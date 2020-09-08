let str = `
<style>
    body {
    background: red
    }
</style>
`
let n = 1
demo.innerHTML = str.substr(0,1)
demo2.innerText = str.substr(0,1)
console.log(n);

let id = setInterval(() => {
    n = n + 1
    if (n > str.length) {
        window.clearInterval(id)
        return
    }
    demo.innerHTML = str.substr(0,n)
    demo2.innerText = str.substr(0,n)
    console.log(n);
},100)