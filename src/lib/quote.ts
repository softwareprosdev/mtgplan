type RateBracket = { minAge: number; maxAge: number; lowRate: number; highRate: number };

const rateBrackets: RateBracket[] = [
  { minAge: 18, maxAge: 29, lowRate: 8, highRate: 12 },
  { minAge: 30, maxAge: 39, lowRate: 12, highRate: 18 },
  { minAge: 40, maxAge: 49, lowRate: 18, highRate: 28 },
  { minAge: 50, maxAge: 59, lowRate: 28, highRate: 45 },
  { minAge: 60, maxAge: 69, lowRate: 45, highRate: 72 },
  { minAge: 70, maxAge: 75, lowRate: 72, highRate: 110 },
];

export type QuoteResult = { low: number; high: number };

export function calculateQuote(mortgageBalance: number, age: number): QuoteResult | null {
  const bracket = rateBrackets.find(b => age >= b.minAge && age <= b.maxAge);
  if (!bracket) return null;
  const units = mortgageBalance / 100_000;
  return { low: Math.round(units * bracket.lowRate), high: Math.round(units * bracket.highRate) };
}

export function validateQuoteInputs(mortgage: number, age: number, zip: string) {
  const errors: { mortgage?: string; age?: string; zip?: string } = {};
  if (mortgage < 25_000 || mortgage > 2_000_000) errors.mortgage = "Please enter a mortgage balance between $25,000 and $2,000,000";
  if (age < 18 || age > 75 || !Number.isInteger(age)) errors.age = "Please enter an age between 18 and 75";
  if (!/^\d{5}$/.test(zip)) errors.zip = "Please enter a valid 5-digit zip code";
  return { valid: Object.keys(errors).length === 0, errors };
}
