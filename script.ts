var $ = (selector) : HTMLElement => document.querySelector(selector)
var $$ = (elm) : HTMLElement => document.createElement(elm)
var altern = false
var count = 0
var person = ""
var historia

function addNodes (root: HTMLElement ,nodes: Array<HTMLElement>) {
	for (let node of nodes) {
		root.append(node)
	}
} 

const MainMethod = async () => {
	const Main = $("main")
	const bodyStyles = Main.style
	bodyStyles.height = 100 + "vh"
	bodyStyles.display = "flex"
	bodyStyles.justifyContent = "space-evenly"
	bodyStyles.flexWrap = "wrap"
	bodyStyles.gap = "10px"


	const Chat1 = $$("section")

	for (let chat of [Chat1]) {
		let chatStyles = chat.style
		chatStyles.width = 300 + "px"
		chatStyles.height = 500 + "px"
		chatStyles.border = "3px solid deeppink"
		chatStyles.borderRadius = "4px"
		chatStyles.display = "flex"
		chatStyles.flexDirection = "column"
		chatStyles.padding = "10px"
	}

	const TextInput1 = $$("input")
	TextInput1.id = "input1"

	for (let chat of [TextInput1]) {
		let inputStyles = chat.style

		inputStyles.borderRadius = "8px"
		inputStyles.height = "40px"
		inputStyles.width = "220px"
		inputStyles.border = "2px solid deeppink"
	}

	const Form1 = $$("div")

	for (let form of [Form1]) {
		
		let FS = form.style
		FS.display = "flex"
		FS.justifyContent = "space-evenly"
	}

	const buttonEnv1 = $$("button")

	buttonEnv1.onclick = async () => {
		const msg = $("#input1") as HTMLInputElement

		if (msg.value && person) {
			addNodes(Messages1, [Msg("Tú", msg.value, true)])
			const res = await fetch("https://chat-bot-beta-drab.vercel.app/tindercito", {
		      method : "POST",
		      body : JSON.stringify({history : historia, msg : msg.value })
		    })

		    const resp = await res.json()
		    const data = resp.msg
			altern = !altern
		    addNodes(Messages1, [Msg(person, data, false)])
		    const template = [
		        {
		          role : "user",
		          parts: [{ text: msg.value }]
		        },
		        {
		          role : "model",
		          parts: [{ text: data }]
		        }
		      ]
      		historia = [...historia, ...template]
			altern = !altern
			msg.value = ""
		}
	}

	buttonEnv1.innerText = "Enviar"

	const Messages1 = $$("section")

	for (let msg of [Messages1]) {
		let MS = msg.style

		MS.display = "flex"
		MS.flexDirection = "column"

		MS.height = "450px"
		MS.width = "300px"
		MS.overflowY = "auto"
	}

	const Msg = (sender: string, text: string, right: boolean): HTMLElement => {
		const msg = $$("div")
		const msgSender = $$("p")
		const msgText = $$("p")

		msgSender.innerText = sender + ":"
		msgText.innerText = text

		if (right) {
			msg.style.textAlign = "end"
		}

		if (altern) {
			msg.style.backgroundColor = "rgb(235 234 234)"
		}

		addNodes(msg, [msgSender, msgText])

		return msg
	}

	const Who = $$("section")

	Who.className = "userinfo"

	addNodes(Form1, [TextInput1, buttonEnv1])
	addNodes(Chat1, [Messages1 ,Form1])

	const Header = $(".headersub")
	const Online = $$("div")
	Online.className = "online"

	const Cant = $$("p")

	const res = await fetch("https://chat-bot-beta-drab.vercel.app/random_num")
	const data = await res.json()
	const numero = data.num

	Cant.innerText = numero

	const EnLinea = $$("p")
	EnLinea.innerText = "En Línea"

	const ButtonNewChat = $$("button")
	ButtonNewChat.innerText = "Empezar a chatear"


	

	const Picture = $$("img") as HTMLImageElement
	const UserName = $$("span")

	const newChat = async () => {
		Messages1.innerHTML = ""
		count++;
		$("span").innerText = "Buscando pareja ..."
		const res = await fetch(`https://randomuser.me//api`)
		const data = await res.json()
		UserName.innerText = data.results[0].name.first + " " + data.results[0].name.last
		person = data.results[0].name.first + " " + data.results[0].name.last
		Picture.src = data.results[0].picture.medium 

		if (count == 5) {
			count = 0
			const res = await fetch("https://chat-bot-beta-drab.vercel.app/random_num")
			const data = await res.json()
			const numero = data.num

			Cant.innerText = numero
		}
		ButtonNewChat.innerText = "Nueva Persona"
		historia = [
		        {
		          role : "user",
		          parts: [{ text: `Tu serás ${person}, hablame como si fueras una persona, cualquier pregunta que te haga sobre tu informacion personal la respondes con datos falsos, recuerda, eres una persona` }]
		        },
		        {
		          role : "model",
		          parts: [{ text: "esta bien seré " + person }]
		        }
		      ]
	}

	ButtonNewChat.onclick = newChat

	addNodes(Who, [Picture, UserName])
	addNodes(Main, [Who, Chat1])
	addNodes(Header, [Cant, Online, EnLinea, ButtonNewChat])

}

document.addEventListener("DOMContentLoaded", MainMethod)