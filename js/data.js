/**
 * AQUA - Community Water Resource System
 * Core Data & Application State
 */

// ─── Mock Reports Data ─────────────────────────────────────────────────────
const REPORTS = [
  {
    id: 'RPT-2024-001',
    type: 'leakage',
    title: 'Major Pipe Burst on Main Street',
    location: 'Main Street, Ward 4',
    lat: 20.5937, lng: 78.9629,
    status: 'critical',
    priority: 'high',
    reportedBy: 'Anil Kumar',
    date: '2026-03-10',
    time: '07:42 AM',
    description: 'Underground pipe burst causing road flooding. Estimated 500 litres/hour wastage.',
    images: [],
    votes: 47,
    comments: 12,
    assignedTo: 'Zone B Maintenance',
    estimatedRepair: '2026-03-12'
  },
  {
    id: 'RPT-2024-002',
    type: 'quality',
    title: 'Discoloured Water in Housing Block C',
    location: 'Green Park Colony, Block C',
    lat: 20.6037, lng: 78.9729,
    status: 'investigating',
    priority: 'high',
    reportedBy: 'Priya Sharma',
    date: '2026-03-09',
    time: '02:15 PM',
    description: 'Water coming from taps has brownish tint and foul smell. Multiple residents affected.',
    images: [],
    votes: 89,
    comments: 24,
    assignedTo: 'Quality Control Team',
    estimatedRepair: '2026-03-11'
  },
  {
    id: 'RPT-2024-003',
    type: 'shortage',
    title: 'No Water Supply for 48 Hours',
    location: 'Sector 12, Residential Area',
    lat: 20.5737, lng: 78.9529,
    status: 'resolved',
    priority: 'medium',
    reportedBy: 'Ravi Mishra',
    date: '2026-03-07',
    time: '09:00 AM',
    description: 'Complete water supply disruption for the past 2 days. Tanker requested.',
    images: [],
    votes: 132,
    comments: 31,
    assignedTo: 'Supply Management',
    estimatedRepair: '2026-03-08'
  },
  {
    id: 'RPT-2024-004',
    type: 'leakage',
    title: 'Tap Leakage at Public Fountain',
    location: 'Central Park, Fountain Area',
    lat: 20.6137, lng: 78.9829,
    status: 'pending',
    priority: 'low',
    reportedBy: 'Meera Patel',
    date: '2026-03-11',
    time: '11:30 AM',
    description: 'Public fountain tap left open, continuous wastage observed for 3 days.',
    images: [],
    votes: 15,
    comments: 3,
    assignedTo: null,
    estimatedRepair: null
  },
  {
    id: 'RPT-2024-005',
    type: 'quality',
    title: 'High Chlorine Smell in Tap Water',
    location: 'New Town, Apartment Complex',
    lat: 20.5837, lng: 78.9429,
    status: 'investigating',
    priority: 'medium',
    reportedBy: 'Suresh Nair',
    date: '2026-03-10',
    time: '06:00 PM',
    description: 'Very strong chlorine taste and smell, not suitable for drinking.',
    images: [],
    votes: 56,
    comments: 18,
    assignedTo: 'Quality Control Team',
    estimatedRepair: '2026-03-13'
  },
  {
    id: 'RPT-2024-006',
    type: 'infrastructure',
    title: 'Damaged Water Meter at Building 7',
    location: 'Industrial Zone, Building 7',
    lat: 20.6237, lng: 78.9929,
    status: 'pending',
    priority: 'low',
    reportedBy: 'Deepa Rao',
    date: '2026-03-08',
    time: '03:20 PM',
    description: 'Water meter showing incorrect readings, suspected fault in mechanism.',
    images: [],
    votes: 8,
    comments: 2,
    assignedTo: null,
    estimatedRepair: null
  },
];

// ─── Water Quality Zones ───────────────────────────────────────────────────
const QUALITY_ZONES = [
  { id: 'Z1', name: 'Zone A - North', ph: 7.2, turbidity: 0.8, chlorine: 0.5, tds: 320, score: 92, status: 'good' },
  { id: 'Z2', name: 'Zone B - South', ph: 7.8, turbidity: 2.1, chlorine: 0.9, tds: 480, score: 71, status: 'moderate' },
  { id: 'Z3', name: 'Zone C - East',  ph: 6.9, turbidity: 4.5, chlorine: 1.2, tds: 610, score: 54, status: 'poor' },
  { id: 'Z4', name: 'Zone D - West',  ph: 7.1, turbidity: 0.5, chlorine: 0.4, tds: 290, score: 96, status: 'good' },
  { id: 'Z5', name: 'Zone E - Centre',ph: 7.4, turbidity: 1.3, chlorine: 0.6, tds: 350, score: 85, status: 'good' },
];

// ─── Usage Data (last 7 days) ──────────────────────────────────────────────
const USAGE_DATA = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  residential: [4200, 4800, 4100, 5200, 4900, 5800, 5100],
  commercial:  [2100, 2400, 2200, 2800, 2600, 1800, 1500],
  industrial:  [3100, 3300, 3000, 3500, 3200, 2900, 2700],
};

// ─── Monthly Report Stats ──────────────────────────────────────────────────
const MONTHLY_STATS = {
  labels: ['Sep','Oct','Nov','Dec','Jan','Feb','Mar'],
  leakage:   [12, 18, 14, 22, 16, 11, 15],
  quality:   [8,  6,  9,  11, 7,  5,  8],
  shortage:  [3,  5,  4,  8,  6,  4,  3],
  resolved:  [18, 24, 22, 30, 24, 18, 21],
};

// ─── Active Alerts ─────────────────────────────────────────────────────────
const ALERTS = [
  { type: 'danger', icon: '🚨', msg: 'Pipe burst at Main Street affecting 1,200 residents. Repair crew dispatched.', time: '12 min ago' },
  { type: 'warn',   icon: '⚠️', msg: 'Water quality alert in Zone C. High turbidity detected (4.5 NTU). Boil water advisory active.', time: '1 hr ago' },
  { type: 'good',   icon: '✅', msg: 'Water supply restored in Sector 12. Issue resolved ahead of schedule.', time: '3 hrs ago' },
];

// ─── Stats Summary ─────────────────────────────────────────────────────────
const STATS = {
  totalReports:    247,
  resolvedToday:   14,
  activeIssues:    38,
  waterSaved:      '2.4M',
  avgQualityScore: 79,
  responseTime:    '4.2h',
  criticalAlerts:  3,
  zonesMonitored:  5,
};

// ─── Type Config ───────────────────────────────────────────────────────────
const TYPE_CONFIG = {
  leakage:        { icon: '💧', color: '#3b82f6', label: 'Leakage' },
  quality:        { icon: '🔬', color: '#f59e0b', label: 'Water Quality' },
  shortage:       { icon: '🪣', color: '#ef4444', label: 'Shortage' },
  infrastructure: { icon: '🔧', color: '#8b5cf6', label: 'Infrastructure' },
};

const STATUS_CONFIG = {
  critical:      { label: 'Critical',     cls: 'badge-danger'  },
  investigating: { label: 'Investigating',cls: 'badge-warn'    },
  pending:       { label: 'Pending',      cls: 'badge-info'    },
  resolved:      { label: 'Resolved',     cls: 'badge-good'    },
};

// ─── Utility Functions ─────────────────────────────────────────────────────
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function timeAgo(dateStr, timeStr) {
  const now = new Date();
  const reported = new Date(`${dateStr}T${convertTo24(timeStr)}`);
  const diffMs = now - reported;
  const diffH = Math.floor(diffMs / 3600000);
  const diffD = Math.floor(diffH / 24);
  if (diffD > 0) return `${diffD}d ago`;
  if (diffH > 0) return `${diffH}h ago`;
  return 'Just now';
}

function convertTo24(timeStr) {
  const [time, period] = timeStr.split(' ');
  let [h, m] = time.split(':').map(Number);
  if (period === 'PM' && h !== 12) h += 12;
  if (period === 'AM' && h === 12) h = 0;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:00`;
}

function showToast(message, type = 'success') {
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span class="toast-text">${message}</span>
    <span class="toast-close" onclick="removeToast(this.parentElement)">✕</span>
  `;
  container.appendChild(toast);
  setTimeout(() => removeToast(toast), 4000);
}

function removeToast(toast) {
  toast.classList.add('removing');
  setTimeout(() => toast.remove(), 300);
}

// ─── Counter Animation ─────────────────────────────────────────────────────
function animateCounter(el, target, duration = 1500, prefix = '', suffix = '') {
  if (!el) return;
  const isFloat = String(target).includes('.');
  const numTarget = parseFloat(String(target).replace(/[^0-9.]/g, '')) || parseFloat(target) || 0;
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = numTarget * eased;
    el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.round(current).toLocaleString()) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ─── Sidebar Toggle ────────────────────────────────────────────────────────
function initSidebar() {
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('sidebar-overlay');
  if (!hamburger) return;
  function open()  { sidebar.classList.add('open'); overlay.classList.add('show'); }
  function close() { sidebar.classList.remove('open'); overlay.classList.remove('show'); }
  hamburger.addEventListener('click', () => sidebar.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
}

// ─── Page Init ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  // Mark current nav item as active
  const links = document.querySelectorAll('.nav-item[href]');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html') || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
