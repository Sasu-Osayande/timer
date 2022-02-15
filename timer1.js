const args = process.argv.slice(2);

for (const beep of args) {
  if (!(isNaN(beep) || beep < 0))
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (1000 * beep));
}