module.exports = async (params) => {
  const {
    quickAddApi: { inputPrompt },
  } = params;

  const courseCode = await inputPrompt("📖 Název předmětu (Např. NI-MPI)");

  if (courseCode === undefined) {
    console.log("Flashcard creation cancelled.");
    return;
  }

  const lectureNumber = await inputPrompt("📖 Číslo přednášky (Např. 04)");

  if (lectureNumber === undefined) {
    console.log("Flashcard creation cancelled.");
    return;
  }

  const lectureName = await inputPrompt("📖 Název přednášky (Např. MongoDB)");

    if (lectureName === undefined) {
    console.log("Flashcard creation cancelled.");
    return;
  }

  const note = {
    courseCode,
    lectureNumber,
    lectureName,
  };

  createNote(app, note);
};

async function createNote(app, note) {
  const filePath = `Notes/${note.courseCode}/📄${note.courseCode} Přednáška ${note.lectureNumber}.md`;
  const content = `---
created: ${getCurrentDateTimeISO()}
title: "${note.lectureName}"
up: "[[📖${note.courseCode}]]"
---

TARGET DECK: ${note.courseCode}
FILE TAGS: ${note.courseCode}


\n`;

  // Create the folder if it doesn't exist
  const folderPath = filePath.substring(0, filePath.lastIndexOf("/"));
  if (!(await app.vault.adapter.exists(folderPath))) {
    await initCourseFolder(app, note.courseCode);
  }

  // Write the content to the new file
  await app.vault.adapter.write(filePath, content);

  // Get the newly created file by path
  const newFile = app.vault.getAbstractFileByPath(filePath);

  // Open the note if it was successfully created
  if (newFile) {
    await app.workspace.getLeaf().openFile(newFile);
  } else {
    console.error(`Failed to open the file: ${filePath}`);
  }
}

const getCurrentDateTimeISO = () => {
  const now = new Date();

  const padZero = (num) => (num < 10 ? "0" + num : num);

  const year = now.getFullYear();
  const month = padZero(now.getMonth() + 1); // Months are zero-indexed
  const day = padZero(now.getDate());

  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

function getCollectionName(app) {
  // Get the active file
  const activeFile = app.workspace.getActiveFile();
  if (!activeFile) {
    console.error("No active file found.");
    return;
  }

  // Get collection name reference
  return `[[${activeFile.basename}]]`;
}

async function initCourseFolder(app, courseCode) {
  const folderPath = `Notes/${courseCode}/`;
  await app.vault.createFolder(folderPath);

  const filePath = `Notes/${courseCode}/📖${courseCode}.md`;
  const content = `---
created: ${getCurrentDateTimeISO()}
up: "[[FIT]]"
---

### Notes
\`\`\`breadcrumbs
type: tree
dir: down
title: false
collapse: true
depth: 0-1
\`\`\`

\n`;

  // Write the content to the new file
  await app.vault.adapter.write(filePath, content);
}
