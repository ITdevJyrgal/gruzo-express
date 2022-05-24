// const TOKEN = "5387305074:AAGgOM0dQ2Yicfc4j_VFuyA3Xt7Ag9uXVwY"
// const CHAT_ID = "-1001232703448"
// const UPI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage `
//
//
// document.getElementById("tg").addEventListener("submit", function (e) {
//     e.preventDefault()
//     console.log(this.radio.value)
//     let message = `Заявка на сайт\n`;
//     message += `Отправитель:  ${this.name.value}\n`;
//     message += `номер: ${this.tel.value}\n`;
//
//     axios.post(UPI_API, {
//         chat_id: CHAT_ID,
//         perse_mode: 'html',
//         text: message
//     })
//         .then((res) => {
//
//         })
//         .catch((err) => {
//             console.warn(err)
//         })
//         .finally(() => {
//             console.log("Успешно")
//         })
// })
//
//
//
// document.getElementById("tg").addEventListener("submit", function (e) {
//     e.preventDefault()
//     const checkBoxes = document.querySelectorAll("input[name=radio]:checked")
//
//     let values = []
//
//     checkBoxes.forEach(checkbox => {
//         values.push(checkbox.value)
//     })
//
//
//     let message  = ""
//     let name = ""
//
//     for(let i = 0; i < values.length; i++){
//         message += `${i+1} ${values[i]} \n`
//     }
//     axios.post(UPI_API, {
//         chat_id: CHAT_ID,
//         perse_mode: 'html',
//         text: message,
//         text2: name
//     })
//         .then((res) => {
//
//         })
//         .catch((err) => {
//             console.warn(err)
//         })
//         .finally(() => {
//             console.log("Успешно")
//         })
// })
