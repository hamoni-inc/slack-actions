const process = require("process")

const WEBHOOK = process.env.INPUT_WEBHOOK
if(!WEBHOOK) throw new Error("[WEBHOOK] URL is Not Seted.")

const USERNAME = process.env.INPUT_USERNAME ?? "USER"
const MESSAGE = process.env.INPUT_MESSAGE ?? ""
const ICON = process.env.ICON ?? "https://hamoni.jp/img/neko.png" // 指定がない場合デフォルト猫アイコン

const data = {
  username: USERNAME,
  text: MESSAGE,
  icon_url: ICON
}

fetch(WEBHOOK, {
  headers: {
    "Content-Type" : "application/json"
  },
  method: "POST",
  body: JSON.stringify(data)
})
.then(r => {
  console.log("Request Done.")
  process.exit(0)
})