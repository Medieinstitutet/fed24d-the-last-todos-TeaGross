# 📌 Rättningsrapport – fed24d-the-last-todos-TeaGross

## 🎯 Uppgiftens Krav:
# TodoApp
Welcome to my todo app, my very first React project built with TypeScript!
This simple application demonstrates my understanding of fundamental React concepts such as components, state, props, and event handling. The project is a classic todo list with interactive functionality and modular code structure.

## ✨ Features
- A hardcoded list of todo items, created using useState

- Clear separation of concerns with multiple components for structure and presentation

- Ability to mark todos as done via an onChange event that toggles isDone to true

- Ability to delete a todo item using an onClick event and array filtering logic
  
- LocalStorage integration to persist todos between sessions

- A form component (AddTodo) that allows users to add new tasks

- Sorting functionality for the todo list:

    * Alphabetical order (A–Ö)

    * Reverse alphabetical order (Ö–A)

- Responsive styling using Tailwind CSS

  ## 🛠 Tech Stack
  
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

  ## Screenshots
  **Mobile view**
  
  ![Mobile view](src/assets/screenshot-mobile.png)

  **Tablet view**
  
  ![Tablet view](src/assets/screenshot-tablet.png)

  **Desktop view**
  
  ![Desktop view](src/assets/screenshot-desktop.png)

  ## Validation
  ![Lighthouse analysis](src/assets/lighthouse-analysis.png)

  ## 🤝 Credits
  This project was developed as part of the curriculum at Medieinstitutet during my first year of studies.


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Studenten har presenterat ett välstrukturerat och funktionellt React-projekt med TypeScript, med alla kraven uppfyllda. Funktionaliteten för att markera 'done', radera och lägga till todo-artiklar fungerar bra. Sorteringsfunktionaliteten finns på plats och applikationen integrerar effektivt med LocalStorage. Projektet har också en responsiv design med Tailwind CSS. Kodstrukturen är modulär med separata komponenter hanterade på ett bra sätt.

💡 **Förbättringsförslag:**  
1. Det kan vara bra att undvika att spara till LocalStorage varje gång 'todos' ändras i 'TodoList'. Använd en 'useEffect' hook för att optimera detta och minimerar antalet writes till LocalStorage. 2. Du kan överväga att använda mer specifika datatyper för variabler inom kodkomponenterna istället för `any` eller `string`. 3. Lägg till mer validering när du hanterar input från användare, speciellt när det gäller textinmatning för att säkra applikationen mot felaktig data.