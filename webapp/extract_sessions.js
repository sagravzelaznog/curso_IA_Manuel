import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parentDir = path.resolve(__dirname, '..');
const outputDir = path.join(__dirname, 'src', 'data');
const outputFile = path.join(outputDir, 'sessionsData.json');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate generic 7-question quiz
const generateGenericQuiz = (sessionNumber, title) => {
  const quiz = [];
  for (let i = 1; i <= 7; i++) {
    quiz.push({
      id: i,
      question: `Pregunta de prueba ${i} sobre la Sesión ${sessionNumber} (${title.substring(0, 20)}...)`,
      options: [
        `Opción correcta ${i}A`,
        `Opción incorrecta ${i}B`,
        `Opción incorrecta ${i}C`,
        `Opción incorrecta ${i}D`
      ],
      correctAnswer: 0 // Index of correct option
    });
  }
  return quiz;
};

const sessions = [];

// Read all files in parent directory
const files = fs.readdirSync(parentDir);

files.forEach(file => {
  if (file.startsWith('SESION') && file.endsWith('.html')) {
    const filePath = path.join(parentDir, file);
    const html = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(html);

    // Get session identifier from filename (e.g. SESION1-1 -> 1-1)
    const sessionId = file.replace('SESION', '').replace('.html', '');
    
    // Parse content
    const title = $('h1').text().trim();
    const meta = $('.session-meta').text().trim();
    
    // Convert sections to clean HTML strings or text
    const objectivesHTML = $('.learning-objectives').html() || '';
    const contentHTML = $('.content').html() || '';
    const practicalHTML = $('.practical-activity').html() || '';
    const exercisesHTML = $('.exercises').html() || '';
    const resourcesHTML = $('.resources').html() || '';

    sessions.push({
      id: sessionId,
      fileName: file,
      title: title,
      meta: meta,
      objectives: objectivesHTML.trim(),
      content: contentHTML.trim(),
      practical: practicalHTML.trim(),
      exercises: exercisesHTML.trim(),
      resources: resourcesHTML.trim(),
      quiz: generateGenericQuiz(sessionId, title)
    });
  }
});

// Sort sessions by module and number
sessions.sort((a, b) => {
  const [modA, numA] = a.id.split('-').map(Number);
  const [modB, numB] = b.id.split('-').map(Number);
  if (modA !== modB) return modA - modB;
  return numA - numB;
});

fs.writeFileSync(outputFile, JSON.stringify(sessions, null, 2));
console.log(`Successfully extracted ${sessions.length} sessions to ${outputFile}`);
