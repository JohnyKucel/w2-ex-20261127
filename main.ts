import { mkdirSync, writeFileSync } from "node:fs";

const word = "Refund";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
