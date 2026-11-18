
import { describe, expect, it } from 'vitest';
import {
  formatCurrency,
  formatDateToLocal,
  generatePagination,
} from './utils';

describe('formatCurrency', () => {
  it('formats 100 cents as one dollar', () => {
    expect(formatCurrency(100)).toBe('$1.00');
  });

  it('formats zero cents', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('formats a large amount with commas', () => {
    expect(formatCurrency(123456)).toBe('$1,234.56');
  });

  it('formats negative amounts', () => {
    expect(formatCurrency(-250)).toBe('-$2.50');
  });
});

describe('formatDateToLocal', () => {
  it('formats a date in US English', () => {
    expect(formatDateToLocal('2026-10-20T12:00:00Z', 'en-US'))
      .toBe('Oct 20, 2026');
  });

  it('formats a date in British English', () => {
    expect(formatDateToLocal('2026-10-20T12:00:00Z', 'en-GB'))
      .toBe('20 Oct 2026');
  });

  it('uses US English by default', () => {
    expect(formatDateToLocal('2026-11-09T12:00:00Z'))
      .toBe('Nov 9, 2026');
  });
});

describe('generatePagination', () => {
  it('returns all pages when there are three', () => {
    expect(generatePagination(1, 3)).toEqual([1, 2, 3]);
  });

  it('returns all seven pages without ellipsis', () => {
    expect(generatePagination(4, 7))
      .toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('shows an ellipsis near the beginning', () => {
    expect(generatePagination(2, 10))
      .toEqual([1, 2, 3, '...', 9, 10]);
  });

  it('shows an ellipsis near the end', () => {
    expect(generatePagination(9, 10))
      .toEqual([1, 2, '...', 8, 9, 10]);
  });

  it('shows two ellipses in the middle', () => {
    expect(generatePagination(5, 10))
      .toEqual([1, '...', 4, 5, 6, '...', 10]);
  });
});
