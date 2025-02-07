import { Request, Response } from "express";

export const numberService = async (req: Request, res: Response) => {
  //get the number from the query string
  const numberParam = req.query["number"];

  //check if the number is not provided or is not a number
  if (!numberParam || isNaN(Number(numberParam))) {
    res.status(400).json({ number: numberParam, error: true });
    return;
  }

  //initialize variables
  const number = Number(numberParam);
  const properties = [];

  //utility functions
  const isPrime = (n: number): boolean => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const isPerfect = (n: number): boolean => {
    const sum = Array.from({ length: n - 1 }, (_, i) => i + 1)
      .filter((i) => n % i === 0)
      .reduce((acc, curr) => acc + curr, 0);
    return n === sum;
  };

  const digitSum = (n: number): number => {
    return String(n)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
  };

  const isArmstrong = (n: number): boolean => {
    const numStr = n.toString();
    const power = numStr.length;
    return (
      n ===
      numStr
        .split("")
        .reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0)
    );
  };

  const getFunFact = async (number: number): Promise<string> => {
    const response = await fetch(`http://numbersapi.com/${number}`);
    const data = await response.text();
    return data;
  };

  //response properties
  if (isArmstrong(number)) properties.push("armstrong");
  if (number % 2 !== 0) properties.push("odd");
  else properties.push("even");

  const response = {
    number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties,
    digit_sum: digitSum(number),
    fun_fact: await getFunFact(number),
  };

  res.status(200).json(response);
};
