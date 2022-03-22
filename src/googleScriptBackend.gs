const tableId = '1tiMBix_wTjHRHl8SHlm8wmrPx398pw1HQ3kqYFoouJ0';
const table = SpreadsheetApp.openById(tableId);
const sheet = table.getSheetByName("Sheet1");
const pwd = '';

function doPost({ postData: { contents } }) {
  try {
    const { fullName, birthDate, address, password } = JSON.parse(contents);
    if (password === pwd) {
      const availableLetters = getAvailableLetters();
      const randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
      const currentDateTime = Utilities.formatDate(new Date(), "GMT+3", "dd.MM.yyyy HH:mm:ss");
      sheet.appendRow([fullName, birthDate, address, `1 ${randomLetter}`, currentDateTime]);
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', data: { letter: randomLetter } }));
    } else {
      throw new Error('Неверный пароль');
    }
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: e.message }));
  }
}

function doGet() {
  return ContentService.createTextOutput('get');
}

function getAvailableLetters() {
  const lastRow = sheet.getLastRow();
  const allLetters = sheet.getRange("J1").getValue().split('');
  const count = sheet.getRange("H1").getValue();
  if (lastRow === 1) {
    return allLetters;
  }
  const availableLetters = allLetters.reduce((sum, current) => {
    sum[current] = 0;
    return sum;
  }, {});
  const filledLetters = sheet.getRange(`D2:D${lastRow}`).getValues().flat().map((fullClassName) => fullClassName.charAt(2));
  filledLetters.forEach((letter) => {
    if (letter in availableLetters) {
      availableLetters[letter]++;
    }
  });
  Object.entries(availableLetters).forEach(([key, value]) => { if (value >= count) delete availableLetters[key]; });
  const availableLettersKeys = Object.keys(availableLetters);
  return availableLettersKeys.length ? availableLettersKeys : allLetters;
}
