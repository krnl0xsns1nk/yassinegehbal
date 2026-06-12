const lessons = [
  { id: 1, title: 'الحرب العالمية الأولى ما بين 1914-1918', description: 'دراسة أسباب الحرب العالمية الأولى وأطوارها الكبرى ونتائجها على المستوى الدولي.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/01-harb-alamiya-oula.pdf' },
  { id: 2, title: 'الحرب العالمية الثانية', description: 'تحليل أسباب الحرب العالمية الثانية ومجرياتها وتداعياتها على النظام العالمي الجديد.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/02-harb-alamiya-thania.pdf' },
  { id: 3, title: 'الأزمة الاقتصادية 1929: الأسباب، المظاهر، النتائج', description: 'دراسة الأزمة الاقتصادية لسنة 1929 من خلال أسبابها ومظاهرها وانعكاساتها على الاقتصاد العالمي.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/03-azma-iqtisadiya-1929.pdf' },
  { id: 4, title: 'الإمبريالية وليدة الرأسمالية', description: 'تتبع العلاقة بين تطور الرأسمالية وظهور الإمبريالية كظاهرة استعمارية عالمية.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/04-imbiryaliya-walida-rasmaliya.pdf' },
  { id: 5, title: 'ازدهار الرأسمالية الأوربية خلال القرن 19', description: 'دراسة عوامل ومظاهر ازدهار النظام الرأسمالي في أوروبا خلال القرن التاسع عشر.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/05-izdihar-rasmaliya-ouroubiya.pdf' },
  { id: 6, title: 'انهيار الإمبراطورية العثمانية والتدخل الاستعماري في المشرق العربي', description: 'تحليل عوامل انهيار الإمبراطورية العثمانية وأثره على تزايد التدخل الاستعماري في المشرق العربي.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/06-inhiyar-imbraturiya-othmaniya.pdf' },
  { id: 7, title: 'ظاهرة الأنظمة الديكتاتورية: دراسة حالة النازية نموذجاً', description: 'دراسة خصائص الأنظمة الديكتاتورية في أوروبا باعتماد النازية كنموذج توضيحي.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/07-anzima-diktatouriya-naziya.pdf' },
  { id: 8, title: 'الضغط الاستعماري على المغرب', description: 'دراسة الأشكال المختلفة للضغط الاستعماري الأوروبي على المغرب قبل فرض الحماية.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/08-dagt-isti3mari-maghrib.pdf' },
  { id: 9, title: 'المغرب: الكفاح من أجل الاستقلال وإتمام الوحدة الترابية', description: 'تتبع مراحل الكفاح الوطني المغربي من أجل الاستقلال واستكمال الوحدة الترابية للبلاد.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/09-maghrib-kifah-istiqlal.pdf' },
  { id: 10, title: 'المراحل الكبرى لبناء الدولة المغربية الحديثة', description: 'دراسة أهم المحطات التاريخية التي ساهمت في بناء مؤسسات الدولة المغربية الحديثة.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/10-marahil-binaa-dawla-maghribiya.pdf' },
  { id: 11, title: 'الحفاظ على التراث المغربي وتطويره', description: 'أهمية الحفاظ على التراث الثقافي والحضاري المغربي وسبل تنميته والمحافظة عليه.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/11-hifad-3ala-turath-maghribi.pdf' },
  { id: 12, title: 'تخليق الحياة العامة', description: 'دراسة مفهوم تخليق الحياة العامة وأهميته في بناء مجتمع تسوده قيم النزاهة والشفافية.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/12-takhliq-hayat-3amma.pdf' },
  { id: 13, title: 'المشاركة حق وواجب: ننتخب ممثلينا في مجلس المؤسسة', description: 'التعرف على أهمية المشاركة الديمقراطية من خلال عملية انتخاب ممثلي التلاميذ في مجالس المؤسسات التعليمية.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/13-mosharaka-haqq-wawajib.pdf' },
  { id: 14, title: 'كيف نعالج مشكلاً اجتماعياً انطلاقاً من أمثلة محلية', description: 'منهجية معالجة الظواهر والمشكلات الاجتماعية اعتماداً على أمثلة من الواقع المحلي.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/14-kayfa-nu3alij-mushkil-ijtima3i.pdf' },
  { id: 15, title: 'القضية الفلسطينية والصراع العربي الإسرائيلي', description: 'دراسة جذور القضية الفلسطينية وتطور الصراع العربي الإسرائيلي عبر مختلف المحطات التاريخية.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'hist', pdf: 'lessons/15-qadiya-falastiniya.pdf' },
  { id: 16, title: 'الاتحاد الأوربي: إمكانياته ومكانته الاقتصادية في العالم', description: 'دراسة الإمكانيات الطبيعية والبشرية للاتحاد الأوربي ومكانته في الاقتصاد العالمي.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/16-itihad-orobi-imkaniyat.pdf' },
  { id: 17, title: 'الاتحاد الأوربي بين الاندماج والمنافسة', description: 'تحليل مظاهر الاندماج الاقتصادي داخل الاتحاد الأوربي في ظل المنافسة الدولية المتزايدة.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/17-itihad-orobi-indimaj-monafassa.pdf' },
  { id: 18, title: 'الولايات المتحدة الأمريكية: قوة عالمية', description: 'دراسة العوامل الطبيعية والاقتصادية التي جعلت من الولايات المتحدة الأمريكية قوة عالمية كبرى.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/18-wilayat-mutahida-amrikiya.pdf' },
  { id: 19, title: 'اليابان: قوة تكنولوجية', description: 'دراسة عوامل تطور اليابان لتصبح من أبرز القوى التكنولوجية والاقتصادية في العالم.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/19-yaban-qowa-teknolojiya.pdf' },
  { id: 20, title: 'روسيا ورهانات التحول', description: 'دراسة التحولات الاقتصادية والجيوسياسية التي عرفتها روسيا والرهانات المستقبلية المرتبطة بها.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/20-roussia-rihanat-tahawol.pdf' },
  { id: 21, title: 'مصر: نموذج تنموي عربي', description: 'دراسة التجربة التنموية المصرية كنموذج لدولة عربية تسعى لتحقيق التنمية الاقتصادية والاجتماعية.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/21-misr-namouthaj-tanmawi.pdf' },
  { id: 22, title: 'نيجيريا بين الغنى الطبيعي والضعف التنموي', description: 'دراسة التناقض بين الموارد الطبيعية الهائلة في نيجيريا وضعف مستوى التنمية فيها.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/22-nijirya-ghina-ta3if-tanmawi.pdf' },
  { id: 23, title: 'المغرب العربي: عناصر الوحدة والتنوع', description: 'دراسة عناصر الوحدة الجغرافية والتاريخية لبلدان المغرب العربي إلى جانب أوجه التنوع بينها.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/23-maghrib-arabi-wihda-tanawo3.pdf' },
  { id: 24, title: 'المغرب العربي بين التكامل والتحديات', description: 'دراسة فرص التكامل الاقتصادي بين دول المغرب العربي والتحديات التي تواجه هذا المسار.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/24-maghrib-arabi-takamul-tahadiyat.pdf' },
  { id: 25, title: 'اتحاد المغرب العربي: خيار استراتيجي للتكتل الإقليمي', description: 'دراسة أهمية اتحاد المغرب العربي كخيار استراتيجي لتعزيز التكتل الإقليمي بين دول المنطقة.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/25-itihad-maghrib-arabi-istratiji.pdf' },
  { id: 26, title: 'معيقات التكتلات الجهوية: مقارنة بين الاتحاد الأوربي والمغرب العربي من خلال وثائق', description: 'دراسة مقارنة بالوثائق بين معيقات التكتل الجهوي في الاتحاد الأوربي ومعيقاته في المغرب العربي.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/26-mu3iqat-takatulat-jihawiya.pdf' },
  { id: 27, title: 'الحفاظ على الموارد الطبيعية', description: 'دراسة أهمية الموارد الطبيعية وسبل ترشيد استغلالها والحفاظ عليها لضمان التنمية المستدامة.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/27-hifad-mawarid-tabi3iya.pdf' },
  { id: 28, title: 'التدرب على معالجة ظاهرة اقتصادية باعتماد النهج الجغرافي', description: 'منهجية دراسة الظواهر الاقتصادية والجغرافية باعتماد أدوات وخطوات النهج الجغرافي.', level: 'الثالثة إعدادي', levelTag: 'middle', category: 'geo', pdf: 'lessons/28-tadarrub-thahira-iqtisadiya.pdf' },
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
