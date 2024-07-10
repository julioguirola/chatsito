var $ = function (selector) { return document.querySelector(selector); };
var $$ = function (elm) { return document.createElement(elm); };
var altern = false;
function addNodes(root, nodes) {
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        root.append(node);
    }
}
var MainMethod = function () {
    var Body = $("body");
    var bodyStyles = Body.style;
    bodyStyles.height = 100 + "vh";
    bodyStyles.display = "flex";
    bodyStyles.justifyContent = "space-evenly";
    bodyStyles.flexWrap = "wrap";
    bodyStyles.gap = "10px";
    var Chat1 = $$("section");
    var Chat2 = $$("section");
    for (var _i = 0, _a = [Chat1, Chat2]; _i < _a.length; _i++) {
        var chat = _a[_i];
        var chatStyles = chat.style;
        chatStyles.width = 300 + "px";
        chatStyles.height = 500 + "px";
        chatStyles.border = "1px solid black";
        chatStyles.borderRadius = "4px";
        chatStyles.display = "flex";
        chatStyles.flexDirection = "column";
        chatStyles.padding = "10px";
    }
    var TextInput1 = $$("input");
    TextInput1.id = "input1";
    var TextInput2 = $$("input");
    TextInput2.id = "input2";
    for (var _b = 0, _c = [TextInput1, TextInput2]; _b < _c.length; _b++) {
        var chat = _c[_b];
        var inputStyles = chat.style;
        inputStyles.borderRadius = "8px";
        inputStyles.height = "40px";
        inputStyles.width = "220px";
    }
    var Form1 = $$("div");
    var Form2 = $$("div");
    for (var _d = 0, _e = [Form1, Form2]; _d < _e.length; _d++) {
        var form = _e[_d];
        var FS = form.style;
        FS.display = "flex";
        FS.justifyContent = "space-evenly";
    }
    var buttonEnv1 = $$("button");
    var buttonEnv2 = $$("button");
    buttonEnv1.onclick = function () {
        var msg = $("#input1");
        if (msg) {
            addNodes(Messages1, [Msg("Persona1", msg.value, true)]);
            addNodes(Messages2, [Msg("Persona1", msg.value, false)]);
        }
        altern = !altern;
        fetch("https://chat-bot-beta-drab.vercel.app/messages", { method: "POST", body: JSON.stringify({ "msg": msg.value }), headers: { "Content-Type": "application/json" } });
    };
    buttonEnv2.onclick = function () {
        var msg = $("#input2");
        if (msg) {
            addNodes(Messages1, [Msg("Persona2", msg.value, false)]);
            addNodes(Messages2, [Msg("Persona2", msg.value, true)]);
        }
        altern = !altern;
        fetch("https://chat-bot-beta-drab.vercel.app/messages", { method: "POST", body: JSON.stringify({ "msg": msg.value }), headers: { "Content-Type": "application/json" } });
    };
    buttonEnv1.innerText = "Enviar";
    buttonEnv2.innerText = "Enviar";
    var Messages1 = $$("section");
    var Messages2 = $$("section");
    for (var _f = 0, _g = [Messages1, Messages2]; _f < _g.length; _f++) {
        var msg = _g[_f];
        var MS = msg.style;
        MS.display = "flex";
        MS.flexDirection = "column";
        MS.height = "450px";
        MS.width = "300px";
        MS.overflowY = "auto";
    }
    var Msg = function (sender, text, right) {
        var msg = $$("div");
        var msgSender = $$("p");
        var msgText = $$("p");
        msgSender.innerText = sender + ":";
        msgText.innerText = text;
        if (right) {
            msg.style.textAlign = "end";
        }
        if (altern) {
            msg.style.backgroundColor = "rgb(235 234 234)";
        }
        addNodes(msg, [msgSender, msgText]);
        return msg;
    };
    var Profile1 = $$("h3");
    var Profile2 = $$("h3");
    Profile1.innerText = "Persona 1:";
    Profile2.innerText = "Persona 2:";
    addNodes(Form1, [TextInput1, buttonEnv1]);
    addNodes(Form2, [TextInput2, buttonEnv2]);
    addNodes(Chat1, [Messages1, Form1]);
    addNodes(Chat2, [Messages2, Form2]);
    addNodes(Body, [Profile1, Chat1, Profile2, Chat2]);
};
document.addEventListener("DOMContentLoaded", MainMethod);
