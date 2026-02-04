import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
	.command(
		"curl <url>",
		"fetch som",
		() => {},
		(argv) => {
			console.log(argv);
		},
	)
	.demandCommand(1)
	.parse();
