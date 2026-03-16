// JSON-LD is structured data passed as plain objects from schema.ts — not user input.
// dangerouslySetInnerHTML is intentional and safe here.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
