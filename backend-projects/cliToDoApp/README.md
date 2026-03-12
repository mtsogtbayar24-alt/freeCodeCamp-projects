# CLI To-Do App - Step by Step Guide

## Overview
A full-featured command-line To-Do application built with pure JavaScript that stores tasks in a JSON file.

---

## 📌 Architecture Overview

```
index.js         → Main application file with all logic
index.json       → Data storage for tasks (auto-created)
package.json     → (Optional) Node.js project metadata
```

---

## 🛠️ Implementation Steps

### STEP 1: File Path & Storage Setup
- Uses Node.js `path` module to locate the JSON file
- Resolves to `index.json` in the app directory
- `DATA_FILE` constant holds the file reference

```javascript
const DATA_FILE = path.join(__dirname, 'index.json');
```

---

### STEP 2: Initialize JSON File
- Creates `index.json` if it doesn't exist
- Initial structure: `{ "tasks": [] }`
- Called at app startup

```javascript
function initializeFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ tasks: [] }, null, 2));
  }
}
```

---

### STEP 3: Read Tasks from JSON
- Reads the JSON file synchronously
- Parses JSON and extracts tasks array
- Returns empty array on error (graceful fallback)

```javascript
function readTasks() {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data).tasks || [];
}
```

---

### STEP 4: Write Tasks to JSON
- Saves tasks array back to JSON file
- Uses`JSON.stringify` with indentation (pretty formatting)
- Maintains data persistence

```javascript
function writeTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ tasks }, null, 2));
}
```

---

### STEP 5: Add a New Task
- Creates task object with:
  - `id`: Unique timestamp
  - `title`: Task description
  - `completed`: Boolean status
  - `createdAt`: ISO date string
- Appends to tasks array and saves

```javascript
function addTask(title) {
  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    title: title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`✓ Task added: "${title}"`);
}
```

---

### STEP 6: List All Tasks
- Displays all tasks with formatting
- Shows completion status: ○ (pending) or ✓ (completed)
- Strikethrough effect for completed tasks
- User-friendly numbering (1-indexed)

---

### STEP 7: Mark Task as Complete
- Takes task index (0-indexed internally)
- Updates `completed` property to `true`
- Validates task exists before updating

```javascript
function completeTask(index) {
  const tasks = readTasks();
  if (index < 0 || index >= tasks.length) {
    console.log('❌ Invalid task number');
    return;
  }
  tasks[index].completed = true;
  writeTasks(tasks);
}
```

---

### STEP 8: Delete a Task
- Removes task by index using `splice()`
- Updates JSON file
- Provides feedback with deleted task name

---

### STEP 9: Clear All Tasks
- Wipes all tasks from JSON
- Writes empty tasks array: `{ "tasks": [] }`
- Single operation

---

### STEP 10: Get Statistics
- Calculates:
  - Total task count
  - Completed task count
  - Remaining task count
  - Progress percentage
- Uses filter and math operations

---

### STEP 11: Help Menu
- Displays available commands
- Shows usage examples
- Formatted for readability

---

### STEP 12: Interactive Mode
- Uses Node.js `readline` module for user input
- Continuous prompt loop
- Parses user commands and routes to functions
- Confirmation for destructive actions (clear)
- Type `exit` to quit

**Example flow:**
```
📝 Enter command: add Buy groceries
✓ Task added: "Buy groceries"

📝 Enter command: list
========== YOUR TASKS ==========
1. [○] Buy groceries
================================

📝 Enter command: complete 1
✓ Task marked as completed: "Buy groceries"

📝 Enter command: exit
👋 Goodbye!
```

---

### STEP 13: Command Line Argument Parsing
- Reads arguments from `process.argv.slice(2)`
- First argument = command
- Remaining arguments = parameters
- Routes to appropriate function

---

### STEP 14: Run Application
- `main()` function orchestrates everything
- Initializes file first
- Checks if arguments provided
- Launches interactive mode if no arguments
- Otherwise processes command-line commands

---

## 🚀 Usage Guide

### Quick Setup
```bash
chmod +x index.js  # Make executable (Unix/Mac)
```

### Command Mode (Direct Execution)

**Add a task:**
```bash
node index.js add "Buy groceries"
node index.js add "Complete project" "by Friday"
```

**List tasks:**
```bash
node index.js list
```

**Mark task complete:**
```bash
node index.js complete 1
node index.js complete 3
```

**Delete task:**
```bash
node index.js delete 1
```

**Clear all tasks:**
```bash
node index.js clear
```

**View statistics:**
```bash
node index.js stats
```

**Show help:**
```bash
node index.js help
```

### Interactive Mode (No Arguments)
```bash
node index.js
```
Then type commands:
- `add Task description`
- `list`
- `complete 1`
- `delete 2`
- `clear`
- `stats`
- `help`
- `exit`

---

## 📊 Data Format (index.json)

**Empty state:**
```json
{
  "tasks": []
}
```

**With tasks:**
```json
{
  "tasks": [
    {
      "id": 1710000000000,
      "title": "Buy groceries",
      "completed": false,
      "createdAt": "2026-03-12T10:00:00.000Z"
    },
    {
      "id": 1710000001000,
      "title": "Complete project",
      "completed": true,
      "createdAt": "2026-03-12T10:01:00.000Z"
    }
  ]
}
```

---

## 🔑 Key JavaScript Concepts Used

| Concept | Example |
|---------|---------|
| **File I/O** | `fs.readFileSync()`, `fs.writeFileSync()` |
| **JSON** | `JSON.parse()`, `JSON.stringify()` |
| **Arrays** | `push()`, `splice()`, `filter()` |
| **Objects** | Task object structure |
| **Functions** | Modular function design |
| **Control Flow** | `switch/case`, `if/else` |
| **String Interpolation** | Template literals with \`${}\` |
| **Command Line** | `process.argv`, `process.exit()` |
| **Terminal I/O** | `readline` module for input/output |
| **Date/Time** | `Date.now()`, `.toISOString()` |

---

## 💡 Advanced Features Implemented

✅ **Data Persistence** - Tasks saved to JSON file  
✅ **Error Handling** - Graceful fallbacks  
✅ **User-Friendly UI** - Emojis and colors  
✅ **Validation** - Index bounds checking  
✅ **Metadata** - Created timestamps and unique IDs  
✅ **Statistics Tracking** - Progress calculation  
✅ **Interactive & Command Mode** - Flexible usage  
✅ **Confirmation Dialogs** - Prevent accidents  

---

## 🎯 Next Steps to Enhance

1. **Search feature** - Find tasks by keyword
2. **Update task** - Modify existing task description
3. **Priorities** - Add priority levels (High/Medium/Low)
4. **Due dates** - Set task deadlines
5. **Categories** - Organize tasks by category
6. **Export** - Save to CSV or other formats
7. **Colored output** - Use chalk library for better formatting
8. **Database** - Replace JSON with MongoDB/SQLite
9. **Web UI** - Add Express.js for web interface
10. **Unit Tests** - Add Jest tests for reliability

---

**Happy task management! 📋**
