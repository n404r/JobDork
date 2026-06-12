import { describe, it, expect } from 'vitest';
import { defaultSearchState } from './types';
import { plainDorkString } from './dorkBuilder';

describe('dorkBuilder', () => {
  it('builds a basic query', () => {
    const state = {
      ...defaultSearchState,
      role: 'Frontend Engineer',
    };
    const dork = plainDorkString(state);
    expect(dork).toContain('("Frontend Engineer")');
  });

  it('handles keywords and skills', () => {
    const state = {
      ...defaultSearchState,
      role: 'Backend',
      keywords: 'Node, Express',
      skills: 'MongoDB',
    };
    const dork = plainDorkString(state);
    expect(dork).toContain('("Backend" OR Node OR Express)');
    expect(dork).toContain('(MongoDB)');
  });

  it('handles company mode', () => {
    const state = {
      ...defaultSearchState,
      company: 'stripe.com'
    };
    const dork = plainDorkString(state);
    expect(dork).toContain('site:stripe.com');
    expect(dork).toContain('("careers" OR "jobs" OR "join us")');
  });

  it('handles exclusions', () => {
    const state = {
      ...defaultSearchState,
      excludedBoards: ['linkedin', 'indeed']
    };
    const dork = plainDorkString(state);
    expect(dork).toContain('-site:linkedin.com');
    expect(dork).toContain('-site:indeed.com');
  });
});
