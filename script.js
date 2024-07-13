var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
var $ = function (selector) { return document.querySelector(selector); };
var $$ = function (elm) { return document.createElement(elm); };
var altern = false;
var count = 0;
var person = "";
var historia;
function addNodes(root, nodes) {
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        root.append(node);
    }
}
var MainMethod = function () { return __awaiter(_this, void 0, void 0, function () {
    var Main, bodyStyles, Chat1, _i, _a, chat, chatStyles, TextInput1, _b, _c, chat, inputStyles, Form1, _d, _e, form, FS, buttonEnv1, Messages1, _f, _g, msg, MS, Msg, Who, Header, Online, Cant, res, data, numero, EnLinea, ButtonNewChat, Picture, UserName, newChat;
    var _this = this;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                Main = $("main");
                bodyStyles = Main.style;
                bodyStyles.height = 100 + "vh";
                bodyStyles.display = "flex";
                bodyStyles.justifyContent = "space-evenly";
                bodyStyles.flexWrap = "wrap";
                bodyStyles.gap = "10px";
                Chat1 = $$("section");
                for (_i = 0, _a = [Chat1]; _i < _a.length; _i++) {
                    chat = _a[_i];
                    chatStyles = chat.style;
                    chatStyles.width = 300 + "px";
                    chatStyles.height = 500 + "px";
                    chatStyles.border = "3px solid deeppink";
                    chatStyles.borderRadius = "4px";
                    chatStyles.display = "flex";
                    chatStyles.flexDirection = "column";
                    chatStyles.padding = "10px";
                }
                TextInput1 = $$("input");
                TextInput1.id = "input1";
                for (_b = 0, _c = [TextInput1]; _b < _c.length; _b++) {
                    chat = _c[_b];
                    inputStyles = chat.style;
                    inputStyles.borderRadius = "8px";
                    inputStyles.height = "40px";
                    inputStyles.width = "220px";
                    inputStyles.border = "2px solid deeppink";
                }
                Form1 = $$("div");
                for (_d = 0, _e = [Form1]; _d < _e.length; _d++) {
                    form = _e[_d];
                    FS = form.style;
                    FS.display = "flex";
                    FS.justifyContent = "space-evenly";
                }
                buttonEnv1 = $$("button");
                buttonEnv1.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
                    var msg, res_1, resp, data_1, template;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                msg = $("#input1");
                                if (!msg.value) return [3 /*break*/, 3];
                                addNodes(Messages1, [Msg("Tú", msg.value, true)]);
                                return [4 /*yield*/, fetch("https://chat-bot-beta-drab.vercel.app/tindercito", {
                                        method: "POST",
                                        body: JSON.stringify({ history: historia, msg: msg.value })
                                    })];
                            case 1:
                                res_1 = _a.sent();
                                return [4 /*yield*/, res_1.json()];
                            case 2:
                                resp = _a.sent();
                                data_1 = resp.msg;
                                altern = !altern;
                                addNodes(Messages1, [Msg(person, data_1, false)]);
                                template = [
                                    {
                                        role: "user",
                                        parts: [{ text: msg.value }]
                                    },
                                    {
                                        role: "model",
                                        parts: [{ text: data_1 }]
                                    }
                                ];
                                historia = __spreadArray(__spreadArray([], historia, true), template, true);
                                _a.label = 3;
                            case 3:
                                altern = !altern;
                                msg.value = "";
                                return [2 /*return*/];
                        }
                    });
                }); };
                buttonEnv1.innerText = "Enviar";
                Messages1 = $$("section");
                for (_f = 0, _g = [Messages1]; _f < _g.length; _f++) {
                    msg = _g[_f];
                    MS = msg.style;
                    MS.display = "flex";
                    MS.flexDirection = "column";
                    MS.height = "450px";
                    MS.width = "300px";
                    MS.overflowY = "auto";
                }
                Msg = function (sender, text, right) {
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
                Who = $$("section");
                Who.className = "userinfo";
                addNodes(Form1, [TextInput1, buttonEnv1]);
                addNodes(Chat1, [Messages1, Form1]);
                Header = $(".headersub");
                Online = $$("div");
                Online.className = "online";
                Cant = $$("p");
                return [4 /*yield*/, fetch("https://chat-bot-beta-drab.vercel.app/random_num")];
            case 1:
                res = _h.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _h.sent();
                numero = data.num;
                Cant.innerText = numero;
                EnLinea = $$("p");
                EnLinea.innerText = "En Línea";
                ButtonNewChat = $$("button");
                ButtonNewChat.innerText = "Empezar a chatear";
                Picture = $$("img");
                UserName = $$("span");
                newChat = function () { return __awaiter(_this, void 0, void 0, function () {
                    var res, data, res_2, data_2, numero_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                Messages1.innerHTML = "";
                                count++;
                                $("span").innerText = "Buscando pareja ...";
                                return [4 /*yield*/, fetch("https://randomuser.me//api")];
                            case 1:
                                res = _a.sent();
                                return [4 /*yield*/, res.json()];
                            case 2:
                                data = _a.sent();
                                UserName.innerText = data.results[0].name.first + " " + data.results[0].name.last;
                                person = data.results[0].name.first + " " + data.results[0].name.last;
                                Picture.src = data.results[0].picture.medium;
                                if (!(count == 5)) return [3 /*break*/, 5];
                                count = 0;
                                return [4 /*yield*/, fetch("https://chat-bot-beta-drab.vercel.app/random_num")];
                            case 3:
                                res_2 = _a.sent();
                                return [4 /*yield*/, res_2.json()];
                            case 4:
                                data_2 = _a.sent();
                                numero_1 = data_2.num;
                                Cant.innerText = numero_1;
                                _a.label = 5;
                            case 5:
                                ButtonNewChat.innerText = "Nueva Persona";
                                historia = [
                                    {
                                        role: "user",
                                        parts: [{ text: "Imagina que tu nombre es ".concat(person, " ") }]
                                    },
                                    {
                                        role: "model",
                                        parts: [{ text: "esta bien seré " + person }]
                                    }
                                ];
                                return [2 /*return*/];
                        }
                    });
                }); };
                ButtonNewChat.onclick = newChat;
                addNodes(Who, [Picture, UserName]);
                addNodes(Main, [Who, Chat1]);
                addNodes(Header, [Cant, Online, EnLinea, ButtonNewChat]);
                return [2 /*return*/];
        }
    });
}); };
document.addEventListener("DOMContentLoaded", MainMethod);
