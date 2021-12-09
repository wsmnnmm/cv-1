let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `
/*你好，阿里嘎多裹扎伊马斯*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来画太极图
 *首先，把div变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}
/*太极是阴阳形成
 *一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加上太极球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 22%, rgba(0,0,0,1) 23%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 22%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%);
}
`
let string2 = ''
// string = string.replace(/\n/g, '<br>')
//replace 瑞颇累死 替换字符串
console.log(string.length)
let n = 0

//substring 沙伯思俊，获取string的0-n的子字符串
let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            //如果是回车就改成换行
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp;"
        }
        else {
            //如果不是回车就照搬
            string2 += string[n]
        }

        html.innerHTML = string2
        style.innerHTML = string.substring(0, n) //断点
        window.scrollTo(0, 9999)
        html.scrollTo(0, 9999)
        n = n + 1
        if (n < string.length) {
            //判断是否到末尾，没到就下一步
            step()
        }
    }, 20)
}
step()


