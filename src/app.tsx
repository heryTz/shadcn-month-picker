import { useState } from "react";
import { MonthRange } from "./components/month-picker-content";
import { MonthPicker } from "./components/month-picker";
import { buttonVariants } from "./components/ui/button";
import { GithubIcon } from "lucide-react";

export function App() {
  const [range, setRange] = useState<MonthRange | null>(null);
  const [simple, setSimple] = useState<Date | null>(null);

  return (
    <div className="max-w-screen-sm mx-auto p-4 flex flex-col h-dvh">
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-3xl font-bold">Shadcn Month Picker</h1>
          <a
            href="https://github.com/heryTz/shadcn-month-picker"
            className={buttonVariants({ size: "icon", variant: "outline" })}
          >
            <GithubIcon />
          </a>
        </div>
        <p className="text-muted-foreground">
          Sample month picker build on top of{" "}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            className={buttonVariants({
              variant: "link",
              className: "px-0 py-0",
            })}
          >
            Shadcnui
          </a>
        </p>
        <h2 className="text-xl font-semibold mt-4">Simple</h2>
        <div className="mt-2">
          <MonthPicker
            type="simple"
            value={simple}
            onChange={setSimple}
            placeholder="Pick a month"
          />
        </div>
        <h2 className="text-xl font-semibold mt-4">Range</h2>
        <div className="mt-2">
          <MonthPicker
            type="range"
            value={range}
            onChange={setRange}
            placeholder="Pick a month"
          />
        </div>
        <h2 className="text-xl font-semibold mt-14">Result</h2>
        <pre className="border p-2 rounded-md mt-2">
          <code>{JSON.stringify({ simple, range }, null, 2)}</code>
        </pre>
      </div>
      <div>
        <p className="text-muted-foreground">
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/hery-nirintsoa-0813b91a4/"
            target="_blank"
            className={buttonVariants({
              variant: "link",
              className: "px-0 py-0",
            })}
          >
            Hery Nirintsoa
          </a>
        </p>
      </div>
    </div>
  );
}
