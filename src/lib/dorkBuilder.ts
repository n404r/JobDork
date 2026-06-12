import { SearchState } from "./types";
import { SOURCES, EXCLUDE_PORTALS } from "./constants";

function splitList(str: string): string[] {
  return str.split(',').map(s => s.trim()).filter(Boolean);
}

function quoteIfMulti(term: string): string {
  return term.includes(' ') ? `"${term}"` : term;
}

export function buildDorkParts(state: SearchState): { type: string, value: string }[] {
  const parts: { type: string, value: string }[] = [];

  // 1. Job title + keywords
  const titleTerms: string[] = [];
  if (state.role) {
    const rawRoles = splitList(state.role);
    rawRoles.forEach(r => titleTerms.push(quoteIfMulti(r)));
  }
  
  const keywords = splitList(state.keywords);
  keywords.forEach(k => titleTerms.push(quoteIfMulti(k)));
  
  if (titleTerms.length) {
    parts.push({ type: 'group', value: `(${titleTerms.join(' OR ')})` });
  }

  // 2. Skills
  const skills = splitList(state.skills);
  if (skills.length) {
    const skillTerms = skills.map(s => quoteIfMulti(s));
    parts.push({ type: 'group', value: `(${skillTerms.join(' OR ')})` });
  }

  // 3. Experience Levels
  if (state.experienceLevels.length) {
    const expTerms = state.experienceLevels.map(e => quoteIfMulti(e));
    parts.push({ type: 'group', value: `(${expTerms.join(' OR ')})` });
  }

  // 4. Location & Work Type
  const wtTerms: string[] = [];
  if (state.workTypes.includes('remote')) wtTerms.push('remote');
  if (state.workTypes.includes('wfh')) wtTerms.push('"work from home"');
  if (state.workTypes.includes('hybrid')) wtTerms.push('hybrid');
  if (state.workTypes.includes('onsite')) wtTerms.push('("on-site" OR onsite)');

  const locTerms = [...wtTerms];
  
  if (state.customLocation) {
    const customLocs = splitList(state.customLocation);
    customLocs.forEach(loc => locTerms.push(quoteIfMulti(loc)));
  } else {
    const locSelect = state.location;
    if (locSelect !== 'worldwide') {
      const locMap: Record<string, string> = {
        remote: '"remote" OR "work from anywhere" OR distributed',
        india: '"India"',
        usa: '"United States" OR "USA"',
        europe: '"Europe" OR EU'
      };
      if (locMap[locSelect]) locTerms.push(locMap[locSelect]);
    }
  }
  
  if (locTerms.length) {
    parts.push({ type: 'group', value: `(${locTerms.join(' OR ')})` });
  }

  // 5. Target Company
  if (state.company) {
    const cleanCompany = state.company.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
    // Usually company mode targets site:company.com/careers
    // For simplicity, we just do site:company.com ("careers" OR "jobs")
    parts.push({ type: 'site', value: `site:${cleanCompany}` });
    parts.push({ type: 'group', value: '("careers" OR "jobs" OR "join us")' });
  }

  // 5. Sources (ATS Platforms)
  // Only add these if we're not targeting a specific company
  if (!state.company) {
    const includedSites: string[] = [];
    
    // Add explicitly selected ATS sources
    SOURCES.forEach(source => {
      if (state.includedSources.includes(source.id)) {
        includedSites.push(source.site);
      }
    });

    if (includedSites.length) {
      parts.push({ type: 'group', value: `(${includedSites.join(' OR ')})` });
    }
  }

  // 6. Custom filter / advanced options
  const customFilter = state.customFilter?.trim();
  if (customFilter) {
    const wrapped = customFilter.includes('"') ? customFilter : (customFilter.includes(' ') ? `"${customFilter}"` : customFilter);
    parts.push({ type: 'group', value: `(${wrapped})` });
  }

  if (state.exactPhrase && state.role) {
    // If exact phrase is selected, ensure the role is strictly quoted. (Already done above).
  }
  if (state.salaryMentioned) {
    parts.push({ type: 'group', value: '("salary" OR "compensation" OR "CTC")' });
  }
  if (state.easyApply) {
    parts.push({ type: 'group', value: '("easy apply" OR "quick apply" OR "apply now")' });
  }
  if (state.openPositionsOnly) {
    parts.push({ type: 'group', value: '("open position" OR "open role" OR "now hiring" OR "we are hiring")' });
  }

  // 7. Excluded job boards
  EXCLUDE_PORTALS.forEach(portal => {
    if (state.excludedBoards.includes(portal.id)) {
      parts.push({ type: 'neg', value: `-${portal.site}` });
    }
  });

  if (state.excludeSponsored) {
    parts.push({ type: 'neg', value: '-"sponsored"' });
  }

  // 8. Date filter
  if (state.dateFilter) {
    const days = state.dateFilter === '24h' ? 1 : state.dateFilter === '7d' ? 7 : 30;
    const d = new Date();
    d.setDate(d.getDate() - days);
    const dateStr = d.toISOString().split('T')[0];
    parts.push({ type: 'date', value: `after:${dateStr}` });
  }

  return parts;
}

export function plainDorkString(state: SearchState): string {
  return buildDorkParts(state).map(p => p.value).join(' ');
}
