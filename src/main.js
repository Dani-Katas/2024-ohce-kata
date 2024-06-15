import { Ohce } from "./Ohce.js"
import { MyConsole } from "./MyConsole.js"

const ohce = new Ohce(new MyConsole())

await ohce.run(process.argv[2])
