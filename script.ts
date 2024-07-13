var $ = (selector) : HTMLElement => document.querySelector(selector)
var $$ = (elm) : HTMLElement => document.createElement(elm)
var altern = false

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

	buttonEnv1.onclick = () => {
		const msg = $("#input1") as HTMLInputElement

		if (msg.value) {
			addNodes(Messages1, [Msg("Persona1", msg.value, true)])
		}
		altern = !altern

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

	addNodes(Form1, [TextInput1, buttonEnv1])
	addNodes(Chat1, [Messages1 ,Form1])
	addNodes(Main, [Chat1])

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
	ButtonNewChat.innerText = "Nueva Persona"

	const Newchat = $$("img") as HTMLImageElement

	Newchat.src = "add.svg"

	addNodes(ButtonNewChat, [Newchat])
	addNodes(Header, [Cant, Online, EnLinea, ButtonNewChat])

}

document.addEventListener("DOMContentLoaded", MainMethod)