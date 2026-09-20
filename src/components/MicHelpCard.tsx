// Visible help card shown when the microphone is unavailable or blocked.
// Explains WHY and gives steps to fix it, in the user's native language.

export type MicBlockReason = 'insecure' | 'denied' | 'nodevice' | 'busy' | 'unsupported';

type Dict = Record<string, { title: string; body: string }>;

const MESSAGES: Record<MicBlockReason, Dict> = {
  denied: {
    es: { title: 'El micrófono está bloqueado', body: 'Pulsa el candado 🔒 en la barra de direcciones y permite el micrófono. En Windows: Configuración → Privacidad → Micrófono → activar acceso.' },
    en: { title: 'Microphone is blocked', body: 'Click the lock 🔒 in the address bar and allow the microphone. On Windows: Settings → Privacy → Microphone → turn on access.' },
    fr: { title: 'Le micro est bloqué', body: 'Clique sur le cadenas 🔒 dans la barre d’adresse et autorise le micro. Sous Windows : Paramètres → Confidentialité → Microphone → activer l’accès.' },
    pt: { title: 'O microfone está bloqueado', body: 'Clique no cadeado 🔒 na barra de endereço e permita o microfone. No Windows: Configurações → Privacidade → Microfone → ativar acesso.' },
    zh: { title: '麦克风被阻止', body: '点击地址栏中的锁 🔒 并允许使用麦克风。在 Windows 上：设置 → 隐私 → 麦克风 → 打开访问权限。' },
    jp: { title: 'マイクがブロックされています', body: 'アドレスバーの鍵 🔒 をクリックしてマイクを許可してください。Windows：設定 → プライバシー → マイク → アクセスをオン。' },
    ko: { title: '마이크가 차단되었어요', body: '주소창의 자물쇠 🔒를 눌러 마이크를 허용하세요. Windows: 설정 → 개인 정보 → 마이크 → 액세스 켜기.' },
    ru: { title: 'Микрофон заблокирован', body: 'Нажмите на замок 🔒 в адресной строке и разрешите микрофон. В Windows: Параметры → Конфиденциальность → Микрофон → включить доступ.' },
    ar: { title: 'الميكروفون محظور', body: 'انقر على القفل 🔒 في شريط العنوان واسمح بالميكروفون. في ويندوز: الإعدادات → الخصوصية → الميكروفون → تفعيل الوصول.' },
    hi: { title: 'माइक्रोफ़ोन ब्लॉक है', body: 'एड्रेस बार में लॉक 🔒 पर क्लिक करें और माइक्रोफ़ोन की अनुमति दें। Windows में: Settings → Privacy → Microphone → एक्सेस चालू करें।' },
    ro: { title: 'Microfonul este blocat', body: 'Apasă lacătul 🔒 din bara de adrese și permite microfonul. În Windows: Setări → Confidențialitate → Microfon → activează accesul.' },
  },
  nodevice: {
    es: { title: 'No se encontró micrófono', body: 'Conecta un micrófono o auriculares y revisa el dispositivo de entrada en Windows: Configuración → Sistema → Sonido.' },
    en: { title: 'No microphone found', body: 'Plug in a microphone or headset and check the input device in Windows: Settings → System → Sound.' },
    fr: { title: 'Aucun micro trouvé', body: 'Branche un micro ou un casque et vérifie le périphérique d’entrée dans Windows : Paramètres → Système → Son.' },
    pt: { title: 'Nenhum microfone encontrado', body: 'Conecte um microfone ou fone e verifique o dispositivo de entrada no Windows: Configurações → Sistema → Som.' },
    zh: { title: '找不到麦克风', body: '请连接麦克风或耳机，并在 Windows 中检查输入设备：设置 → 系统 → 声音。' },
    jp: { title: 'マイクが見つかりません', body: 'マイクやヘッドセットを接続し、Windows の入力デバイスを確認してください：設定 → システム → サウンド。' },
    ko: { title: '마이크를 찾을 수 없어요', body: '마이크나 헤드셋을 연결하고 Windows 입력 장치를 확인하세요: 설정 → 시스템 → 사운드.' },
    ru: { title: 'Микрофон не найден', body: 'Подключите микрофон или наушники и проверьте устройство ввода в Windows: Параметры → Система → Звук.' },
    ar: { title: 'لم يتم العثور على ميكروفون', body: 'وصّل ميكروفونًا أو سماعة وتحقق من جهاز الإدخال في ويندوز: الإعدادات → النظام → الصوت.' },
    hi: { title: 'कोई माइक्रोफ़ोन नहीं मिला', body: 'माइक्रोफ़ोन या हेडसेट कनेक्ट करें और Windows में इनपुट डिवाइस जांचें: Settings → System → Sound.' },
    ro: { title: 'Nu s-a găsit microfon', body: 'Conectează un microfon sau căști și verifică dispozitivul de intrare în Windows: Setări → Sistem → Sunet.' },
  },
  busy: {
    es: { title: 'El micrófono está ocupado', body: 'Otra aplicación lo está usando (Zoom, Teams, otra pestaña…). Ciérrala e inténtalo de nuevo.' },
    en: { title: 'Microphone is in use', body: 'Another app is using it (Zoom, Teams, another tab…). Close it and try again.' },
    fr: { title: 'Le micro est occupé', body: 'Une autre application l’utilise (Zoom, Teams, un autre onglet…). Ferme-la et réessaie.' },
    pt: { title: 'O microfone está em uso', body: 'Outro aplicativo está usando (Zoom, Teams, outra aba…). Feche-o e tente de novo.' },
    zh: { title: '麦克风正被占用', body: '另一个应用正在使用它（Zoom、Teams、其他标签页…）。请关闭后重试。' },
    jp: { title: 'マイクが使用中です', body: '他のアプリ（Zoom、Teams、別のタブなど）が使っています。閉じてからもう一度お試しください。' },
    ko: { title: '마이크가 사용 중이에요', body: '다른 앱(Zoom, Teams, 다른 탭 등)이 사용 중입니다. 닫고 다시 시도하세요.' },
    ru: { title: 'Микрофон занят', body: 'Другое приложение использует его (Zoom, Teams, другая вкладка…). Закройте его и попробуйте снова.' },
    ar: { title: 'الميكروفون مشغول', body: 'تطبيق آخر يستخدمه (Zoom أو Teams أو علامة تبويب أخرى…). أغلقه وحاول مجددًا.' },
    hi: { title: 'माइक्रोफ़ोन व्यस्त है', body: 'कोई और ऐप इसे इस्तेमाल कर रहा है (Zoom, Teams, दूसरा टैब…)। उसे बंद करके फिर कोशिश करें।' },
    ro: { title: 'Microfonul este ocupat', body: 'Altă aplicație îl folosește (Zoom, Teams, altă filă…). Închide-o și încearcă din nou.' },
  },
  insecure: {
    es: { title: 'Conexión no segura', body: 'El micrófono solo funciona con https. Abre la app desde el enlace oficial (https://voxiaexplora.lovable.app) o desde el icono instalado.' },
    en: { title: 'Insecure connection', body: 'The microphone only works over https. Open the app from the official link (https://voxiaexplora.lovable.app) or the installed icon.' },
    fr: { title: 'Connexion non sécurisée', body: 'Le micro ne fonctionne qu’en https. Ouvre l’app depuis le lien officiel (https://voxiaexplora.lovable.app) ou l’icône installée.' },
    pt: { title: 'Conexão não segura', body: 'O microfone só funciona com https. Abra o app pelo link oficial (https://voxiaexplora.lovable.app) ou pelo ícone instalado.' },
    zh: { title: '连接不安全', body: '麦克风仅在 https 下可用。请通过官方链接 (https://voxiaexplora.lovable.app) 或已安装的图标打开应用。' },
    jp: { title: '安全な接続ではありません', body: 'マイクは https でのみ使えます。公式リンク (https://voxiaexplora.lovable.app) またはインストール済みアイコンから開いてください。' },
    ko: { title: '보안 연결이 아닙니다', body: '마이크는 https에서만 작동해요. 공식 링크(https://voxiaexplora.lovable.app) 또는 설치된 아이콘으로 여세요.' },
    ru: { title: 'Небезопасное соединение', body: 'Микрофон работает только по https. Откройте приложение по официальной ссылке (https://voxiaexplora.lovable.app) или с установленного значка.' },
    ar: { title: 'اتصال غير آمن', body: 'يعمل الميكروفون فقط عبر https. افتح التطبيق من الرابط الرسمي (https://voxiaexplora.lovable.app) أو من الأيقونة المثبتة.' },
    hi: { title: 'असुरक्षित कनेक्शन', body: 'माइक्रोफ़ोन केवल https पर काम करता है। आधिकारिक लिंक (https://voxiaexplora.lovable.app) या इंस्टॉल किए गए आइकन से ऐप खोलें।' },
    ro: { title: 'Conexiune nesecurizată', body: 'Microfonul funcționează doar prin https. Deschide aplicația din linkul oficial (https://voxiaexplora.lovable.app) sau din pictograma instalată.' },
  },
  unsupported: {
    es: { title: 'Navegador sin micrófono', body: 'Tu navegador no permite grabar audio. Usa Chrome o Edge actualizados en tu PC.' },
    en: { title: 'Browser without microphone', body: 'Your browser cannot record audio. Use an up-to-date Chrome or Edge on your PC.' },
    fr: { title: 'Navigateur sans micro', body: 'Ton navigateur ne peut pas enregistrer l’audio. Utilise Chrome ou Edge à jour sur ton PC.' },
    pt: { title: 'Navegador sem microfone', body: 'Seu navegador não consegue gravar áudio. Use Chrome ou Edge atualizado no PC.' },
    zh: { title: '浏览器不支持麦克风', body: '你的浏览器无法录音。请在电脑上使用最新版 Chrome 或 Edge。' },
    jp: { title: 'マイク非対応のブラウザ', body: 'このブラウザは録音できません。PCで最新の Chrome または Edge を使ってください。' },
    ko: { title: '마이크 미지원 브라우저', body: '이 브라우저는 오디오를 녹음할 수 없어요. PC에서 최신 Chrome 또는 Edge를 사용하세요.' },
    ru: { title: 'Браузер без микрофона', body: 'Ваш браузер не может записывать звук. Используйте актуальные Chrome или Edge на ПК.' },
    ar: { title: 'متصفح بلا ميكروفون', body: 'متصفحك لا يستطيع تسجيل الصوت. استخدم Chrome أو Edge المحدث على جهاز الكمبيوتر.' },
    hi: { title: 'ब्राउज़र में माइक्रोफ़ोन नहीं', body: 'आपका ब्राउज़र ऑडियो रिकॉर्ड नहीं कर सकता। PC पर अपडेटेड Chrome या Edge इस्तेमाल करें।' },
    ro: { title: 'Browser fără microfon', body: 'Browserul tău nu poate înregistra audio. Folosește Chrome sau Edge actualizat pe PC.' },
  },
};

const ALT_KEY: Record<string, string> = {
  es: 'Mientras tanto, puedes practicar escribiendo abajo ⌨️',
  en: 'Meanwhile, you can practice by typing below ⌨️',
  fr: 'En attendant, tu peux pratiquer en écrivant ci-dessous ⌨️',
  pt: 'Enquanto isso, você pode praticar escrevendo abaixo ⌨️',
  zh: '在此期间，你可以在下方打字练习 ⌨️',
  jp: 'その間、下の入力欄で練習できます ⌨️',
  ko: '그동안 아래에서 입력으로 연습할 수 있어요 ⌨️',
  ru: 'А пока можно практиковаться, печатая ниже ⌨️',
  ar: 'في هذه الأثناء، يمكنك التدرب بالكتابة أدناه ⌨️',
  hi: 'तब तक आप नीचे टाइप करके अभ्यास कर सकते हैं ⌨️',
  ro: 'Între timp, poți exersa scriind mai jos ⌨️',
};

export function MicHelpCard({ reason, nativeLang, glass }: { reason: MicBlockReason; nativeLang: string; glass: string }) {
  const msg = MESSAGES[reason]?.[nativeLang] || MESSAGES[reason]?.es;
  const alt = ALT_KEY[nativeLang] || ALT_KEY.es;
  if (!msg) return null;
  return (
    <div
      role="alert"
      className={`w-full max-w-[340px] p-3 text-left space-y-1.5 ${glass}`}
      style={{ boxShadow: '0 0 22px hsl(var(--neon-pink) / 0.18)', border: '1px solid hsl(var(--neon-pink) / 0.35)' }}
    >
      <p className="text-sm font-bold">🎤 {msg.title}</p>
      <p className="text-[0.78rem] leading-relaxed opacity-85">{msg.body}</p>
      <p className="text-[0.72rem] opacity-60">{alt}</p>
    </div>
  );
}
