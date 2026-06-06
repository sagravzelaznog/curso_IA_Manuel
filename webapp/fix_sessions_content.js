/* eslint-disable */
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parentDir = path.resolve(__dirname, '..');
const dataFile = path.join(__dirname, 'src', 'data', 'sessionsData.json');

const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

let fixedCount = 0;

data.forEach(session => {
  const noContent = !session.content || session.content.trim().length < 20;
  const noPract = !session.practical || session.practical.trim().length < 20;
  const noEx = !session.exercises || session.exercises.trim().length < 20;
  const noObj = !session.objectives || session.objectives.trim().length < 20;

  // We consider it "broken" if it's missing content
  // Note: 3.16 to 3.20 were created artificially, they don't have .html files.
  // But they DO have content.
  if (noContent && session.fileName) {
    const filePath = path.join(parentDir, session.fileName);
    if (fs.existsSync(filePath)) {
      const html = fs.readFileSync(filePath, 'utf-8');
      const $ = cheerio.load(html);
      
      // If it's a project session or just structured differently
      // Let's grab the entire main content except learning-objectives if possible
      let mainHtml = '';
      
      const sections = $('main.container > section');
      if (sections.length > 0) {
        sections.each((i, el) => {
          mainHtml += $.html(el) + '\n';
        });
      } else {
        mainHtml = $('main.container').html() || '';
      }

      // If we still found nothing, just grab the body minus header/footer
      if (!mainHtml || mainHtml.trim().length < 20) {
        mainHtml = $('body').html();
      }

      // We will put everything in 'content' and clear the others so they don't duplicate
      session.content = mainHtml;
      session.objectives = '';
      session.practical = '';
      session.exercises = '';
      
      fixedCount++;
      console.log(`Fixed missing content for ${session.id}`);
    }
  }
});

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log(`Fixed ${fixedCount} sessions in total.`);
