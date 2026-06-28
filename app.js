'use strict';

// ============================================================
// i18n
// ============================================================

const LANG = {
  zh: {
    appName: '玟玟の習慣',
    today: '今日', tasks: '任務', calendar: '日曆', stats: '成就',
    addTask: '新增任務', editTask: '編輯任務',
    taskName: '任務名稱', startDate: '起始日期',
    dailyTime: '執行時間', reminderTime: '提醒時間',
    save: '儲存', cancel: '取消', delete: '刪除',
    noReminder: '不提醒',
    reminderOpts: ['不提醒','5分鐘前','10分鐘前','15分鐘前','30分鐘前','1小時前'],
    reminderVals: [0,5,10,15,30,60],
    noTasksToday: '今天沒有任務\n點 + 開始新增',
    noTasksYet:   '還沒有任務\n點 + 新增第一個',
    allDone: '全部完成！今天超棒 ✨',
    streakDays: '天連續',
    bestStreak: '最長連續', totalDays: '完成天數', monthRate: '本月完成率',
    greeting: '早安，玟玟！',
    badges: '成就徽章',
    installHint: '📲 加到主畫面才能收到提醒通知',
    pomodoroTitle: '番茄計時器',
    pomodoroWork: '專注',
    pomodoroBreak: '休息',
    pomodoroLongBreak: '長休息',
    pomodoroStart: '開始',
    pomodoroPause: '暫停',
    pomodoroReset: '重置',
    pomodoroSkip: '跳過',
    pomodoroCount: '今日番茄',
    workMin: '專注 25 分鐘',
    breakMin: '休息 5 分鐘',
    longBreakMin: '長休息 15 分鐘',
    pomoDone: '🍅 一個番茄完成！',
    breakDone: '休息結束，繼續加油！',
    months: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    weekdays: ['日','一','二','三','四','五','六'],
    badgeList: [
      { key:'first',  icon:'🌱', name:'踏出第一步', desc:'完成第一天任務' },
      { key:'week',   icon:'🔥', name:'七日達人',   desc:'連續 7 天完成' },
      { key:'month',  icon:'👑', name:'月度女王',   desc:'連續 30 天完成' },
      { key:'perfect',icon:'💎', name:'完美主義',   desc:'單日 100% 完成' },
      { key:'bird',   icon:'🌅', name:'早起鳥兒',   desc:'完成早上 8 點前任務' },
      { key:'pomo10', icon:'🍅', name:'番茄達人',   desc:'累積 10 個番茄' },
    ],
  },
  en: {
    appName: "Wenwen's Habits",
    today: 'Today', tasks: 'Tasks', calendar: 'Calendar', stats: 'Awards',
    addTask: 'New Task', editTask: 'Edit Task',
    taskName: 'Task Name', startDate: 'Start Date',
    dailyTime: 'Daily Time', reminderTime: 'Reminder',
    save: 'Save', cancel: 'Cancel', delete: 'Delete',
    noReminder: 'No reminder',
    reminderOpts: ['No reminder','5 min before','10 min before','15 min before','30 min before','1 hour before'],
    reminderVals: [0,5,10,15,30,60],
    noTasksToday: 'No tasks today\nTap + to add one',
    noTasksYet:   'No tasks yet\nTap + to add your first one',
    allDone: 'All done! Amazing day ✨',
    streakDays: '-day streak',
    bestStreak: 'Best Streak', totalDays: 'Days Done', monthRate: 'Monthly Rate',
    greeting: 'Good morning, Wenwen!',
    badges: 'Achievements',
    installHint: '📲 Add to Home Screen to receive reminders',
    pomodoroTitle: 'Pomodoro Timer',
    pomodoroWork: 'Focus',
    pomodoroBreak: 'Break',
    pomodoroLongBreak: 'Long Break',
    pomodoroStart: 'Start',
    pomodoroPause: 'Pause',
    pomodoroReset: 'Reset',
    pomodoroSkip: 'Skip',
    pomodoroCount: 'Today\'s Pomodoros',
    workMin: 'Focus 25 min',
    breakMin: 'Break 5 min',
    longBreakMin: 'Long break 15 min',
    pomoDone: '🍅 Pomodoro done!',
    breakDone: 'Break over, keep going!',
    months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    weekdays: ['Su','Mo','Tu','We','Th','Fr','Sa'],
    badgeList: [
      { key:'first',  icon:'🌱', name:'First Step',    desc:'Completed your first day' },
      { key:'week',   icon:'🔥', name:'Week Warrior',  desc:'7-day streak' },
      { key:'month',  icon:'👑', name:'Monthly Queen', desc:'30-day streak' },
      { key:'perfect',icon:'💎', name:'Perfectionist', desc:'100% in one day' },
      { key:'bird',   icon:'🌅', name:'Early Bird',    desc:'Task done before 8am' },
      { key:'pomo10', icon:'🍅', name:'Pomo Pro',      desc:'10 pomodoros total' },
    ],
  },
  fr: {
    appName: 'Habitudes de Wenwen',
    today: "Aujourd'hui", tasks: 'Tâches', calendar: 'Calendrier', stats: 'Succès',
    addTask: 'Nouvelle tâche', editTask: 'Modifier la tâche',
    taskName: 'Nom de la tâche', startDate: 'Date de début',
    dailyTime: 'Heure quotidienne', reminderTime: 'Rappel',
    save: 'Enregistrer', cancel: 'Annuler', delete: 'Supprimer',
    noReminder: 'Pas de rappel',
    reminderOpts: ['Pas de rappel','5 min avant','10 min avant','15 min avant','30 min avant','1 heure avant'],
    reminderVals: [0,5,10,15,30,60],
    noTasksToday: "Aucune tâche aujourd'hui\nAppuie sur + pour en ajouter",
    noTasksYet:   'Aucune tâche\nAppuie sur + pour commencer !',
    allDone: 'Tout terminé ! Journée parfaite ✨',
    streakDays: ' jours consécutifs',
    bestStreak: 'Meilleure série', totalDays: 'Jours complétés', monthRate: 'Taux du mois',
    greeting: 'Bonjour, Wenwen !',
    badges: 'Badges',
    installHint: "📲 Ajoute à l'écran d'accueil pour les rappels",
    pomodoroTitle: 'Minuteur Pomodoro',
    pomodoroWork: 'Concentration',
    pomodoroBreak: 'Pause',
    pomodoroLongBreak: 'Grande pause',
    pomodoroStart: 'Démarrer',
    pomodoroPause: 'Pause',
    pomodoroReset: 'Réinitialiser',
    pomodoroSkip: 'Passer',
    pomodoroCount: 'Pomodoros du jour',
    workMin: 'Focus 25 min',
    breakMin: 'Pause 5 min',
    longBreakMin: 'Grande pause 15 min',
    pomoDone: '🍅 Pomodoro terminé !',
    breakDone: 'Pause terminée, courage !',
    months: ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'],
    weekdays: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
    badgeList: [
      { key:'first',  icon:'🌱', name:'Premier Pas',      desc:'Premier jour complété' },
      { key:'week',   icon:'🔥', name:'Guerrière',         desc:'7 jours consécutifs' },
      { key:'month',  icon:'👑', name:'Reine du Mois',     desc:'30 jours consécutifs' },
      { key:'perfect',icon:'💎', name:'Perfectionniste',   desc:'100% en une journée' },
      { key:'bird',   icon:'🌅', name:'Lève-tôt',          desc:'Tâche avant 8h' },
      { key:'pomo10', icon:'🍅', name:'Pro Pomodoro',      desc:'10 pomodoros cumulés' },
    ],
  },
};

// ============================================================
// State
// ============================================================

const STATE = {
  view: 'today',
  lang: 'zh',
  tasks: [],
  completions: {},  // { 'YYYY-MM-DD': ['taskId', ...] }
  calMonth: null,   // { year, month }
  editTaskId: null,
  selectedColor: 'mint',
  selectedEmoji: '🌟',
  pomodoroCount: 0, // total today
  pomodoroDate: null,
};

// Pomodoro state (separate, not persisted between reloads)
const POMO = {
  mode: 'work',       // work | break | longBreak
  secondsLeft: 25 * 60,
  running: false,
  interval: null,
  round: 0,           // how many work rounds done this session
};

const COLORS = {
  mint:     '#7DCFAB',
  pink:     '#F4A7B9',
  lavender: '#C4B5FD',
  sky:      '#7DD3FC',
  peach:    '#FCA87D',
};

const EMOJIS = ['🌟','⭐','✨','🌈','🌸','🌺','🌻','🌙','☀️','🎯','📚','🏃','🧘','💪','🎨','🎵','🎮','🍎','🥗','💧','🛁','✍️','🧠','❤️','🦋','🌿','🍀','🌙','🎀','👑','💎','🌼','🐱','🦊','🐰','🌊','⚡','🎸','📷','🏊','🚴','🧩','🎭','🍵','🌙','🔮','🪴','🎋'];

// ============================================================
// Storage
// ============================================================

function load() {
  try {
    const raw = localStorage.getItem('wenwen-habits');
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.tasks)       STATE.tasks = data.tasks;
    if (data.completions) STATE.completions = data.completions;
    if (data.lang)        STATE.lang = data.lang;
    if (data.pomodoroCount !== undefined) {
      // reset if different day
      const today = todayStr();
      if (data.pomodoroDate === today) {
        STATE.pomodoroCount = data.pomodoroCount;
        STATE.pomodoroDate  = today;
      }
    }
  } catch(e) { console.warn('load error', e); }
}

function save() {
  try {
    localStorage.setItem('wenwen-habits', JSON.stringify({
      tasks:        STATE.tasks,
      completions:  STATE.completions,
      lang:         STATE.lang,
      pomodoroCount: STATE.pomodoroCount,
      pomodoroDate:  STATE.pomodoroDate,
    }));
  } catch(e) { console.warn('save error', e); }
}

// ============================================================
// Date helpers
// ============================================================

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}

function pad(n) { return String(n).padStart(2,'0'); }

function dateStr(y, m, d) { return `${y}-${pad(m)}-${pad(d)}`; }

function todayLabel(lang) {
  const d = new Date();
  const wds = LANG[lang].weekdays;
  const ms  = LANG[lang].months;
  return `${wds[d.getDay()]}，${ms[d.getMonth()]} ${d.getDate()}`;
}

function t(key) { return LANG[STATE.lang][key] || key; }

// ============================================================
// Task helpers
// ============================================================

function uuid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function tasksForDate(dateStr) {
  return STATE.tasks.filter(task => {
    if (!task.active) return false;
    return task.startDate <= dateStr;
  });
}

function isDone(taskId, dateStr) {
  return (STATE.completions[dateStr] || []).includes(taskId);
}

function toggleDone(taskId, date) {
  if (!STATE.completions[date]) STATE.completions[date] = [];
  const idx = STATE.completions[date].indexOf(taskId);
  if (idx >= 0) {
    STATE.completions[date].splice(idx, 1);
  } else {
    STATE.completions[date].push(taskId);
    checkBadges();
  }
  save();
}

function completionRate(date) {
  const tasks = tasksForDate(date);
  if (!tasks.length) return null;
  const done = tasks.filter(t => isDone(t.id, date)).length;
  return done / tasks.length;
}

function currentStreak() {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const ds = dateStr(d.getFullYear(), d.getMonth()+1, d.getDate());
    const rate = completionRate(ds);
    if (rate === null || rate < 0.8) break;
    streak++;
  }
  return streak;
}

function bestStreak() {
  const dates = Object.keys(STATE.completions).sort();
  if (!dates.length) return 0;
  let best = 0, cur = 0;
  let prev = null;
  for (const ds of dates) {
    const rate = completionRate(ds);
    if (rate !== null && rate >= 0.8) {
      if (prev) {
        const gap = (new Date(ds) - new Date(prev)) / 86400000;
        cur = gap === 1 ? cur + 1 : 1;
      } else {
        cur = 1;
      }
      best = Math.max(best, cur);
      prev = ds;
    } else {
      cur = 0; prev = null;
    }
  }
  return best;
}

function totalDaysDone() {
  return Object.keys(STATE.completions).filter(ds => {
    const r = completionRate(ds);
    return r !== null && r >= 0.8;
  }).length;
}

function monthRate() {
  const d = new Date();
  const y = d.getFullYear(), m = d.getMonth() + 1;
  let counted = 0, done = 0;
  const daysInMonth = new Date(y, m, 0).getDate();
  const today = d.getDate();
  for (let day = 1; day <= Math.min(today, daysInMonth); day++) {
    const ds = dateStr(y, m, day);
    const r = completionRate(ds);
    if (r !== null) { counted++; if (r >= 0.8) done++; }
  }
  return counted ? Math.round(done / counted * 100) : 0;
}

// ============================================================
// Badges
// ============================================================

function checkBadges() {
  const earned = getEarnedBadges();
  // check first
  const allDates = Object.keys(STATE.completions);
  if (allDates.some(ds => (STATE.completions[ds]||[]).length > 0)) earned.first = true;
  if (currentStreak() >= 7)  earned.week  = true;
  if (currentStreak() >= 30) earned.month = true;
  // perfect: any day 100%
  const today = todayStr();
  const tasks = tasksForDate(today);
  if (tasks.length && tasks.every(t => isDone(t.id, today))) earned.perfect = true;
  // bird: task with time <= 08:00 done today
  const earlyTask = STATE.tasks.find(t => t.scheduledTime && t.scheduledTime <= '08:00');
  if (earlyTask && isDone(earlyTask.id, today)) earned.bird = true;
  // pomo10
  if (STATE.pomodoroCount >= 10) earned.pomo10 = true;
  saveEarnedBadges(earned);
}

function getEarnedBadges() {
  try { return JSON.parse(localStorage.getItem('wenwen-badges') || '{}'); } catch(e) { return {}; }
}
function saveEarnedBadges(obj) {
  localStorage.setItem('wenwen-badges', JSON.stringify(obj));
}

// ============================================================
// Notifications
// ============================================================

async function requestNotifPermission() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'default') {
    await Notification.requestPermission();
  }
}

function scheduleReminders() {
  if (!('serviceWorker' in navigator) || Notification.permission !== 'granted') return;
  const today = todayStr();
  STATE.tasks.forEach(task => {
    if (!task.active || task.startDate > today || !task.reminderMinutes || !task.scheduledTime) return;
    const [hh, mm] = task.scheduledTime.split(':').map(Number);
    const remind = new Date();
    remind.setHours(hh, mm - task.reminderMinutes, 0, 0);
    const now = new Date();
    const delay = remind - now;
    if (delay > 0 && delay < 86400000) {
      setTimeout(() => {
        if (Notification.permission === 'granted') {
          new Notification(`${task.emoji} ${task.name}`, {
            body: task.scheduledTime + ' — ' + LANG[STATE.lang].pomodoroWork,
            icon: 'icon.svg',
          });
        }
      }, delay);
    }
  });
}

// ============================================================
// Pomodoro
// ============================================================

const POMO_DURATIONS = { work: 25*60, break: 5*60, longBreak: 15*60 };

function pomoModeLabel() {
  if (POMO.mode === 'work')      return t('pomodoroWork');
  if (POMO.mode === 'break')     return t('pomodoroBreak');
  if (POMO.mode === 'longBreak') return t('pomodoroLongBreak');
}

function pomoFormat(s) {
  return `${pad(Math.floor(s/60))}:${pad(s%60)}`;
}

function pomoStart() {
  if (POMO.running) return;
  POMO.running = true;
  POMO.interval = setInterval(() => {
    POMO.secondsLeft--;
    updatePomoDisplay();
    if (POMO.secondsLeft <= 0) {
      clearInterval(POMO.interval);
      POMO.running = false;
      pomoComplete();
    }
  }, 1000);
  updatePomoControls();
}

function pomoPause() {
  clearInterval(POMO.interval);
  POMO.running = false;
  updatePomoControls();
}

function pomoReset() {
  clearInterval(POMO.interval);
  POMO.running = false;
  POMO.secondsLeft = POMO_DURATIONS[POMO.mode];
  updatePomoDisplay();
  updatePomoControls();
}

function pomoSkip() {
  clearInterval(POMO.interval);
  POMO.running = false;
  pomoAdvanceMode();
  POMO.secondsLeft = POMO_DURATIONS[POMO.mode];
  updatePomoDisplay();
  updatePomoControls();
  updatePomoModeLabel();
}

function pomoAdvanceMode() {
  if (POMO.mode === 'work') {
    POMO.round++;
    POMO.mode = (POMO.round % 4 === 0) ? 'longBreak' : 'break';
  } else {
    POMO.mode = 'work';
  }
}

function pomoComplete() {
  if (POMO.mode === 'work') {
    STATE.pomodoroCount++;
    if (!STATE.pomodoroDate || STATE.pomodoroDate !== todayStr()) {
      STATE.pomodoroDate = todayStr();
    }
    save();
    checkBadges();
    showToast(t('pomoDone'));
    if (Notification.permission === 'granted') {
      new Notification(t('pomoDone'), { icon: 'icon.svg' });
    }
    playBeep();
  } else {
    showToast(t('breakDone'));
    playBeep();
  }
  pomoAdvanceMode();
  POMO.secondsLeft = POMO_DURATIONS[POMO.mode];
  updatePomoDisplay();
  updatePomoModeLabel();
  updatePomoControls();
  updatePomoCount();
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.8);
  } catch(e) {}
}

function updatePomoDisplay() {
  const el = document.getElementById('pomo-timer');
  if (el) el.textContent = pomoFormat(POMO.secondsLeft);
  // ring progress
  const ring = document.getElementById('pomo-ring');
  if (ring) {
    const total = POMO_DURATIONS[POMO.mode];
    const progress = 1 - (POMO.secondsLeft / total);
    const circumference = 2 * Math.PI * 54;
    ring.style.strokeDashoffset = circumference * (1 - progress);
  }
}

function updatePomoControls() {
  const startBtn = document.getElementById('pomo-start');
  const pauseBtn = document.getElementById('pomo-pause');
  if (!startBtn || !pauseBtn) return;
  if (POMO.running) {
    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
  } else {
    startBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
  }
}

function updatePomoModeLabel() {
  const el = document.getElementById('pomo-mode-label');
  if (el) el.textContent = pomoModeLabel();
}

function updatePomoCount() {
  const el = document.getElementById('pomo-count-num');
  if (el) el.textContent = STATE.pomodoroCount;
}

// ============================================================
// Render: Today View
// ============================================================

function renderToday() {
  const today = todayStr();
  const tasks = tasksForDate(today);
  const doneIds = STATE.completions[today] || [];
  const doneCount = tasks.filter(t => isDone(t.id, today)).length;
  const total = tasks.length;
  const pct = total ? Math.round(doneCount / total * 100) : 0;
  const streak = currentStreak();

  const circumference = 2 * Math.PI * 35; // r=35
  const offset = circumference * (1 - pct / 100);

  const allDone = total > 0 && doneCount === total;

  return `
    <div class="view-header">
      <div class="lang-row">
        <h1>${t('appName')}</h1>
        <div class="lang-switcher">
          ${['zh','en','fr'].map(l =>
            `<button class="lang-btn ${STATE.lang===l?'active':''}" onclick="setLang('${l}')">${l.toUpperCase()}</button>`
          ).join('')}
        </div>
      </div>
      <div class="subtitle">${todayLabel(STATE.lang)}</div>
    </div>

    <div class="today-hero">
      <div class="progress-ring-wrap">
        <svg class="progress-ring" viewBox="0 0 80 80">
          <circle class="ring-bg"   cx="40" cy="40" r="35"/>
          <circle class="ring-fill" cx="40" cy="40" r="35"
            style="stroke-dasharray:${circumference};stroke-dashoffset:${offset};"/>
        </svg>
        <div class="progress-label">${pct}<span>%</span></div>
      </div>
      <div class="hero-info">
        <div class="hero-greeting">${t('greeting')}</div>
        <div class="hero-date">${todayLabel(STATE.lang)}</div>
        <div class="streak-badge">🔥 ${streak} ${t('streakDays')}</div>
      </div>
    </div>

    ${!window.matchMedia('(display-mode: standalone)').matches ? `
      <div class="install-banner">
        <span class="ib-icon">📲</span>
        <span>${t('installHint')}</span>
      </div>` : ''}

    ${allDone ? `<div class="all-done-banner">${t('allDone')}</div>` : ''}

    ${total === 0 ? `
      <div class="empty-state">
        <div class="empty-icon">🌿</div>
        <p>${t('noTasksToday')}</p>
      </div>` : `
      <div class="section-title">${t('today')}</div>
      <div class="task-list">
        ${tasks.sort((a,b) => a.scheduledTime.localeCompare(b.scheduledTime)).map(task => {
          const done = isDone(task.id, today);
          return `
            <div class="task-item ${done?'done':''}" onclick="handleTaskTap('${task.id}','${today}')">
              <div class="color-bar color-bar-${task.color}"></div>
              <div class="task-check task-check-${task.color} ${done?'done':''}">${done?'✓':''}</div>
              <div class="task-emoji">${task.emoji}</div>
              <div class="task-info">
                <div class="task-name">${escHtml(task.name)}</div>
                <div class="task-time">${task.scheduledTime}</div>
              </div>
            </div>`;
        }).join('')}
      </div>`}

    ${renderPomodoro()}

    <div style="height:24px"></div>
    <button class="fab" onclick="openAddTask()">+</button>
  `;
}

// ============================================================
// Render: Pomodoro
// ============================================================

function renderPomodoro() {
  const circumference = 2 * Math.PI * 54;
  const progress = 1 - (POMO.secondsLeft / POMO_DURATIONS[POMO.mode]);
  const offset = circumference * (1 - progress);

  return `
    <div style="margin: 20px 16px 0;">
      <div class="section-title">${t('pomodoroTitle')}</div>
      <div class="pomo-card">
        <div class="pomo-ring-wrap">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--mint-100)" stroke-width="8"/>
            <circle id="pomo-ring" cx="60" cy="60" r="54" fill="none"
              stroke="var(--mint-300)" stroke-width="8" stroke-linecap="round"
              transform="rotate(-90 60 60)"
              style="stroke-dasharray:${circumference};stroke-dashoffset:${offset};transition:stroke-dashoffset 1s linear;"/>
          </svg>
          <div class="pomo-center">
            <div id="pomo-timer" class="pomo-timer">${pomoFormat(POMO.secondsLeft)}</div>
            <div id="pomo-mode-label" class="pomo-mode">${pomoModeLabel()}</div>
          </div>
        </div>
        <div class="pomo-controls">
          <button class="pomo-btn-sm" onclick="pomoReset()">↺</button>
          <button id="pomo-start" class="pomo-btn-main ${POMO.running?'hidden':''}" onclick="pomoStart()">▶</button>
          <button id="pomo-pause" class="pomo-btn-main ${!POMO.running?'hidden':''}" onclick="pomoPause()">⏸</button>
          <button class="pomo-btn-sm" onclick="pomoSkip()">⏭</button>
        </div>
        <div class="pomo-count">
          🍅 ${t('pomodoroCount')}: <strong id="pomo-count-num">${STATE.pomodoroCount}</strong>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// Render: Tasks Management View
// ============================================================

function renderTasks() {
  const tasks = STATE.tasks.filter(t => t.active);
  return `
    <div class="view-header">
      <h1>${t('tasks')}</h1>
    </div>
    ${tasks.length === 0 ? `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <p>${t('noTasksYet')}</p>
      </div>` :
      tasks.map(task => `
        <div class="mgmt-task-item" onclick="openEditTask('${task.id}')">
          <span class="mgmt-task-emoji">${task.emoji}</span>
          <div class="mgmt-task-info">
            <div class="mgmt-task-name">${escHtml(task.name)}</div>
            <div class="mgmt-task-meta">${task.scheduledTime} · ${task.startDate}</div>
          </div>
          <div class="color-bar color-bar-${task.color}" style="height:32px;width:4px;border-radius:99px;"></div>
          <span class="mgmt-task-arrow">›</span>
        </div>`).join('')
    }
    <button class="fab" onclick="openAddTask()">+</button>
  `;
}

// ============================================================
// Render: Calendar View
// ============================================================

function renderCalendar() {
  if (!STATE.calMonth) {
    const d = new Date();
    STATE.calMonth = { year: d.getFullYear(), month: d.getMonth() + 1 };
  }
  const { year, month } = STATE.calMonth;
  const ms = LANG[STATE.lang].months;
  const wds = LANG[STATE.lang].weekdays;
  const today = todayStr();

  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  let cells = '';
  for (let i = 0; i < firstDay; i++) cells += `<div class="cal-day empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = dateStr(year, month, d);
    const r  = completionRate(ds);
    let cls = '';
    if (r === null)    cls = '';
    else if (r >= 0.8) cls = 'full';
    else if (r > 0)    cls = 'partial';
    else               cls = 'zero';
    const isToday = ds === today ? 'today' : '';
    cells += `<div class="cal-day ${cls} ${isToday}" onclick="showDayDetail('${ds}')">${d}</div>`;
  }

  return `
    <div class="view-header">
      <h1>${t('calendar')}</h1>
    </div>
    <div class="calendar-nav">
      <button class="cal-nav-btn" onclick="calPrev()">‹</button>
      <span class="cal-month-label">${ms[month-1]} ${year}</span>
      <button class="cal-nav-btn" onclick="calNext()">›</button>
    </div>
    <div class="cal-weekdays">
      ${wds.map(w => `<div class="cal-wd">${w}</div>`).join('')}
    </div>
    <div class="cal-grid">${cells}</div>
    <div class="cal-legend">
      <div class="legend-item"><div class="legend-dot" style="background:var(--mint-200)"></div> ≥80%</div>
      <div class="legend-item"><div class="legend-dot" style="background:var(--pink-100)"></div> 部分</div>
      <div class="legend-item"><div class="legend-dot" style="background:var(--surface-2)"></div> 0%</div>
    </div>
  `;
}

function calPrev() {
  let { year, month } = STATE.calMonth;
  month--; if (month < 1) { month = 12; year--; }
  STATE.calMonth = { year, month };
  renderView();
}
function calNext() {
  let { year, month } = STATE.calMonth;
  month++; if (month > 12) { month = 1; year++; }
  STATE.calMonth = { year, month };
  renderView();
}

function showDayDetail(ds) {
  const tasks = tasksForDate(ds);
  if (!tasks.length) return;
  const doneIds = STATE.completions[ds] || [];
  const lines = tasks.map(t =>
    `${isDone(t.id, ds) ? '✅' : '⬜'} ${t.emoji} ${t.name}`
  ).join('\n');
  const d = new Date(ds + 'T00:00:00');
  alert(`${ds}\n\n${lines}`);
}

// ============================================================
// Render: Stats View
// ============================================================

function renderStats() {
  const streak = currentStreak();
  const best   = bestStreak();
  const total  = totalDaysDone();
  const mr     = monthRate();
  const earned = getEarnedBadges();
  const badges = LANG[STATE.lang].badgeList;

  return `
    <div class="view-header">
      <h1>${t('stats')}</h1>
    </div>

    <div class="streak-card">
      <div class="streak-fire">🔥</div>
      <div>
        <div class="streak-num">${streak}</div>
        <div class="streak-text">${t('streakDays')}</div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-num">${best}</div>
        <div class="stat-label">${t('bestStreak')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${total}</div>
        <div class="stat-label">${t('totalDays')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${mr}%</div>
        <div class="stat-label">${t('monthRate')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">🍅 ${STATE.pomodoroCount}</div>
        <div class="stat-label">${t('pomodoroCount')}</div>
      </div>
    </div>

    <div class="badges-section">
      <h3>${t('badges')}</h3>
      <div class="badges-grid">
        ${badges.map(b => `
          <div class="badge-item ${earned[b.key]?'':'locked'}">
            <div class="badge-icon">${b.icon}</div>
            <div class="badge-name">${b.name}</div>
            <div class="badge-desc">${b.desc}</div>
          </div>`).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// Render dispatcher
// ============================================================

function renderView() {
  const container = document.getElementById('view-container');
  let html = '';
  if (STATE.view === 'today')    html = renderToday();
  if (STATE.view === 'tasks')    html = renderTasks();
  if (STATE.view === 'calendar') html = renderCalendar();
  if (STATE.view === 'stats')    html = renderStats();
  container.innerHTML = html;
  updateNavActive();
  if (STATE.view === 'today') {
    // keep pomo ring in sync after re-render
    updatePomoDisplay();
  }
}

function updateNavActive() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === STATE.view);
  });
}

function setView(view) {
  STATE.view = view;
  renderView();
}

function setLang(lang) {
  STATE.lang = lang;
  save();
  renderView();
}

// ============================================================
// Modal: Add / Edit Task
// ============================================================

function openAddTask() {
  STATE.editTaskId = null;
  STATE.selectedColor = 'mint';
  STATE.selectedEmoji = '🌟';
  document.getElementById('modal-title').textContent = t('addTask');
  document.getElementById('task-name').value = '';
  document.getElementById('task-start-date').value = todayStr();
  document.getElementById('task-daily-time').value = '08:00';
  document.getElementById('task-reminder').selectedIndex = 0;
  document.getElementById('btn-delete-task').classList.add('hidden');
  setModalColor('mint');
  setModalEmoji('🌟');
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.getElementById('task-name').focus();
  updateReminderOptions();
}

function openEditTask(taskId) {
  const task = STATE.tasks.find(t => t.id === taskId);
  if (!task) return;
  STATE.editTaskId = taskId;
  STATE.selectedColor = task.color;
  STATE.selectedEmoji = task.emoji;
  document.getElementById('modal-title').textContent = t('editTask');
  document.getElementById('task-name').value = task.name;
  document.getElementById('task-start-date').value = task.startDate;
  document.getElementById('task-daily-time').value = task.scheduledTime;
  document.getElementById('btn-delete-task').classList.remove('hidden');
  setModalColor(task.color);
  setModalEmoji(task.emoji);
  updateReminderOptions();
  // set reminder select
  const reminderVals = LANG[STATE.lang].reminderVals;
  const idx = reminderVals.indexOf(task.reminderMinutes || 0);
  document.getElementById('task-reminder').selectedIndex = idx >= 0 ? idx : 0;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function updateReminderOptions() {
  const sel = document.getElementById('task-reminder');
  const opts = LANG[STATE.lang].reminderOpts;
  const vals = LANG[STATE.lang].reminderVals;
  sel.innerHTML = opts.map((o, i) => `<option value="${vals[i]}">${o}</option>`).join('');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  STATE.editTaskId = null;
}

function saveTask() {
  const name = document.getElementById('task-name').value.trim();
  if (!name) { document.getElementById('task-name').focus(); return; }
  const startDate   = document.getElementById('task-start-date').value || todayStr();
  const scheduledTime = document.getElementById('task-daily-time').value || '08:00';
  const reminderMinutes = parseInt(document.getElementById('task-reminder').value) || 0;

  if (STATE.editTaskId) {
    const idx = STATE.tasks.findIndex(t => t.id === STATE.editTaskId);
    if (idx >= 0) {
      STATE.tasks[idx] = { ...STATE.tasks[idx], name, startDate, scheduledTime, reminderMinutes,
        color: STATE.selectedColor, emoji: STATE.selectedEmoji };
    }
  } else {
    STATE.tasks.push({
      id: uuid(), name, startDate, scheduledTime, reminderMinutes,
      color: STATE.selectedColor, emoji: STATE.selectedEmoji, active: true,
    });
  }
  save();
  closeModal();
  renderView();
  scheduleReminders();
  showToast('✅ ' + name);
}

function deleteTask() {
  if (!STATE.editTaskId) return;
  if (!confirm(t('delete') + '?')) return;
  const idx = STATE.tasks.findIndex(t => t.id === STATE.editTaskId);
  if (idx >= 0) STATE.tasks[idx].active = false;
  save();
  closeModal();
  renderView();
}

function setModalColor(color) {
  STATE.selectedColor = color;
  document.querySelectorAll('.color-dot').forEach(el => {
    el.classList.toggle('active', el.dataset.color === color);
  });
}

function setModalEmoji(emoji) {
  STATE.selectedEmoji = emoji;
  document.getElementById('emoji-btn').textContent = emoji;
}

// ============================================================
// Emoji Picker
// ============================================================

function openEmojiPicker() {
  const picker = document.getElementById('emoji-picker');
  const grid   = document.getElementById('emoji-grid');
  grid.innerHTML = EMOJIS.map(e =>
    `<button class="emoji-option" onclick="pickEmoji('${e}')">${e}</button>`
  ).join('');
  picker.classList.remove('hidden');
}

function pickEmoji(emoji) {
  setModalEmoji(emoji);
  document.getElementById('emoji-picker').classList.add('hidden');
}

// ============================================================
// Today task tap
// ============================================================

function handleTaskTap(taskId, date) {
  toggleDone(taskId, date);
  renderView();
}

// ============================================================
// Toast
// ============================================================

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.add('hidden'), 2200);
}

// ============================================================
// Utils
// ============================================================

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ============================================================
// Event wiring
// ============================================================

function wireEvents() {
  // Nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => setView(btn.dataset.view));
  });
  // Modal
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('btn-cancel').addEventListener('click', closeModal);
  document.getElementById('btn-save').addEventListener('click', saveTask);
  document.getElementById('btn-delete-task').addEventListener('click', deleteTask);
  // Overlay click-outside
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  // Color picker (delegated)
  document.getElementById('color-picker').addEventListener('click', e => {
    const dot = e.target.closest('.color-dot');
    if (dot) setModalColor(dot.dataset.color);
  });
  // Emoji button
  document.getElementById('emoji-btn').addEventListener('click', openEmojiPicker);
  // Close emoji picker when clicking outside
  document.addEventListener('click', e => {
    const picker = document.getElementById('emoji-picker');
    if (!picker.classList.contains('hidden') &&
        !picker.contains(e.target) &&
        e.target.id !== 'emoji-btn') {
      picker.classList.add('hidden');
    }
  });
}

// ============================================================
// Service Worker registration
// ============================================================

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(e => console.warn('SW:', e));
  }
}

// ============================================================
// Init
// ============================================================

function init() {
  try {
    load();
    const d = new Date();
    STATE.calMonth = { year: d.getFullYear(), month: d.getMonth() + 1 };
    if (STATE.pomodoroDate !== todayStr()) {
      STATE.pomodoroCount = 0;
      STATE.pomodoroDate  = todayStr();
    }
    renderView();
    wireEvents();
    registerSW();
    requestNotifPermission().then(scheduleReminders);
  } catch(e) {
    document.getElementById('view-container').innerHTML =
      `<div style="padding:24px;color:#c00;font-size:13px;white-space:pre-wrap;font-family:monospace;">`
      + `⚠️ 錯誤：${e.message}\n\n${e.stack}</div>`;
  }
}

document.addEventListener('DOMContentLoaded', init);
