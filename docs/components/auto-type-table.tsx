import { createGenerator } from 'fumadocs-typescript';

let cachedGenerator: ReturnType<typeof createGenerator> | null = null;

function getGenerator() {
  if (!cachedGenerator) {
    cachedGenerator = createGenerator({
      tsconfig: './tsconfig.json',
      maxDepth: 3,
      exclude: ['node_modules/**/*', 'dist/**/*'],
    });
  }
  return cachedGenerator;
}

export function AutoTypeTable(props: Record<string, unknown>) {
  return (
    <div className='auto-type-table'>
      <div className='rounded-md border bg-muted p-4'>
        <p className='text-muted-foreground text-sm'>
          AutoTypeTable temporarily disabled - debugging stack overflow issue
        </p>
        <pre className='mt-2 text-xs'>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  );
}
