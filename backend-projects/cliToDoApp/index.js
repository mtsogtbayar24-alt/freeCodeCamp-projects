#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ============================================
// STEP 1: Setup - File Path & Storage
// ============================================
const DATA_FILE = path.join(__dirname, 'index.json');

// ============================================
// STEP 2: Initialize JSON File
// ============================================
function initializeFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ tasks: [] }, null, 2));
  }
}

// ============================================
// STEP 3: Read Tasks from JSON
// ============================================
function readTasks() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data).tasks || [];
  } catch (error) {
    return [];
  }
}

// ============================================
// STEP 4: Write Tasks to JSON
// ============================================
function writeTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ tasks }, null, 2));
}

// ============================================
// STEP 5: Add a New Task
// ============================================
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

// ============================================
// STEP 6: List All Tasks
// ============================================
function listTasks() {
  const tasks = readTasks();
  
  if (tasks.length === 0) {
    console.log('\n📭 No tasks found. Start by adding one!\n');
    return;
  }

  console.log('\n========== YOUR TASKS ==========');
  tasks.forEach((task, index) => {
    const status = task.completed ? '✓' : '○';
    const completed = task.completed ? '\x1b[9m' : ''; // strikethrough
    const reset = task.completed ? '\x1b[0m' : '';
    console.log(`${index + 1}. [${status}] ${completed}${task.title}${reset}`);
  });
  console.log('================================\n');
}

// ============================================
// STEP 7: Mark Task as Complete
// ============================================
function completeTask(index) {
  const tasks = readTasks();
  if (index < 0 || index >= tasks.length) {
    console.log('❌ Invalid task number');
    return;
  }
  tasks[index].completed = true;
  writeTasks(tasks);
  console.log(`✓ Task marked as completed: "${tasks[index].title}"`);
}

// ============================================
// STEP 8: Delete a Task
// ============================================
function deleteTask(index) {
  const tasks = readTasks();
  if (index < 0 || index >= tasks.length) {
    console.log('❌ Invalid task number');
    return;
  }
  const removed = tasks.splice(index, 1);
  writeTasks(tasks);
  console.log(`✓ Task deleted: "${removed[0].title}"`);
}

// ============================================
// STEP 9: Clear All Tasks
// ============================================
function clearAll() {
  writeTasks([]);
  console.log('✓ All tasks cleared');
}

// ============================================
// STEP 10: Get Task Statistics
// ============================================
function getStats() {
  const tasks = readTasks();
  const completed = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  
  console.log('\n========== STATISTICS ==========');
  console.log(`Total Tasks: ${total}`);
  console.log(`Completed: ${completed}`);
  console.log(`Remaining: ${total - completed}`);
  console.log(`Progress: ${total === 0 ? '0' : ((completed / total) * 100).toFixed(1)}%`);
  console.log('================================\n');
}

// ============================================
// STEP 11: Show Help Menu
// ============================================
function showHelp() {
  console.log(`
╔════════════════════════════════════════╗
║       CLI TO-DO APP - HELP MENU        ║
╚════════════════════════════════════════╝

USAGE:
  node index.js <command> [arguments]

COMMANDS:
  add <task>          Add a new task
  list                List all tasks
  complete <number>   Mark task as completed
  delete <number>     Delete a task
  clear               Clear all tasks
  stats               Show statistics
  help                Show this help menu

EXAMPLES:
  node index.js add "Buy groceries"
  node index.js list
  node index.js complete 1
  node index.js delete 2
  node index.js stats

  `);
}

// ============================================
// STEP 12: Interactive Mode
// ============================================
function interactiveMode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function prompt() {
    rl.question('\n📝 Enter command (add/list/complete/delete/clear/stats/help/exit): ', (input) => {
      const [command, ...args] = input.trim().split(' ');

      switch (command.toLowerCase()) {
        case 'add':
          if (args.length === 0) {
            console.log('❌ Please provide a task title');
          } else {
            addTask(args.join(' '));
          }
          break;
        case 'list':
          listTasks();
          break;
        case 'complete':
          if (!args[0]) {
            console.log('❌ Please provide a task number');
          } else {
            completeTask(parseInt(args[0]) - 1);
          }
          break;
        case 'delete':
          if (!args[0]) {
            console.log('❌ Please provide a task number');
          } else {
            deleteTask(parseInt(args[0]) - 1);
          }
          break;
        case 'clear':
          rl.question('Are you sure? (yes/no): ', (answer) => {
            if (answer.toLowerCase() === 'yes') {
              clearAll();
            }
            prompt();
          });
          return;
        case 'stats':
          getStats();
          break;
        case 'help':
          showHelp();
          break;
        case 'exit':
          console.log('\n👋 Goodbye!\n');
          rl.close();
          process.exit(0);
        default:
          console.log('❌ Unknown command. Type "help" for available commands.');
      }
      prompt();
    });
  }

  console.log('\n🚀 Welcome to CLI To-Do App (Interactive Mode)');
  showHelp();
  prompt();
}

// ============================================
// STEP 13: Parse Command Line Arguments
// ============================================
function main() {
  initializeFile();

  const args = process.argv.slice(2);

  if (args.length === 0) {
    // Launch interactive mode if no arguments provided
    interactiveMode();
    return;
  }

  const command = args[0].toLowerCase();
  const params = args.slice(1);

  switch (command) {
    case 'add':
      if (params.length === 0) {
        console.log('❌ Usage: node index.js add "<task>"');
      } else {
        addTask(params.join(' '));
      }
      break;

    case 'list':
      listTasks();
      break;

    case 'complete':
      if (!params[0]) {
        console.log('❌ Usage: node index.js complete <number>');
      } else {
        completeTask(parseInt(params[0]) - 1);
      }
      break;

    case 'delete':
      if (!params[0]) {
        console.log('❌ Usage: node index.js delete <number>');
      } else {
        deleteTask(parseInt(params[0]) - 1);
      }
      break;

    case 'clear':
      clearAll();
      break;

    case 'stats':
      getStats();
      break;

    case 'help':
      showHelp();
      break;

    default:
      console.log(`❌ Unknown command: "${command}"`);
      showHelp();
  }
}

// ============================================
// STEP 14: Run Application
// ============================================
main();

