# UsersHub – User Management App

UsersHub is a simple and responsive user management application built with **React.js, JavaScript, and CSS**. It allows users to add, view, edit, and delete user information through a clean and interactive interface.

This project was developed as a React mini-project to practice React Hooks, component-based architecture, props, state management, and CRUD operations.

## 🌐 Live Demo

🚀 **Try the application:** https://userrhubb.netlify.app/

## 📂 GitHub Repository

💻 **Source code:** https://github.com/farukyazir/Usershub

## ✨ Features

- ➕ **Add Users:** Add user details, including name, age, email, and mobile number.
- 👤 **View Users:** Display user information in individual cards.
- ✏️ **Edit Users:** Modify existing user details directly from the user card.
- 🔄 **Update Users:** Save changes to the selected user's information.
- 🗑️ **Delete Users:** Remove a user from the list.
- 🔢 **Dynamic User Count:** Display the total number of users.
- 📝 **Controlled Forms:** Manage input values using React state.
- 🧩 **Reusable Components:** Organize the application into separate React components.
- 🎨 **Clean UI:** Provide a simple and user-friendly interface.
- 📱 **Responsive Design:** Designed to provide a convenient experience across screen sizes.

## 🛠️ Technologies Used

- **React.js** – Building the user interface with reusable components.
- **JavaScript (ES6+)** – Application logic and data handling.
- **HTML5** – Structuring the application.
- **CSS3** – Styling the interface and user cards.
- **React Hooks (`useState`)** – Managing state and form interactions.
- **Font Awesome** – User and delete icons.
- **Vite** – Development server and build tooling.
- **Netlify** – Application deployment.

## 📁 Project Structure

```text
Usershub/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── UserForm.jsx
│   │   ├── UserData.jsx
│   │   └── UserCard.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*Note: This is an example structure. Adjust the file and folder names if your repository differs.*

## ⚙️ Getting Started

Follow these steps to run UsersHub on your local machine.

### Prerequisites

- Node.js and npm installed.
- Basic knowledge of React and JavaScript.

### 1. Clone the repository

```bash
git clone https://github.com/farukyazir/Usershub.git
```

### 2. Navigate to the project directory

```bash
cd Usershub
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal. With the default Vite configuration, it is usually:

```text
http://localhost:5173
```

## 📖 How to Use UsersHub

1. Open the application.
2. Click the **Add User** button.
3. Enter the user's name, age, email, and mobile number.
4. Click **Add User** to display the new user card.
5. Click **Edit** on a card to modify the user's information.
6. Click **Update** to save the changes.
7. Click the delete icon to remove a user.
8. Check the total user count in the Users section.

## 🧠 React Concepts Practiced

This project helped me practice the following concepts:

- Functional components
- `useState` Hook
- Props and callback functions
- Parent-to-child data flow
- Event handling with `onClick` and `onChange`
- Controlled form inputs
- Conditional rendering
- Rendering lists using `map()`
- Using unique keys in React lists
- Updating arrays using `map()` and `filter()`
- Updating objects using the spread operator
- Component reusability
- CRUD operations: Create, Read, Update, and Delete

## 🎯 Project Goals

The main goal of UsersHub is to strengthen my understanding of React fundamentals by building a practical application that manages user information.

While developing this project, I practiced separating UI components, passing data through props, handling user input, and updating application state based on user actions.

## 🔮 Future Improvements

- Add form validation and error messages.
- Store user data in local storage to preserve it after a page refresh.
- Integrate a REST API and database for persistent data storage.
- Add search and filtering functionality.
- Add pagination for larger user lists.
- Improve accessibility and user experience.

## 👨‍💻 Author

**Faruk Yazir**

Aspiring MERN Stack Developer

- **GitHub:** https://github.com/farukyazir
- **LinkedIn:** https://www.linkedin.com/in/farukyazir/

## ⭐ Support

If you find this project useful, consider giving the repository a star!

Thank you for checking out UsersHub.
