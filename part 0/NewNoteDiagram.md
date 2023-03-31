```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 302 redirect to /exampleapp/notes
    deactive server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    active server
    server-->>browser: HTML document
    deactive server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css

```
