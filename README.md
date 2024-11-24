# 📚 Amazon Interview Questions Organizer

Welcome to the **Amazon Interview Questions Organizer**! 🚀 This project is a sleek, user-friendly tool for storing, indexing, and organizing questions and answers to common Amazon interview questions. Whether you're preparing for your next big opportunity or just love structured Q&A, this app has you covered!

## 🌟 Features

- **Dynamic Organization**: Seamlessly store, search, and display questions and answers.
- **Customizable Data**: Powered by a Google Sheet that acts as a flexible, quick & dirty database.
- **Filter by Leadership Principle**: Use the sidebar to filter questions based on Amazon's Leadership Principles.
- **Modern Tech Stack**:
  - ⚡ Built with **Vite.js** for blazing-fast development.
  - 🎨 Styled with **ChakraUI** for responsive, beautiful components.
  - ⚛️ Crafted using **React** for smooth, component-based UI.
  - 🐍 Utilizes a handy **Python script** for CSV-to-JSON conversion.

## 🎬 Getting Started

Follow these steps to get up and running:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/amazon-interview-questions-organizer.git
cd amazon-interview-questions-organizer
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Prepare Your Data

1. **Make a Copy** of this [Google Sheet Template](#).
2. **Rename the copied file** to `question_data.csv`.
3. **Download and save the file** into the `src/data` folder of your project directory.

### 4️⃣ Run the Application

Start the development server:

```bash
npm run dev
```

Your project will be available at http://localhost:5173. 🎉

---

### 🛠️ Workflow for Updating Data

Since the Google Sheet acts as the database, here's how to update your content:

1. **Edit your Google Sheet** with new questions, answers, or categories.
2. **Re-download the sheet** as a `.csv` file.
3. **Save and rename the file** as `question_data.csv`.
4. **Replace the existing file** in `src/data`.
5. **Restart the app** to see the updated content:

   ```bash
   npm run dev
   ```

---

### 🌳 Project Structure

Here's a quick overview of the directory structure:

```plaintext
src/
├── data/             # Contains the CSV and JSON data files
├── chakra/           # ChakraUI theme and custom styles
├── App.jsx           # Main React app entry point
```

---

### 🤖 Behind the Scenes

#### 🐍 Python Script

A Python script processes the `.csv` file into a `.json` file for React to consume. The script runs as part of the `npm run dev` workflow, so you don't have to worry about it.

#### 📦 Tech Stack

- **Vite.js**: Lightning-fast dev environment.
- **React**: For building interactive components.
- **ChakraUI**: Stylish and accessible design system.
- **Python**: For seamless CSV-to-JSON conversion.

---

### ❤️ Contributing

We welcome contributions! If you'd like to add features or improve the project, feel free to submit a pull request. Be sure to:

1. **Fork the repository.**
2. **Create a feature branch.**
3. **Commit your changes.**
4. **Submit a pull request!**

---

### 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

### 🎉 Acknowledgments

Special thanks to:

- Amazon Leadership Principles for inspiring the content.
- Google Sheets for its flexibility as a lightweight database.

---

✨ Happy interview prepping! ✨
