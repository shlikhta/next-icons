const fs = require("fs").promises;
const camelcase = require("camelcase");
const packageName = 'nexticons'
async function getIcons(style) {
  let files = await fs.readdir(`./node_modules/${packageName}/${style}`);

  return Promise.all(
    files
      .filter((file) => {
        if (
          file.includes(".js") &&
          !file.includes("index") &&
          !file.includes("package")
        ) {
          return file;
        }
      })
      .map((file) => {
        return `${camelcase(file.replace(/\.js$/, ""), {
          pascalCase: true,
        })}`;
      })
  );
}

function importAll(icons, style) {
  const iconsList = icons.map((componentName) => {
    return `{name: "${componentName}", icon: <${componentName} className="next-icon" />}`;
  });

  let content = `import {\n${icons
    .map((componentName) => {
      return `${componentName},`;
    })
    .join("\n")}\n} from "${packageName}/${style}";`;

  content += `
  \n\n 
const icons = [\n${iconsList.join(", \n")}\n];
  
export default icons; 
  `;
  return content;
}

async function buildIcons() {
  let outlineDir = `./src/components/OutlineIcons`;
  await fs.mkdir(outlineDir, { recursive: true });
  let outlineIcons = await getIcons("outline");
  await fs.writeFile(
    `${outlineDir}/OutlineIcons.js`,
    importAll(outlineIcons, "outline"),
    "utf8"
  );
  console.log(`Added ${outlineIcons.length} outlineIcons`);

  let solidDir = `./src/components/SolidIcons`;
  await fs.mkdir(solidDir, { recursive: true });
  let solidIcons = await getIcons("solid");
  await fs.writeFile(
    `${solidDir}/SolidIcons.js`,
    importAll(solidIcons, "solid"),
    "utf8"
  );
  console.log(`Added ${solidIcons.length} solidIcons`);
}

function main() {
  console.log(`Building IconList package...`);
  Promise.all([buildIcons()]).then(() =>
    console.log("Finished building icon list")
  );
}

main();
