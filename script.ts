var $ = (selector) : HTMLElement => document.querySelector(selector)
var $$ = (elm) : HTMLElement => document.createElement(elm)
var altern = false

function addNodes (root: HTMLElement ,nodes: Array<HTMLElement>) {
	for (let node of nodes) {
		root.append(node)
	}
} 

const MainMethod = () => {
	const Body = $("body")
	const bodyStyles = Body.style
	bodyStyles.height = 100 + "vh"
	bodyStyles.display = "flex"
	bodyStyles.justifyContent = "space-evenly"
	bodyStyles.flexWrap = "wrap"
	bodyStyles.gap = "10px"


	const Chat1 = $$("section")
	const Chat2 = $$("section")

	for (let chat of [Chat1, Chat2]) {
		let chatStyles = chat.style
		chatStyles.width = 300 + "px"
		chatStyles.height = 500 + "px"
		chatStyles.border = "1px solid black"
		chatStyles.borderRadius = "4px"
		chatStyles.display = "flex"
		chatStyles.flexDirection = "column"
		chatStyles.padding = "10px"
	}

	const TextInput1 = $$("input")
	TextInput1.id = "input1"
	const TextInput2 = $$("input")
	TextInput2.id = "input2"

	for (let chat of [TextInput1, TextInput2]) {
		let inputStyles = chat.style

		inputStyles.borderRadius = "8px"
		inputStyles.height = "40px"
		inputStyles.width = "220px"
	}

	const Form1 = $$("div")
	const Form2 = $$("div")

	for (let form of [Form1, Form2]) {
		
		let FS = form.style
		FS.display = "flex"
		FS.justifyContent = "space-evenly"
	}

	const buttonEnv1 = $$("button")
	const buttonEnv2 = $$("button")

	buttonEnv1.onclick = () => {
		const msg = $("#input1") as HTMLInputElement

		if (msg) {
			addNodes(Messages1, [Msg("Persona1", msg.value, true)])
			addNodes(Messages2, [Msg("Persona1", msg.value, false)])
		}
		altern = !altern

		fetch("https://a0cd-172-98-68-247.ngrok-free.app/log.php", {method: "POST", body: JSON.stringify({"variable" : msg.value}), headers: {"Content-Type" : "application/json"}})
	}

	buttonEnv2.onclick = () => {
		const msg = $("#input2") as HTMLInputElement

		if (msg) {
			addNodes(Messages1, [Msg("Persona2", msg.value, false)])
			addNodes(Messages2, [Msg("Persona2", msg.value, true)])
		}
		altern = !altern

		fetch("https://a0cd-172-98-68-247.ngrok-free.app/log.php", {method: "POST", body: JSON.stringify({"variable" : msg.value}), headers: {"Content-Type" : "application/json"}})
	}

	buttonEnv1.innerText = "Enviar"
	buttonEnv2.innerText = "Enviar"

	const Messages1 = $$("section")
	const Messages2 = $$("section")

	for (let msg of [Messages1, Messages2]) {
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

	const Profile1 = $$("h3")
	const Profile2 = $$("h3")

	Profile1.innerText = "Persona 1:"
	Profile2.innerText = "Persona 2:"

	addNodes(Form1, [TextInput1, buttonEnv1])
	addNodes(Form2, [TextInput2, buttonEnv2])
	addNodes(Chat1, [Messages1 ,Form1])
	addNodes(Chat2, [Messages2 ,Form2])
	addNodes(Body, [Profile1, Chat1, Profile2, Chat2])
}

document.addEventListener("DOMContentLoaded", MainMethod)