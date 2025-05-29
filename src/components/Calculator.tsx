import { useState } from "react";
import { Button } from "./ui/button";
import { X, Divide, Minus, Plus, Equal } from "lucide-react";

export function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand: number, secondOperand: number, operator: string) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xs w-full">
      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-right">
        <div className="text-3xl font-medium text-gray-800 overflow-x-auto">
          {display}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button
          variant="outline"
          className="text-lg font-medium"
          onClick={clearDisplay}
        >
          C
        </Button>
        <Button
          variant="outline"
          className="text-lg font-medium"
          onClick={() => setDisplay(display.charAt(0) === "-" ? display.substring(1) : "-" + display)}
        >
          +/-
        </Button>
        <Button
          variant="outline"
          className="text-lg font-medium"
          onClick={() => performOperation("%")}
        >
          %
        </Button>
        <Button
          variant="default"
          className="text-lg font-medium bg-orange-500 hover:bg-orange-600"
          onClick={() => performOperation("/")}
        >
          <Divide className="h-5 w-5" />
        </Button>

        {[7, 8, 9].map((num) => (
          <Button
            key={num}
            variant="outline"
            className="text-lg font-medium"
            onClick={() => inputDigit(num.toString())}
          >
            {num}
          </Button>
        ))}
        <Button
          variant="default"
          className="text-lg font-medium bg-orange-500 hover:bg-orange-600"
          onClick={() => performOperation("*")}
        >
          <X className="h-5 w-5" />
        </Button>

        {[4, 5, 6].map((num) => (
          <Button
            key={num}
            variant="outline"
            className="text-lg font-medium"
            onClick={() => inputDigit(num.toString())}
          >
            {num}
          </Button>
        ))}
        <Button
          variant="default"
          className="text-lg font-medium bg-orange-500 hover:bg-orange-600"
          onClick={() => performOperation("-")}
        >
          <Minus className="h-5 w-5" />
        </Button>

        {[1, 2, 3].map((num) => (
          <Button
            key={num}
            variant="outline"
            className="text-lg font-medium"
            onClick={() => inputDigit(num.toString())}
          >
            {num}
          </Button>
        ))}
        <Button
          variant="default"
          className="text-lg font-medium bg-orange-500 hover:bg-orange-600"
          onClick={() => performOperation("+")}
        >
          <Plus className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          className="text-lg font-medium col-span-2"
          onClick={() => inputDigit("0")}
        >
          0
        </Button>
        <Button
          variant="outline"
          className="text-lg font-medium"
          onClick={inputDecimal}
        >
          .
        </Button>
        <Button
          variant="default"
          className="text-lg font-medium bg-orange-500 hover:bg-orange-600"
          onClick={() => performOperation("=")}
        >
          <Equal className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}