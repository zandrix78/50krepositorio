* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #f6f7fb;
  --panel: #ffffff;
  --panel-strong: #121826;
  --sidebar: #171d2d;
  --sidebar-soft: #1d263d;
  --text: #1a1e2d;
  --muted: #697287;
  --primary: #ff6b2c;
  --primary-soft: #fff1eb;
  --green: #1eb980;
  --red: #f05d5e;
  --yellow: #f3b33d;
  --blue: #5a7cff;
  --line: #edf0f4;
  --shadow: 0 16px 32px rgba(16, 24, 40, 0.08);
}

html, body {
  min-height: 100%;
}

body {
  font-family: "Inter", sans-serif;
  background: linear-gradient(135deg, #f7f7fb 0%, #eef3f8 100%);
  color: var(--text);
}

button,
a,
input {
  font: inherit;
}

button,
a {
  text-decoration: none;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, var(--sidebar) 0%, var(--sidebar-soft) 100%);
  color: #fff;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.brand-mark {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary) 0%, #ff8e5a 100%);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1.1rem;
  color: #fff;
}

.brand-mark.large {
  width: 64px;
  height: 64px;
  font-size: 1.5rem;
  margin: 0 auto 16px;
}

.brand-box h2 {
  font-size: 1.05rem;
}

.brand-box p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.78rem;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu a {
  color: rgba(255, 255, 255, 0.78);
  padding: 12px 14px;
  border-radius: 12px;
  transition: 0.2s ease;
}

.menu a:hover,
.menu a.active {
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
}

.mini-card {
  margin-top: auto;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 14px 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.mini-card small {
  display: block;
  color: rgba(255, 255, 255, 0.65);
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 6px rgba(30, 185, 128, 0.14);
}

.main-panel {
  flex: 1;
  padding: 28px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.page-header {
  margin-bottom: 22px;
}

.eyebrow {
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.topbar h1 {
  font-size: clamp(1.8rem, 2vw, 2.5rem);
  margin-top: 4px;
}

.topbar-actions {
  display: flex;
  gap: 12px;
}

.ghost-btn,
.primary-btn {
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ghost-btn {
  background: var(--panel);
  color: var(--text);
  box-shadow: var(--shadow);
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary) 0%, #ff8a3d 100%);
  color: white;
  box-shadow: 0 14px 26px rgba(255, 107, 44, 0.25);
}

.full-btn {
  width: 100%;
  margin-top: 18px;
}

.hero-grid,
.stats-grid,
.content-grid,
.modules-grid,
.card-grid,
.three-columns,
.four-columns {
  display: grid;
  gap: 20px;
}

.hero-grid {
  grid-template-columns: 1.6fr 1fr 1fr;
  margin-bottom: 22px;
}

.hero-card,
.stat-card,
.panel,
.module-card,
.product-card {
  background: var(--panel);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.hero-card {
  padding: 22px 24px;
}

.hero-card.highlight {
  background: linear-gradient(135deg, #161f33 0%, #243050 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 8px;
}

.hero-card.highlight h2 {
  font-size: clamp(1.8rem, 2vw, 2.5rem);
  margin-top: 6px;
}

.trend {
  font-size: 0.82rem;
  padding: 10px 12px;
  border-radius: 999px;
  font-weight: 700;
}

.trend.up {
  background: rgba(30, 185, 128, 0.12);
  color: #7ae2b1;
}

.hero-card.compact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.hero-card.compact .label {
  color: var(--muted);
}

.hero-card.compact h3 {
  font-size: 2rem;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 22px;
}

.two-columns {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.three-columns {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.four-columns {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stat-card {
  padding: 20px 18px;
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.85rem;
}

.badge {
  padding: 6px 8px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
}

.badge.success {
  background: rgba(30, 185, 128, 0.12);
  color: var(--green);
}

.badge.warning {
  background: rgba(243, 179, 61, 0.16);
  color: #bf7e00;
}

.badge.info {
  background: rgba(90, 124, 255, 0.12);
  color: var(--blue);
}

.badge.danger {
  background: rgba(240, 93, 94, 0.14);
  color: var(--red);
}

.stat-card h3 {
  font-size: 2rem;
  margin-bottom: 8px;
}

.stat-card p {
  color: var(--muted);
  font-size: 0.82rem;
}

.sparkline {
  display: flex;
  align-items: end;
  gap: 7px;
  height: 54px;
  margin-top: 18px;
}

.sparkline span {
  display: block;
  width: 12%;
  background: linear-gradient(180deg, #ffb07a 0%, var(--primary) 100%);
  border-radius: 8px 8px 0 0;
}

.content-grid {
  grid-template-columns: 1.7fr 1fr;
  margin-bottom: 22px;
}

.lower-grid {
  grid-template-columns: 1.2fr 1fr;
}

.panel {
  padding: 22px 20px;
}

.full-panel {
  margin-top: 12px;
}

.panel-head,
.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.panel-head h3,
.section-title-row h3 {
  font-size: 1.1rem;
}

.panel-head a,
.section-title-row span {
  font-size: 0.8rem;
  color: var(--muted);
  text-decoration: none;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 12px 10px;
  border-bottom: 1px solid var(--line);
  font-size: 0.93rem;
}

th {
  color: var(--muted);
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.table-status {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 7px 10px;
  font-weight: 600;
  font-size: 0.76rem;
}

.status-prepare {
  background: rgba(255, 107, 44, 0.12);
  color: #b95d1d;
}

.status-delivery {
  background: rgba(90, 124, 255, 0.12);
  color: var(--blue);
}

.status-finished {
  background: rgba(30, 185, 128, 0.12);
  color: var(--green);
}

.list-ranking,
.employee-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.list-ranking li,
.employee-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.product-meta,
.employee-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.product-icon,
.employee-avatar {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, var(--primary) 0%, #ff9b62 100%);
}

.product-value,
.employee-score {
  font-weight: 700;
}

.chart-box {
  height: 200px;
  display: flex;
  align-items: end;
}

.large-chart {
  height: 260px;
}

.bar-group {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: 12px;
}

.bar-group span {
  display: block;
  flex: 1;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, #ffbf96 0%, var(--primary) 100%);
}

.module-section {
  margin-top: 22px;
}

.modules-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.module-card {
  padding: 18px 18px 16px;
}

.module-card .icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  margin-bottom: 16px;
  font-size: 1.4rem;
  background: var(--primary-soft);
  color: var(--primary);
}

.module-card h4 {
  font-size: 1rem;
  margin-bottom: 8px;
}

.module-card p {
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.6;
}

.card-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.product-card {
  padding: 18px;
}

.product-image {
  width: 100%;
  height: 120px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 3rem;
  margin-bottom: 16px;
}

.product-image.orange { background: #fff1eb; }
.product-image.red { background: #ffe5e5; }
.product-image.yellow { background: #fff5d6; }
.product-image.blue { background: #e9f0ff; }

.product-card h4 {
  margin-bottom: 8px;
}

.product-card p {
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

.product-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  font-size: 0.8rem;
}

.auth-body {
  background: linear-gradient(135deg, #1f2433 0%, #171d2d 100%);
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.auth-wrap {
  width: min(920px, 92vw);
}

.auth-card {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.25);
}

.auth-hero {
  padding: 44px 36px;
  background: linear-gradient(135deg, #202b41 0%, #171d2d 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.auth-hero h1 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin-bottom: 10px;
}

.auth-hero p {
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
}

.auth-form {
  background: #fff;
  padding: 34px 32px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.field-group label {
  font-weight: 600;
  color: var(--text);
}

.field-group input {
  border: 1px solid var(--line);
  border-radius: 12px;
  height: 48px;
  padding: 0 14px;
  background: #f6f7fb;
}

.row-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  color: var(--muted);
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

.chat-box {
  background: #f9fafb;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 16px;
  display: grid;
  gap: 14px;
}

.chat-box p {
  line-height: 1.7;
}

.client-body {
  background: linear-gradient(135deg, #fff7f4 0%, #eef4ff 100%);
}

.client-header {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(17, 24, 39, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
}

.client-brand {
  border-bottom: none;
  padding-bottom: 0;
}

.client-nav {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.client-nav a {
  color: var(--text);
  font-weight: 600;
}

.client-main {
  max-width: 1100px;
  margin: 30px auto;
  padding: 0 20px 50px;
}

.client-card {
  background: linear-gradient(135deg, #ff8a3d 0%, #ff6b2c 100%);
  border-radius: 24px;
  padding: 30px 26px;
  margin-bottom: 24px;
  color: #fff;
  box-shadow: 0 20px 36px rgba(255,107,44,0.25);
}

.client-banner h1 {
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 8px;
}

.client-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

@media (max-width: 1100px) {
  .stats-grid,
  .hero-grid,
  .content-grid,
  .lower-grid,
  .modules-grid,
  .card-grid,
  .three-columns,
  .four-columns,
  .client-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .main-panel {
    padding: 20px 16px 28px;
  }

  .topbar,
  .client-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .topbar-actions {
    width: 100%;
  }

  .topbar-actions button {
    flex: 1;
  }

  .stats-grid,
  .two-columns,
  .three-columns,
  .four-columns {
    grid-template-columns: 1fr;
  }

  .auth-card {
    grid-template-columns: 1fr;
  }

  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead {
    display: none;
  }

  tbody tr {
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--line);
  }

  td {
    border: none;
    padding: 6px 0;
  }
}
