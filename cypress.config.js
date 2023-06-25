const { defineConfig } = require("cypress");
const xlsx = require("xlsx");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        generateJSONFromExcel: generateJSONFromExcel,
      });
      return config;
    },
  },
});
function generateJSONFromExcel(agrs) {
  const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
  const ws = wb.Sheets[agrs.sheetName];
  return xlsx.utils.sheet_to_json(ws, { raw: false });
}


