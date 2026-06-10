/* ============================================================
   LESSONS.JS — Lesson data, search, filter
   ============================================================ */

const lessons = [
  /* ---- Geography — Middle School ---- */
  {
    id: 1,
    title: 'تضاريس المغرب: السلاسل الجبلية والسهول',
    description: 'دراسة شاملة لأبرز الوحدات التضاريسية في المغرب من جبال الأطلس إلى السهول الأطلسية.',
    level: 'إعدادي',
    levelTag: 'middle',
    category: 'geo',
    pdf: 'lessons/sample-lesson.pdf',
  },
  {
    id: 2,
    title: 'المناخ في إفريقيا: التنوع والعوامل المؤثرة',
    description: 'استكشاف أنواع المناخات المختلفة في القارة الإفريقية وأثرها على الحياة البشرية.',
    level: 'إعدادي',
    levelTag: 'middle',
    category: 'geo',
    pdf: 'lessons/sample-lesson.pdf',
  },
  {
    id: 3,
    title: 'الديموغرافيا والتوزع السكاني في العالم',
    description: 'تحليل خرائط التوزع السكاني العالمي وفهم العوامل الجاذبة والطاردة للسكان.',
    level: 'إعدادي',
    levelTag: 'middle',
    category: 'geo',
    pdf: 'lessons/sample-lesson.pdf',
  },
  /* ---- Geography — High School ---- */
  {
    id: 4,
    title: 'التهيئة العمرانية والتخطيط الحضري',
    description: 'مفاهيم التخطيط الحضري وآليات تهيئة المدن وتطوير البنية التحتية الحضرية.',
    level: 'ثانوي',
    levelTag: 'high',
    category: 'geo',
    pdf: 'lessons/sample-lesson.pdf',
  },
  {
    id: 5,
    title: 'العولمة والتكتلات الاقتصادية الكبرى',
    description: 'دراسة أبرز التكتلات الاقتصادية (الاتحاد الأوروبي، نافتا، آسيان) وانعكاسها الجغرافي.',
    level: 'ثانوي',
    levelTag: 'high',
    category: 'geo',
    pdf: 'lessons/sample-lesson.pdf',
  },
  {
    id: 6,
    title: 'مشكلات البيئة والتنمية المستدامة',
    description: 'تحليل التحديات البيئية العالمية كالتغير المناخي وتآكل التنوع البيولوجي وسبل مواجهتها.',
    level: 'ثانوي',
    levelTag: 'high',
    category: 'geo',
    pdf: 'lessons/sample-lesson.pdf',
  },
  /* ---- History — Middle School ---- */
  {
    id: 7,
    title: 'الحضارات الشرقية القديمة: مصر وبلاد الرافدين',
    description: 'رحلة عبر الزمن إلى أقدم الحضارات الإنسانية وإسهاماتها في مسيرة التاريخ البشري.',
    level: 'إعدادي',
    levelTag: 'middle',
    category: 'hist',
    pdf: 'lessons/sample-lesson.pdf',
  },
  {
    id: 8,
    title: 'الفتوحات الإسلامية وامتداد الحضارة العربية',
    description: 'دراسة مراحل الفتوحات الإسلامية وأثرها الحضاري والثقافي على العالم القديم.',
    level: 'إعدادي',
    levelTag: 'middle',
    category: 'hist',
    pdf: 'lessons/sample-lesson.pdf',
  },
  {
    id: 9,
    title: 'المغرب في العصر الوسيط: الدولة المرابطية والموحدية',
    description: 'تتبع نشأة وازدهار الدولتين المرابطية والموحدية ودورهما في تاريخ المغرب والأندلس.',
    level: 'إعدادي',
    levelTag: 'middle',
    category: 'hist',
    pdf: 'lessons/sample-lesson.pdf',
  },
  /* ---- History — High School ---- */
  {
    id: 10,
    title: 'الحرب العالمية الثانية: الأسباب والتداعيات',
    description: 'تحليل معمق لأسباب الحرب العالمية الثانية ومساراتها الكبرى وتأثيرها على النظام الدولي.',
    level: 'ثانوي',
    levelTag: 'high',
    category: 'hist',
    pdf: 'lessons/sample-lesson.pdf',
  },
  {
    id: 11,
    title: 'الحركات الوطنية والاستقلال في العالم العربي',
    description: 'مسيرة نضال الحركات الوطنية العربية في مواجهة الاستعمار الأوروبي وتحقيق الاستقلال.',
    level: 'ثانوي',
    levelTag: 'high',
    category: 'hist',
    pdf: 'lessons/sample-lesson.pdf',
  },
  {
    id: 12,
    title: 'النظام الدولي الجديد بعد الحرب الباردة',
    description: 'فهم التحولات الجيوسياسية الكبرى التي أعادت رسم خريطة العلاقات الدولية بعد 1991.',
    level: 'ثانوي',
    levelTag: 'high',
    category: 'hist',
    pdf: 'lessons/sample-lesson.pdf',
  },
];

/* ---- Render a single card ---- */
function renderCard(lesson) {
  const catLabel = lesson.category === 'geo' ? 'جغرافيا' : 'تاريخ';
  const catClass = `lesson-card__cat--${lesson.category}`;

  return `
    <article class="lesson-card reveal" aria-label="${lesson.title}">
      <div>
        <span class="lesson-card__cat ${catClass}">${catLabel}</span>
      </div>
      <h3>${lesson.title}</h3>
      <p>${lesson.description}</p>
      <div class="lesson-card__foot">
        <span class="lesson-card__meta">
          <span>📚</span> ${lesson.level}
        </span>
        <a href="${lesson.pdf}" download class="btn btn--green" aria-label="تحميل درس ${lesson.title}">
          ⬇ تحميل
        </a>
      </div>
    </article>`;
}

/* ---- Render all cards into grid ---- */
function renderLessons(list) {
  const grid    = document.getElementById('lessons-grid');
  const noRes   = document.getElementById('no-results');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '';
    noRes?.classList.add('visible');
  } else {
    grid.innerHTML = list.map(renderCard).join('');
    noRes?.classList.remove('visible');
    // Trigger reveal for newly rendered cards
    requestAnimationFrame(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        if (!el.classList.contains('visible')) {
          el.classList.add('visible');
        }
      });
    });
  }
}

/* ---- Filter logic ---- */
let activeCategory = 'all';
let searchQuery    = '';

function filterLessons() {
  return lessons.filter(lesson => {
    const matchesCat = activeCategory === 'all' || lesson.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query ||
      lesson.title.includes(query) ||
      lesson.description.includes(query) ||
      lesson.level.includes(query);
    return matchesCat && matchesSearch;
  });
}

/* ---- Init ---- */
function initLessons() {
  renderLessons(lessons);

  /* Search */
  const searchInput = document.getElementById('lesson-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value;
      renderLessons(filterLessons());
    });
  }

  /* Filter tabs */
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeCategory = tab.dataset.cat;
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderLessons(filterLessons());
    });
  });
}

document.addEventListener('DOMContentLoaded', initLessons);
