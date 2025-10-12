'use client';

import { cn } from '@/registry/default/lib/utils';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Check } from 'lucide-react';
import * as React from 'react';

export interface ListboxOption {
  label: string;
  value: string;
  disabled?: boolean;
  description?: string;
}

interface BaseListboxProps {
  options: ListboxOption[];
  className?: string;
  emptyMessage?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SingleSelectProps extends BaseListboxProps {
  multiple?: false;
  value?: string;
  onChange: (value: string) => void;
}

interface MultipleSelectProps extends BaseListboxProps {
  multiple: true;
  value?: string[];
  onChange: (value: string[]) => void;
}

type ListboxProps = SingleSelectProps | MultipleSelectProps;

function Listbox({
  options,
  value,
  onChange,
  multiple = false,
  className,
  emptyMessage = 'No options available',
  searchable = false,
  searchPlaceholder = 'Search...',
  icon: Icon = Check,
}: ListboxProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [focusedIndex, setFocusedIndex] = React.useState(0);
  const listRef = React.useRef<HTMLDivElement>(null);
  const optionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const filteredOptions = React.useMemo(() => {
    if (!searchQuery) return options;
    const query = searchQuery.toLowerCase();
    return options.filter(
      (option) =>
        option.label.toLowerCase().includes(query) ||
        option.description?.toLowerCase().includes(query)
    );
  }, [options, searchQuery]);

  const isSelected = React.useCallback(
    (optionValue: string) => {
      if (multiple) {
        return (value as string[] | undefined)?.includes(optionValue) ?? false;
      }
      return value === optionValue;
    },
    [value, multiple]
  );

  const handleSelect = React.useCallback(
    (optionValue: string) => {
      if (multiple) {
        const currentValue = (value as string[] | undefined) ?? [];
        const newValue = currentValue.includes(optionValue)
          ? currentValue.filter((v) => v !== optionValue)
          : [...currentValue, optionValue];
        (onChange as (value: string[]) => void)(newValue);
      } else {
        (onChange as (value: string) => void)(optionValue);
      }
    },
    [value, onChange, multiple]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      const enabledOptions = filteredOptions.filter((opt) => !opt.disabled);
      if (enabledOptions.length === 0) return;

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          setFocusedIndex((prev) => {
            const newIndex = prev < enabledOptions.length - 1 ? prev + 1 : 0;
            optionRefs.current[newIndex]?.scrollIntoView({ block: 'nearest' });
            return newIndex;
          });
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          setFocusedIndex((prev) => {
            const newIndex = prev > 0 ? prev - 1 : enabledOptions.length - 1;
            optionRefs.current[newIndex]?.scrollIntoView({ block: 'nearest' });
            return newIndex;
          });
          break;
        }
        case 'Enter':
        case ' ': {
          e.preventDefault();
          const focusedOption = enabledOptions[focusedIndex];
          if (focusedOption) {
            handleSelect(focusedOption.value);
          }
          break;
        }
        case 'Home': {
          e.preventDefault();
          setFocusedIndex(0);
          optionRefs.current[0]?.scrollIntoView({ block: 'nearest' });
          break;
        }
        case 'End': {
          e.preventDefault();
          setFocusedIndex(enabledOptions.length - 1);
          optionRefs.current[enabledOptions.length - 1]?.scrollIntoView({
            block: 'nearest',
          });
          break;
        }
      }
    },
    [filteredOptions, focusedIndex, handleSelect]
  );

  React.useEffect(() => {
    if (focusedIndex >= filteredOptions.length) {
      setFocusedIndex(Math.max(0, filteredOptions.length - 1));
    }
  }, [filteredOptions.length, focusedIndex]);

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {searchable && (
        <div className='px-3 pt-2'>
          <input
            type='text'
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-shadow placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50'
          />
        </div>
      )}
      <ScrollArea className='h-full'>
        <div
          ref={listRef}
          role='listbox'
          aria-multiselectable={multiple}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className='p-1 outline-none'
        >
          {filteredOptions.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground text-sm'>{emptyMessage}</div>
          ) : (
            filteredOptions.map((option, index) => {
              const selected = isSelected(option.value);
              const focused = index === focusedIndex;

              return (
                <div
                  key={option.value}
                  ref={(el) => {
                    optionRefs.current[index] = el;
                  }}
                  role='option'
                  aria-selected={selected}
                  aria-disabled={option.disabled}
                  tabIndex={-1}
                  className={cn(
                    'relative flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm outline-none transition-colors',
                    'hover:bg-accent focus:bg-accent',
                    selected && 'bg-accent/50',
                    focused && 'bg-accent/50',
                    option.disabled && 'cursor-not-allowed opacity-50 hover:bg-transparent'
                  )}
                  onClick={() => {
                    if (!option.disabled) {
                      handleSelect(option.value);
                      setFocusedIndex(index);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (!option.disabled) {
                        handleSelect(option.value);
                      }
                    }
                  }}
                  onMouseEnter={() => !option.disabled && setFocusedIndex(index)}
                >
                  <div className='flex flex-1 flex-col gap-0.5'>
                    <span className='leading-none'>{option.label}</span>
                    {option.description && (
                      <span className='text-muted-foreground text-xs'>{option.description}</span>
                    )}
                  </div>
                  <div className='h-4 w-4 shrink-0'>
                    {selected && Icon && <Icon className='h-4 w-4 text-primary' />}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

export { Listbox };
