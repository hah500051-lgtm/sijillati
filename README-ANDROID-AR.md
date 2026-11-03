# تطبيق سجلّي — مشروع Android

هذا مشروع React + Vite + Capacitor لتطبيق **سجلّي**، بمعرّف Android:
`com.sijillati.app`

## بناء ملف APK دون Android Studio على جهازك

أُضيف سير عمل GitHub Actions حتى يمكن بناء APK على خوادم GitHub:

1. أنشئ مستودعاً جديداً في GitHub.
2. ارفع **كل محتويات هذا المجلد** إلى المستودع، مع مجلد `.github`.
3. افتح تبويب **Actions** في المستودع.
4. اختر **Build Sijillati Android APK** ثم **Run workflow**.
5. انتظر انتهاء البناء. إذا نجح، افتح نتيجة التشغيل ونزّل الملف من قسم **Artifacts** باسم `sijillati-debug-apk`.
6. فك ضغط الملف الذي نزّلته، ثم ثبّت `app-debug.apk` على هاتف Android. قد يطلب الهاتف السماح بالتثبيت من هذا المصدر.

يمكن أيضاً تشغيل البناء تلقائياً عند رفع تحديث إلى الفرع `main` أو `master`.

## البناء محلياً

يتطلب Node.js 22 أو أحدث، وJava 21، وAndroid SDK:

```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

ينتج APK هنا:
`android/app/build/outputs/apk/debug/app-debug.apk`

## تنبيهات قبل الاستخدام الفعلي

- هذه نسخة **Debug** للاختبار والتثبيت اليدوي، وليست نسخة متجر موقّعة للنشر.
- يجب اختبار الوظائف على هاتف حقيقي قبل اعتماد التطبيق.
- تعتمد البيانات حالياً على `localStorage` داخل التطبيق. لا تحذف بيانات التطبيق أو تزل تثبيته قبل أخذ نسخة احتياطية.
- استيراد الطلاب والتصدير والطباعة قد تحتاج اختباراً إضافياً على Android WebView.
- سير العمل ينشئ مجلد Android أثناء البناء؛ لا حاجة لإرساله مسبقاً ضمن الملفات.
- إذا فشل البناء، افتح سجل GitHub Actions وانسخ رسالة الخطأ لإصلاحها.
