# موقع مؤسسة البناء الأندلسي — SEO Static Site

موقع عربي RTL خفيف بدون إطار عمل أو تبعيات تشغيلية. مهيأ للنشر المجاني على GitHub Pages.

## ما تم تضمينه
- 11 صفحة فعلية للخدمات والمشاريع والتواصل.
- عنوان ووصف Meta منفصل لكل صفحة.
- Canonical وOpen Graph يتم حقنهما بعنوان النشر الحقيقي أثناء GitHub Actions.
- Schema.org من نوع `HomeAndConstructionBusiness` + `WebPage`.
- `robots.txt` و`sitemap.xml` يتم توليدهما عند النشر.
- روابط واتساب وإنستغرام والهاتف.
- تصميم Responsive وRTL بلا مكتبات JavaScript أو صور Stock.
- لا توجد تقييمات وهمية أو أرقام خبرة مختلقة أو ادعاءات نطاق عمل غير موثق.

## النشر
Workflow المرفق يستنتج تلقائياً رابط GitHub Pages من صاحب الحساب واسم المستودع، ثم يستبدل `__SITE_URL__` و`__BASE__` ويولد `sitemap.xml` قبل النشر.

عند شراء دومين مستقل لاحقاً، يفضل استخدامه كعنوان الموقع الأساسي قبل ربط Google Search Console وGoogle Business Profile.
