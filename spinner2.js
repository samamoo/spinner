const spinSticks = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 0
for (const stick of spinSticks) {
  setTimeout(() => {
    process.stdout.write(`\r${stick}    `);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay);

