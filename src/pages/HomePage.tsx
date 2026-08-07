import { useState, useMemo } from 'react';
import type { CSSProperties } from 'react';
import type { Route } from '@/App';
import { jobs } from '@/data/jobs';
import {
  FONT_FAMILY,
  sidebarBoxStyle,
  sidebarHeaderStyle,
  tableHeaderCellStyle,
  tableCellStyle,
  inputStyle,
  submitButtonStyle,
} from '@/styles/shared';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

interface HomePageProps {
  navigate: (r: Route) => void;
}

const pageStyle: CSSProperties = {
  fontFamily: FONT_FAMILY,
  background: '#DDDDDD',
  color: '#333333',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const welcomeBarStyle: CSSProperties = {
  background: '#FFFFCC',
  borderBottom: '1px solid #CCCCCC',
  padding: '6px 16px',
};

const welcomeInnerStyle: CSSProperties = {
  maxWidth: '960px',
  margin: '0 auto',
  fontSize: '13px',
};

const contentStyle: CSSProperties = {
  maxWidth: '960px',
  margin: '0 auto',
  display: 'flex',
  gap: '12px',
  padding: '12px 16px',
};

const sidebarStyle: CSSProperties = {
  width: '160px',
  flexShrink: 0,
};

const mainContentStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
};

const rightSidebarStyle: CSSProperties = {
  width: '170px',
  flexShrink: 0,
};

const sidebarLinkStyle: CSSProperties = {
  color: '#0033CC',
  cursor: 'pointer',
  textDecoration: 'underline',
};

const cities = ['All cities', 'Marshfield, WI', 'Westfield, WI', 'Wisconsin Rapids, WI', 'Stevens Point, WI'];

const sortOptions = [
  { label: 'Listing # (1-12)', value: 'id' },
  { label: 'Job Title (A-Z)', value: 'title' },
  { label: 'Pay (High-Low)', value: 'pay' },
];

function parsePay(salary: string): number {
  const match = salary.match(/\$([\d.]+)/);
  return match ? parseFloat(match[1]) : 0;
}

export default function HomePage({ navigate }: HomePageProps) {
  const [savedIds, setSavedIds] = useState<Set<number>>(new Set());
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('All cities');
  const [sortBy, setSortBy] = useState('id');
  const [appliedKeyword, setAppliedKeyword] = useState('');
  const [appliedCity, setAppliedCity] = useState('All cities');
  const [appliedSort, setAppliedSort] = useState('id');
  const [typeFilters, setTypeFilters] = useState<Set<string>>(new Set());
  const [showSaved, setShowSaved] = useState(false);

  const navItems = [
    { label: 'Find Jobs', active: !showSaved, onClick: () => setShowSaved(false) },
    { label: 'Post Resume', active: false, onClick: () => navigate({ name: 'post-resume' }) },
    { label: 'Employers', active: false, onClick: () => navigate({ name: 'employers' }) },
    { label: 'Career Advice', active: false, onClick: () => navigate({ name: 'career-advice' }) },
  ];

  function toggleStar(id: number) {
    setSavedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleTypeFilter(t: string) {
    setTypeFilters(prev => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }

  function handleSearch() {
    setAppliedKeyword(keyword);
    setAppliedCity(city);
    setAppliedSort(sortBy);
  }

  function resetFilters() {
    setTypeFilters(new Set());
  }

  const displayedJobs = useMemo(() => {
    let list = showSaved ? jobs.filter(j => savedIds.has(j.id)) : [...jobs];

    if (appliedKeyword.trim()) {
      const kw = appliedKeyword.toLowerCase();
      list = list.filter(j =>
        j.title.toLowerCase().includes(kw) ||
        j.company.toLowerCase().includes(kw) ||
        j.description.toLowerCase().includes(kw)
      );
    }
    if (appliedCity !== 'All cities') {
      list = list.filter(j => j.location === appliedCity);
    }
    if (typeFilters.size > 0) {
      list = list.filter(j => typeFilters.has(j.type));
    }
    if (appliedSort === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (appliedSort === 'pay') {
      list.sort((a, b) => parsePay(b.salary) - parsePay(a.salary));
    }
    return list;
  }, [appliedKeyword, appliedCity, appliedSort, typeFilters, showSaved, savedIds]);

  const selectStyle: CSSProperties = {
    padding: '3px 4px',
    border: '1px solid #999999',
    fontSize: '12px',
    fontFamily: FONT_FAMILY,
    background: '#FFFFFF',
    height: '24px',
  };

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(to bottom, #4A6CB4, #2A4A8C)',
          borderBottom: '2px solid #1a3a6c',
          color: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '8px 16px' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
            Work Place Finder
          </div>
          <div style={{ fontSize: '12px', opacity: 0.9 }}>
            » Local Jobs. Hiring Now. <strong>Updated Daily.</strong>
          </div>
        </div>
      </div>

      {/* Top Nav Bar */}
      <TopNav items={navItems} />

      {/* Welcome Bar */}
      <div style={welcomeBarStyle}>
        <div style={welcomeInnerStyle}>
          {showSaved ? (
            <>
              <strong>» Saved Jobs.</strong> You have saved{' '}
              <strong>{savedIds.size} job{savedIds.size !== 1 ? 's' : ''}</strong>.{' '}
              <span
                style={{ color: '#0033CC', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => setShowSaved(false)}
              >
                « Back to all listings
              </span>
            </>
          ) : (
            <>
              <strong>» Welcome!</strong> Showing{' '}
              <strong>{displayedJobs.length} job{displayedJobs.length !== 1 ? 's' : ''}</strong> in your area.
              Click any job title to view details and apply online.
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <div style={contentStyle}>
          {/* Left Sidebar */}
          <div style={sidebarStyle}>
            <div style={sidebarBoxStyle}>
              <div style={sidebarHeaderStyle}>Job Seekers</div>
              <div style={{ padding: '8px', fontSize: '12px', lineHeight: '1.8' }}>
                <div style={sidebarLinkStyle} onClick={() => setShowSaved(false)}>Browse Jobs</div>
                <div
                  style={sidebarLinkStyle}
                  onClick={() => setShowSaved(true)}
                >
                  Saved Jobs{savedIds.size > 0 && (
                    <span
                      style={{
                        marginLeft: '4px',
                        background: '#CC0000',
                        color: '#FFFFFF',
                        fontSize: '10px',
                        padding: '1px 4px',
                        fontWeight: 'bold',
                      }}
                    >
                      {savedIds.size}
                    </span>
                  )}
                </div>
                <div style={sidebarLinkStyle} onClick={() => navigate({ name: 'post-resume' })}>Post Resume</div>
                <div style={sidebarLinkStyle} onClick={() => navigate({ name: 'career-advice' })}>Career Advice</div>
              </div>
            </div>

            <div style={{ ...sidebarBoxStyle, marginTop: '12px' }}>
              <div style={sidebarHeaderStyle}>Browse By</div>
              <div style={{ padding: '8px', fontSize: '12px', lineHeight: '2' }}>
                {['Full-Time', 'Part-Time', 'Seasonal', 'Entry Level'].map(t => (
                  <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={typeFilters.has(t)}
                      onChange={() => toggleTypeFilter(t)}
                      style={{ cursor: 'pointer' }}
                    />
                    {t}
                  </label>
                ))}
                <div style={{ marginTop: '6px' }}>
                  <button
                    onClick={resetFilters}
                    style={{
                      background: 'linear-gradient(to bottom, #EEEEEE, #CCCCCC)',
                      border: '1px solid #999999',
                      fontSize: '11px',
                      fontFamily: FONT_FAMILY,
                      padding: '3px 10px',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '12px',
                padding: '8px',
                border: '1px dashed #AAAAAA',
                background: '#FFFFEE',
                fontSize: '11px',
                lineHeight: '1.6',
              }}
            >
              <strong style={{ color: '#333333' }}>Did You Know?</strong>
              <br />
              You can post your resume for free and let employers find YOU!
              <div
                style={{ marginTop: '6px', color: '#0033CC', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => navigate({ name: 'post-resume' })}
              >
                » Post your resume
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div style={mainContentStyle}>
            {/* Search box */}
            {!showSaved && (
              <div style={{ ...sidebarBoxStyle, marginBottom: '10px' }}>
                <div style={sidebarHeaderStyle}>Search Local Listings</div>
                <div style={{ padding: '10px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '3px' }}>Keyword</div>
                      <input
                        style={{ ...inputStyle, width: '200px' }}
                        placeholder="cashier, welding, Kwik Trip..."
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSearch()}
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '3px' }}>City</div>
                      <select
                        style={{ ...selectStyle, width: '160px' }}
                        value={city}
                        onChange={e => setCity(e.target.value)}
                      >
                        {cities.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '3px' }}>Sort by</div>
                      <select
                        style={{ ...selectStyle, width: '140px' }}
                        value={sortBy}
                        onChange={e => setSortBy(e.target.value)}
                      >
                        {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <button style={submitButtonStyle} onClick={handleSearch}>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Job table */}
            <div style={{ background: '#FFFFFF', border: '1px solid #CCCCCC' }}>
              <div style={sidebarHeaderStyle}>
                {showSaved ? 'Saved Job Listings' : 'Local Job Listings — Wisconsin'}
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ background: '#E0E0E0', borderBottom: '1px solid #CCCCCC' }}>
                      <th style={tableHeaderCellStyle}>#</th>
                      <th style={tableHeaderCellStyle}>Job Title</th>
                      <th style={tableHeaderCellStyle}>Company</th>
                      <th style={tableHeaderCellStyle}>Location</th>
                      <th style={tableHeaderCellStyle}>Type</th>
                      <th style={tableHeaderCellStyle}>Pay</th>
                      <th style={tableHeaderCellStyle}>Date Posted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedJobs.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          style={{ padding: '20px', textAlign: 'center', color: '#666666', fontSize: '12px' }}
                        >
                          {showSaved
                            ? 'You have no saved jobs. Click the ☆ star next to any listing to save it.'
                            : 'No results found. Try adjusting your search.'}
                        </td>
                      </tr>
                    ) : (
                      displayedJobs.map((job, i) => (
                        <tr
                          key={job.id}
                          style={{
                            borderBottom: '1px solid #EEEEEE',
                            background: i % 2 === 0 ? '#FFFFFF' : '#F7F7F7',
                          }}
                        >
                          <td style={{ ...tableCellStyle, color: '#666666' }}>{i + 1}</td>
                          <td style={tableCellStyle}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <span
                                title={savedIds.has(job.id) ? 'Remove from saved' : 'Save this listing'}
                                onClick={() => toggleStar(job.id)}
                                style={{
                                  cursor: 'pointer',
                                  color: savedIds.has(job.id) ? '#CC8800' : '#AAAAAA',
                                  fontSize: '14px',
                                  lineHeight: 1,
                                  userSelect: 'none',
                                }}
                              >
                                {savedIds.has(job.id) ? '★' : '☆'}
                              </span>
                              <span
                                style={{
                                  color: '#0033CC',
                                  textDecoration: 'underline',
                                  fontWeight: 'bold',
                                  cursor: 'pointer',
                                }}
                                onClick={() => navigate({ name: 'job', id: job.id })}
                              >
                                {job.title}
                              </span>
                            </span>
                          </td>
                          <td style={tableCellStyle}>{job.company}</td>
                          <td style={tableCellStyle}>{job.location}</td>
                          <td style={tableCellStyle}>{job.type}</td>
                          <td style={{ ...tableCellStyle, whiteSpace: 'nowrap' }}>{job.salary}</td>
                          <td style={{ ...tableCellStyle, whiteSpace: 'nowrap', color: '#555555' }}>{job.posted}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              style={{
                marginTop: '6px',
                padding: '6px 8px',
                background: '#EEEEEE',
                border: '1px solid #CCCCCC',
                fontSize: '11px',
                color: '#555555',
                textAlign: 'center',
              }}
            >
              Page 1 of 1 &nbsp;|&nbsp; Showing {displayedJobs.length} of {showSaved ? savedIds.size : jobs.length} results
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={rightSidebarStyle}>
            <div style={sidebarBoxStyle}>
              <div style={sidebarHeaderStyle}>Quick Contact</div>
              <div style={{ padding: '8px', fontSize: '12px', lineHeight: '1.6' }}>
                <strong>Support Hotline:</strong>
                <br />
                <span style={{ color: '#0033CC', fontSize: '13px', fontWeight: 'bold' }}>
                  1-800-WORK-FIND
                </span>
                <div style={{ marginTop: '6px' }}>
                  <strong>Email:</strong>
                  <br />
                  <span style={{ color: '#0033CC', textDecoration: 'underline', wordBreak: 'break-all', fontSize: '11px' }}>
                    contact@workplacefinder.com
                  </span>
                </div>
              </div>
            </div>

            <div style={{ ...sidebarBoxStyle, marginTop: '12px' }}>
              <div style={sidebarHeaderStyle}>Search Tips</div>
              <div style={{ padding: '8px', fontSize: '11px', lineHeight: '1.6' }}>
                <ul style={{ paddingLeft: '14px', margin: 0 }}>
                  <li>Search matches titles, companies and descriptions.</li>
                  <li>Apply online — no account needed!</li>
                  <li>Save a listing with the ☆ to read it later.</li>
                </ul>
              </div>
            </div>

            <div
              style={{
                marginTop: '12px',
                padding: '8px',
                border: '1px dashed #AAAAAA',
                background: '#FFFFEE',
                fontSize: '11px',
                lineHeight: '1.6',
              }}
            >
              <strong>★ Employer?</strong>
              <br />
              Post your job openings here and reach thousands of local job seekers!
              <div
                style={{ marginTop: '4px', color: '#0033CC', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => navigate({ name: 'employers' })}
              >
                » Post a job
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
