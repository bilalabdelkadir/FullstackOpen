```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 302 redirect to /exampleapp/notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JS file
    deactivate server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [
{
content: "dad",
date: "2023-03-30T23:08:57.581Z"
},
{
content: "oladamian",
date: "2023-03-30T23:13:12.949Z"
},
{
content: "1221",
date: "2023-03-30T23:15:13.502Z"
},
{
content: "",
date: "2023-03-30T23:22:39.442Z"
},
{
content: "",
date: "2023-03-30T23:22:45.594Z"
},
{
content: "k.lk",
date: "2023-03-30T23:39:24.283Z"
},
{
content: "fgfgfg",
date: "2023-03-31T00:04:59.474Z"
},
{
content: "nota",
date: "2023-03-31T00:15:27.333Z"
},
{
content: "newnote",
date: "2023-03-31T00:15:37.860Z"
},
{
content: "newnote2",
date: "2023-03-31T00:23:00.307Z"
},
{
content: "112",
date: "2023-03-31T00:30:18.615Z"
},
{
content: "Saludos desde Honduras! 🇭🇳",
date: "2023-03-31T00:32:26.739Z"
},
{
content: "ggg",
date: "2023-03-31T00:33:10.495Z"
},
{
content: "Saludos desde CodiGo",
date: "2023-03-31T03:35:17.839Z"
},
{
content: "Greetings from Trujillo, LL, Peru",
date: "2023-03-31T03:36:11.956Z"
},
{
content: "a",
date: "2023-03-31T03:50:18.464Z"
},
{
content: "sleepytime",
date: "2023-03-31T04:14:24.341Z"
},
{
content: "Hello!",
date: "2023-03-31T04:23:24.506Z"
},
{
content: "next person to comment is kinda sus",
date: "2023-03-31T04:29:16.515Z"
},
{
content: "my name is michael",
date: "2023-03-31T04:29:44.198Z"
},
{
content: "mike is sussy",
date: "2023-03-31T04:34:56.954Z"
},
{
content: "ok",
date: "2023-03-31T04:43:48.074Z"
},
{
content: "blam blam",
date: "2023-03-31T05:03:13.133Z"
},
{
content: "Greeting from Sri Lanka",
date: "2023-03-31T05:06:03.780Z"
},
{
content: "new note",
date: "2023-03-31T05:13:48.598Z"
},
{
content: "Hi There",
date: "2023-03-31T05:13:50.470Z"
},
{
content: "From Spa apa",
date: "2023-03-31T05:13:30.308Z"
},
{
content: "x",
date: "2023-03-31T05:23:43.429Z"
},
{
content: "sappa",
date: "2023-03-31T05:23:54.218Z"
},
{
content: "ddsa",
date: "2023-03-31T05:26:10.338Z"
},
{
content: "vaaa",
date: "2023-03-31T05:26:19.643Z"
},
{
content: "qartveli xart vinme?",
date: "2023-03-31T05:27:12.693Z"
},
{
content: "oooo",
date: "2023-03-31T05:30:37.431Z"
},
{
content: "dzroxaDJ",
date: "2023-03-31T05:37:16.947Z"
},
{
content: "hi",
date: "2023-03-31T05:38:57.870Z"
},
{
content: "yamete kudasai~",
date: "2023-03-31T05:45:05.190Z"
},
{
content: "new noteeee",
date: "2023-03-31T05:45:33.974Z"
},
{
content: "wot",
date: "2023-03-31T06:00:23.669Z"
},
{
content: "Greeting from TURKEY!",
date: "2023-03-31T06:08:09.377Z"
},
{
content: "Herkese Merhaba",
date: "2023-03-31T06:08:41.832Z"
},
{
content: "submit testt",
date: "2023-03-31T06:24:57.463Z"
},
{
content: "submit 2",
date: "2023-03-31T06:28:35.113Z"
},
{
content: "march 30 3023",
date: "2023-03-31T06:29:52.725Z"
},
{
content: "2024",
date: "2023-03-31T06:31:36.265Z"
},
{
content: "asasa",
date: "2023-03-31T06:33:10.935Z"
},
{
content: "testttt",
date: "2023-03-31T06:39:30.767Z"
},
{
content: "d",
date: "2023-03-31T06:39:55.927Z"
},
{
content: "asasa",
date: "2023-03-31T06:45:27.933Z"
},
{
content: "waddup",
date: "2023-03-31T06:47:40.915Z"
},
{
content: "Stay hard!!!",
date: "2023-03-31T06:49:30.094Z"
},
{
content: "2024",
date: "2023-03-31T06:56:39.854Z"
},
{
content: "",
date: "2023-03-31T06:56:45.865Z"
},
{
content: "RESIDENT EVIL 4 ",
date: "2023-03-31T07:11:24.255Z"
},
{
content: "HAHA",
date: "2023-03-31T07:20:23.486Z"
},
{
content: "Léon ",
date: "2023-03-31T07:22:22.974Z"
},
{
content: "test",
date: "2023-03-31T08:00:22.970Z"
},
{
content: "asd",
date: "2023-03-31T08:00:53.897Z"
},
{
content: "asd",
date: "2023-03-31T08:00:58.380Z"
},
{
content: "ßo",
date: "2023-03-31T08:03:50.356Z"
},
{
content: "uh89h08",
date: "2023-03-31T08:03:52.725Z"
},
{
content: "boo",
date: "2023-03-31T08:06:00.649Z"
},
{
content: "sad",
date: "2023-03-31T08:08:18.135Z"
},
{
content: "asda",
date: "2023-03-31T08:08:21.202Z"
},
{
content: "guys",
date: "2023-03-31T08:37:46.412Z"
},
{
content: "hi",
date: "2023-03-31T08:37:59.455Z"
},
{
content: "abc",
date: "2023-03-31T08:52:50.736Z"
},
{
content: "test",
date: "2023-03-31T09:02:34.313Z"
},
{
content: "tt",
date: "2023-03-31T09:23:10.434Z"
},
{
content: "",
date: "2023-03-31T09:23:18.152Z"
},
{
content: "",
date: "2023-03-31T09:23:19.479Z"
},
{
content: "yo",
date: "2023-03-31T09:24:02.518Z"
},
{
content: "test",
date: "2023-03-31T09:35:14.428Z"
},
{
content: "ምኮራ",
date: "2023-03-31T09:42:37.299Z"
},
{
content: "sup",
date: "2023-03-31T09:43:34.934Z"
},
{
content: ".",
date: "2023-03-31T09:48:27.906Z"
},
{
content: "spa test",
date: "2023-03-31T09:52:57.095Z"
},
{
content: " ",
date: "2023-03-31T09:53:03.066Z"
},
{
content: "加油！",
date: "2023-03-31T09:54:16.510Z"
},
{
content: "test",
date: "2023-03-31T10:03:43.267Z"
},
{
content: "aa",
date: "2023-03-31T10:04:15.414Z"
},
{
content: "Who's there?",
date: "2023-03-31T10:07:11.872Z"
},
{
content: "456",
date: "2023-03-31T10:07:35.965Z"
},
{
content: "",
date: "2023-03-31T10:07:42.635Z"
},
{
content: "hey",
date: "2023-03-31T10:10:07.925Z"
},
{
content: "Hello world",
date: "2023-03-31T10:15:50.593Z"
},
{
content: "hola",
date: "2023-03-31T10:16:08.831Z"
},
{
content: "yo mama",
date: "2023-03-31T10:16:21.782Z"
},
{
content: "naber fıstıklar",
date: "2023-03-31T10:30:48.159Z"
},
{
content: "hhhh",
date: "2023-03-31T10:33:36.842Z"
},
{
content: "ምኮራ",
date: "2023-03-31T10:39:00.553Z"
},
{
content: "hey",
date: "2023-03-31T11:03:52.120Z"
},
{
content: "Test",
date: "2023-03-31T11:04:48.810Z"
},
{
content: "Great is his faithfulness! 👆🏽",
date: "2023-03-31T11:07:07.136Z"
},
{
content: "Good Luck!",
date: "2023-03-31T11:10:09.798Z"
},
{
content: "jkj",
date: "2023-03-31T11:16:09.920Z"
},
{
content: "ddas",
date: "2023-03-31T11:16:20.263Z"
},
{
content: "sup",
date: "2023-03-31T11:22:40.542Z"
},
{
content: "",
date: "2023-03-31T11:26:50.981Z"
},
{
content: "test",
date: "2023-03-31T11:31:39.219Z"
},
{
content: "dfsd",
date: "2023-03-31T11:35:50.421Z"
}
]


```
